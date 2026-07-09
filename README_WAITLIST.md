# Frontage landing page — waitlist setup

`index.html` is a single self-contained static page (no build step, no
server). The waitlist form works out of the box in "demo mode": submissions
are validated and saved to the visitor's browser `localStorage`, and the UI
shows the success state — but nothing leaves the browser yet.

To actually collect real signups, connect a form backend (takes ~2 minutes):

1. Create a free form endpoint with a service like [Formspree](https://formspree.io),
   [Getform](https://getform.io), or similar (no code required on their end).
2. Copy the endpoint URL they give you (e.g. `https://formspree.io/f/xxxxxxx`).
3. Open `index.html`, find this line near the bottom in the `<script>` block:

   ```js
   const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"
   ```

4. Paste your endpoint URL in the quotes and save. That's it — submissions
   will now post there in addition to being saved locally.

Alternative: swap the `fetch(...)` call for a request to your own backend or
a spreadsheet-writing service (e.g. SheetDB, a Zapier webhook, etc.) if you'd
rather own the data pipeline yourself.

## Deploying

Since this is a static file, you can host it for free on Netlify, Vercel,
GitHub Pages, or Cloudflare Pages — just point them at this repo/branch and
serve `index.html`.
