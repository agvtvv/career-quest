# Setting up real booking for Alan's Barber House (free, no third-party app)

This replaces the earlier Setmore-based plan. Everything runs on a Google
Sheet you own — no monthly fees, no separate company signing up for
anything, just the Google account you already have.

**How it works:** the booking form on the site talks to a small script
attached to a Google Sheet. Every booking becomes a row in that Sheet
(so you can always just open it and see the day's appointments). Every
10 minutes, the script checks for any appointment starting in about an
hour and emails the customer a reminder automatically.

## One-time setup (about 10 minutes)

### 1. Create the Sheet
1. Go to [sheets.google.com](https://sheets.google.com) and create a new
   blank spreadsheet. Name it "Alan's Barber House — Bookings".
2. Rename the first tab (bottom-left) to `Bookings`. In row 1, type these
   exact column headers, one per cell, A through H:
   `Timestamp | Name | Email | Service | Stylist | Date | Time | ReminderSent`
3. Add a second tab (click the **+** at the bottom) named `Stylists`.
   In row 1 put headers: `Name | StartTime | EndTime | WorkDays`.
   Then add one row per stylist below, for example:

   | Name | StartTime | EndTime | WorkDays |
   |---|---|---|---|
   | Стилист 1 | 09:00 | 20:00 | 1,2,3,4,5,6 |
   | Стилист 2 | 09:00 | 20:00 | 1,2,3,4,5,6 |
   | Стилист 3 | 09:00 | 20:00 | 1,2,3,4,5,6 |

   `WorkDays` is which days that stylist works, as numbers: Sunday=0,
   Monday=1, Tuesday=2 ... Saturday=6. `1,2,3,4,5,6` means "every day
   except Sunday." Adjust per stylist once you have their real schedule.

### 2. Add the script
1. In the Sheet, go to **Extensions → Apps Script**. A code editor opens
   in a new tab.
2. Delete whatever's in the default `Code.gs` file, and paste in the
   entire contents of `google-apps-script/Code.gs` from this folder.
3. At the top of that Apps Script editor, click **Project Settings**
   (gear icon on the left) and set the **Time zone** to
   `(GMT+02:00) Europe/Sofia` — this keeps appointment times correct.
4. Click **Save** (disk icon).

### 3. Deploy it as a Web App
1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set **Execute as**: "Me". Set **Who has access**: "Anyone".
4. Click **Deploy**. Google will ask you to authorize — click through
   the "Google hasn't verified this app" warning (this is normal for
   your own personal scripts; click **Advanced → Go to (project
   name)** → **Allow**).
5. Copy the **Web app URL** it gives you (looks like
   `https://script.google.com/macros/s/AKfycb.../exec`).

### 4. Connect the site
1. Open `index.html` in this folder, find this line near the bottom:

   ```js
   const GOOGLE_SCRIPT_URL = ""; // e.g. "https://script.google.com/macros/s/XXXXXXXX/exec"
   ```

2. Paste your Web app URL between the quotes and save. The booking
   section switches automatically from the "call to book" fallback to
   the live booking form.

### 5. Turn on the reminder emails
1. Back in the Apps Script editor, click the **clock icon** ("Triggers")
   on the left sidebar.
2. Click **+ Add Trigger**.
3. Set: function `sendReminders`, event source "Time-driven", type
   "Minutes timer", every 10 minutes. Click **Save**.

That's it — from now on, every booking on the site appends a row to the
`Bookings` tab, and any appointment within about an hour automatically
gets a reminder email sent to the address the customer typed in.

## Still to confirm / fill in

- **Real stylist names and hours** — replace `Стилист 1/2/3` in the
  `Stylists` tab (and in the Stylists section of `index.html`) with real
  names once you have them.
- **Opening hours** — currently assumes 09:00–20:00, Mon–Sat, based only
  on the Google Maps screenshot confirming an 8 PM close. Confirm the
  actual opening time and Sunday status with Alan, and update both the
  `Stylists` tab and the hours table in `index.html`.
- **Real interior photo / logo file** — the hero section is a placeholder
  graphic and the logo is a simple recreated scissors mark, since the
  images pasted in chat aren't saved as files I can use directly. Send
  the actual image files and I'll drop them in.
- **Google Maps embed** — uses a no-API-key embed technique I couldn't
  verify renders from this sandboxed environment (no network route to
  Google Maps here to test). For a guaranteed-correct pin, grab the
  official iframe snippet from Alan's Google Maps listing via
  **Share → Embed a map** and swap it into the `.map-embed` section.

## Notes on scale and limits

This setup comfortably handles a single barbershop's booking volume.
Two Google-side limits worth knowing about, in case the shop grows:
- Gmail sending limit: 100 emails/day on a free personal Gmail account
  (1,500/day if using Google Workspace). Fine for reminders at this scale.
  If it ever runs into that ceiling, that's a builder-worthy problem —
  message me and I'll switch the email-sending step to a dedicated
  provider (e.g. Resend's free tier) without changing anything else.
- The lock used when saving a booking prevents two people from grabbing
  the same slot at the same instant.
