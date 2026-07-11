# Frontage

A website-builder product for small businesses that don't have a site yet.

- `index.html` — Frontage's own landing page + waitlist signup. See `README_WAITLIST.md` for how to wire up real email capture.
- `clients/` — sites built for actual Frontage customers.
  - `clients/alans-barber-house/` — first customer site (Bulgarian, Sofia barbershop). See `SETUP_BOOKING.md` in that folder for the free Google Sheets/Apps Script booking backend setup.

## Viewing the sites

This repo is served via GitHub Pages from the `main` branch. Once Pages is enabled (Settings → Pages → Source: Deploy from a branch → `main` → `/ (root)`):

- Frontage landing page: the Pages root URL (e.g. `https://<username>.github.io/<repo>/`)
- Alan's Barber House: same root + `clients/alans-barber-house/`
