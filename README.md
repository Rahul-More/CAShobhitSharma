# CA Personal – Professional Website

A single-page professional website for a Chartered Accountant: minimalist design, hero, credentials, services, service area, testimonials, and contact (email + WhatsApp, mailto contact form). No backend required.

## Stack

- **Vite** + **React** + **TypeScript**
- Content from **`src/content/siteContent.json`** (edit this file to change copy)
- **SEO**: meta tags, JSON-LD (Person), `robots.txt`, `sitemap.xml`
- **Google Analytics (GA4)**: optional, via `VITE_GA_MEASUREMENT_ID`

## Commands

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # output in dist/
npm run preview # preview production build
```

## Content

Edit **`src/content/siteContent.json`** to update:

- **seo**: metaTitle, metaDescription, keywords, canonicalUrl, ogImageUrl
- **hero**: name, designation, tagline, CTA
- **bio**: heading, paragraphs, highlights, optional imageUrl
- **credentials**: heading, items (title, description, year, issuer)
- **services**: heading, items (title, description, ctaText)
- **serviceArea**: heading, intro, areas (array of strings or `{ name, description }`)
- **testimonials**: heading, items (quote, author, roleOrContext, outcome)
- **footer**: contactLine, email, trustBadges, whatsappNumber, whatsappMessage, whatsappLabel

**Images** (optional): The site uses placeholder images from [Unsplash](https://unsplash.com) (free to use). You can replace them in `siteContent.json`:
- **hero.backgroundImageUrl** – full-width hero background (e.g. office, calculator); leave empty to use the default teal gradient.
- **bio.imageUrl** – your professional photo. To use an image from this project: put the file in the **`public/`** folder (e.g. `public/og-image.png`) and set `"imageUrl": "/og-image.png"` in the JSON. Use a root-relative URL starting with `/`, not a path like `./assets/` or `./../public/`.
- **services[].imageUrl** – image per service card (Audit, Tax, Advisory). Use your own URLs or other Unsplash links.

**WhatsApp**: Use `whatsappNumber` with country code and no spaces (e.g. `919876543210`). The site adds a footer link and an optional floating “Chat on WhatsApp” button.

**Contact form**: The contact form uses a **mailto** link: on submit, the user’s email client opens with your address and the message pre-filled. No backend or third-party form service required.

## Google Analytics (GA4)

1. Create a [GA4 property](https://analytics.google.com/) and copy your **Measurement ID** (e.g. `G-XXXXXXXXXX`).
2. Create a `.env` file in the project root (see `.env.example`):
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Build or run for production; GA loads only when this variable is set. Development runs do not send data to GA if the variable is omitted.

## Deployment

Build output is in `dist/`. Deploy to Vercel, Netlify, or GitHub Pages. Update `canonicalUrl` in `siteContent.json` and the URLs in `public/robots.txt` and `public/sitemap.xml` to your live domain.
