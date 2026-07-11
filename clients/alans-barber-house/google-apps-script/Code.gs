/**
 * Alan's Barber House — booking backend.
 *
 * Runs entirely inside a Google Sheet (free, no hosting, no third-party
 * account beyond Google). Two sheet tabs are required:
 *
 *   "Stylists" — columns: Name | StartTime (e.g. 09:00) | EndTime (e.g. 20:00) | WorkDays
 *     WorkDays is a comma-separated list of weekday numbers, Sunday=0:
 *     "1,2,3,4,5,6" means Monday through Saturday.
 *
 *   "Bookings" — columns: Timestamp | Name | Email | Service | Stylist | Date | Time | ReminderSent
 *     This sheet is written to automatically — just create the header row.
 *
 * See ../SETUP_BOOKING.md for the exact one-time setup steps
 * (paste this file into Apps Script, deploy as a Web App, add a
 * time-driven trigger for sendReminders).
 */

const TIMEZONE = 'Europe/Sofia';
const SLOT_MINUTES = 30;
const MIN_NOTICE_MINUTES = 30; // don't allow booking a slot less than this far out

function doGet(e) {
  try {
    const action = e.parameter.action;
    if (action === 'stylists') return jsonOutput({ stylists: getStylists().map(s => s.name) });
    if (action === 'slots') return jsonOutput(getAvailableSlots(e.parameter.stylist, e.parameter.date));
    return jsonOutput({ error: 'Unknown action' });
  } catch (err) {
    return jsonOutput({ error: err.message });
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const data = JSON.parse(e.postData.contents);
    return jsonOutput(createBooking(data));
  } catch (err) {
    return jsonOutput({ success: false, error: err.message });
  } finally {
    lock.releaseLock();
  }
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function getStylistsSheet() { return SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Stylists'); }
function getBookingsSheet() { return SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Bookings'); }

function getStylists() {
  const rows = getStylistsSheet().getDataRange().getValues();
  rows.shift(); // header
  return rows
    .filter(r => r[0])
    .map(r => ({
      name: String(r[0]),
      startTime: String(r[1]),
      endTime: String(r[2]),
      workDays: String(r[3]).split(',').map(d => parseInt(d.trim(), 10))
    }));
}

function formatDateOnly(val) {
  if (val instanceof Date) return Utilities.formatDate(val, TIMEZONE, 'yyyy-MM-dd');
  return String(val);
}

function getAvailableSlots(stylistName, dateStr) {
  const stylist = getStylists().find(s => s.name === stylistName);
  if (!stylist) return { error: 'Стилистът не е намерен' };
  if (!dateStr) return { error: 'Липсва дата' };

  const date = new Date(dateStr + 'T00:00:00');
  if (!stylist.workDays.includes(date.getDay())) return { slots: [] };

  const [sh, sm] = stylist.startTime.split(':').map(Number);
  const [eh, em] = stylist.endTime.split(':').map(Number);
  const dayStart = new Date(date); dayStart.setHours(sh, sm, 0, 0);
  const dayEnd = new Date(date); dayEnd.setHours(eh, em, 0, 0);

  const slots = [];
  for (let t = new Date(dayStart); t < dayEnd; t = new Date(t.getTime() + SLOT_MINUTES * 60000)) {
    slots.push(Utilities.formatDate(t, TIMEZONE, 'HH:mm'));
  }

  const bookings = getBookingsSheet().getDataRange().getValues();
  bookings.shift(); // header
  const taken = new Set(
    bookings
      .filter(r => r[4] === stylistName && formatDateOnly(r[5]) === dateStr)
      .map(r => r[6])
  );

  const now = new Date();
  return {
    slots: slots.filter(s => {
      if (taken.has(s)) return false;
      const [h, m] = s.split(':').map(Number);
      const slotTime = new Date(date); slotTime.setHours(h, m, 0, 0);
      return slotTime.getTime() > now.getTime() + MIN_NOTICE_MINUTES * 60000;
    })
  };
}

function createBooking(data) {
  const { name, email, service, stylist, date, time } = data || {};
  if (!name || !email || !service || !stylist || !date || !time) {
    return { success: false, error: 'Липсват данни за резервацията.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Невалиден имейл адрес.' };
  }

  // Re-check availability under the lock to prevent double-booking.
  const available = getAvailableSlots(stylist, date);
  if (!available.slots || !available.slots.includes(time)) {
    return { success: false, error: 'Този час току-що беше зает. Моля, избери друг.' };
  }

  getBookingsSheet().appendRow([new Date(), name, email, service, stylist, date, time, false]);
  return { success: true };
}

/**
 * Set a time-driven trigger to run this every 5-10 minutes
 * (Apps Script editor → Triggers (clock icon) → Add Trigger →
 * function: sendReminders → time-driven → minutes timer → every 10 minutes).
 */
function sendReminders() {
  const sheet = getBookingsSheet();
  const rows = sheet.getDataRange().getValues();
  const now = new Date();

  for (let i = 1; i < rows.length; i++) {
    const [, name, email, service, stylist, date, time, reminderSent] = rows[i];
    if (reminderSent) continue;
    if (!date || !time) continue;

    const dateStr = formatDateOnly(date);
    const [h, m] = String(time).split(':').map(Number);
    const apptTime = new Date(dateStr + 'T00:00:00');
    apptTime.setHours(h, m, 0, 0);

    const minutesUntil = (apptTime.getTime() - now.getTime()) / 60000;

    // Fires once per booking, in the window ~50-65 minutes before the
    // appointment (wide enough that a 10-minute trigger interval can't skip it).
    if (minutesUntil <= 65 && minutesUntil > 50) {
      MailApp.sendEmail({
        to: email,
        subject: "Напомняне за часа ти в Alan's Barber House",
        body:
          `Здравей ${name},\n\n` +
          `Напомняме ти, че имаш запазен час в Alan's Barber House днес в ${time} ч. ` +
          `при ${stylist} за „${service}“.\n\n` +
          `Адрес: ж.к. Белите брези, бул. „Гоце Делчев“ 9, София.\n` +
          `Телефон: 088 977 1917\n\n` +
          `До скоро!\nAlan's Barber House`
      });
      sheet.getRange(i + 1, 8).setValue(true); // column H = ReminderSent
    }
  }
}
