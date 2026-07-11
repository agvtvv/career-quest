# Wiring up real booking for Alan's Barber House

The site is built and live-ready except for one piece: actual appointment
booking. Rather than build a custom booking backend (real appointments need
a database, conflict-safe scheduling, and reliable timed email delivery —
too much risk to hand-roll for a paying customer's real bookings), this site
is wired to embed **Setmore**, which is free for up to 4 staff and supports
exactly what Alan asked for: book with just an email, get a reminder email
exactly 1 hour before the appointment.

## Steps

1. **Create a free Setmore account**: https://www.setmore.com (Free plan
   covers up to 4 staff members — perfect for 3-4 stylists).

2. **Add services** — e.g. Men's Haircut, Beard Trim, Classic Shave,
   Haircut + Beard, Kids' Haircut, Wash & Style (matches the services
   already listed on the site).

3. **Add each stylist** as a staff member, with their working hours (each
   gets their own calendar, so clients pick a specific stylist and see only
   that person's real openings).

4. **Make booking require only name + email** (no phone mandatory):
   Settings → Booking Page → Booking preferences → Contact fields → find
   "Phone" and switch it to not required (or hide it). Leave Name and Email
   as the only required fields.

5. **Set the 1-hour reminder email**: Settings → Notifications → Customer
   reminders → turn on the email reminder and set the lead time dropdown to
   **1 hour** before the appointment (Setmore lets you pick minutes/hours/
   days here).

6. **Get the embed link**: in the Setmore dashboard, go to your Booking
   Page → "Embed on your website" → copy the booking page URL (looks like
   `https://booking-page.setmore.com/scheduler/xxxxxxxxx`).

7. **Paste it into the site**: open `index.html` in this folder, find this
   line near the bottom:

   ```js
   const SETMORE_BOOKING_URL = ""; // e.g. "https://booking-page.setmore.com/scheduler/xxxxx"
   ```

   Paste the URL between the quotes and save. The booking section will
   automatically switch from the "call to book" fallback to the live
   embedded calendar — no other changes needed.

## Still placeholder / to confirm with Alan before launch

- **Stylist names, photos, and specialties** — currently "Stylist 1/2/3" in
  the Stylists section of `index.html`.
- **Opening hours** — the site currently shows Mon–Sat 09:00–20:00, Sunday
  closed, based on the Google Maps screenshot only confirming an 8 PM
  close. Confirm the actual opening time and Sunday status with Alan.
- **Real interior photo** — the hero section is a placeholder graphic.
  Swap in an actual photo of the shop once you have an image file (the
  logo Alan sent was pasted as an image in chat, not saved as a file, so
  it's recreated as a simple scissors-mark SVG for now — replace with his
  real logo file if you want pixel-exact branding).
- **Google Maps embed** — currently uses a basic `maps.google.com?q=...`
  embed which works without an API key but can be flaky. For a guaranteed
  correct pin, go to the business's Google Maps listing → Share → Embed a
  map → copy that iframe code and swap it into the `.map-embed` section.
