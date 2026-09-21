# LUMA Commerce

Vercel-ready free deployment of the LUMA storefront.

## Included
- Mobile-first premium storefront
- Search, categories, sorting, favorites and cart
- Cash on Delivery checkout
- Manual bKash checkout using **01768780058**
- Manual payment proof: sender number + Transaction ID
- Account and local order history
- Protected admin login through Vercel environment variables
- Product add/edit/delete and payment verification UI

## Vercel setup
Create these environment variables in the Vercel project:
- `LUMA_ADMIN_EMAIL` — your admin Gmail
- `LUMA_ADMIN_PASSWORD` — a strong admin password

The customer profile, product changes and orders in this no-database version are stored in the browser. This keeps the deployment dependency-free, but shared multi-device production data needs a real database later.

Never collect or enter bKash/Nagad PINs, OTPs or security codes in LUMA.
