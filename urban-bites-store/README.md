# Urban Bites — React + TypeScript Storefront

A desktop-first responsive e-commerce storefront for Urban Bites, built with React 19, TypeScript, Vite, TailwindCSS 3.4, React Router and react-i18next.

## Requirements

- Node.js 20+ recommended
- npm 10+

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Main routes

- `/`
- `/products`
- `/product/:id`
- `/cart`
- `/checkout`
- `404` fallback

## Notes

- Cart state is persisted in `localStorage`.
- Checkout is Cash on Delivery only and uses a demo success flow; there is no payment gateway or backend.
- Product/hero imagery currently uses remote LoremFlickr URLs so the project stays lightweight. Replace these URLs in `src/mocks/products.ts` and `src/pages/Home.tsx` with your own CDN/local AI-generated assets for production.
- The supplied Urban Bites logo is included as `public/urbanbiteslogo.png`.
- `react-i18next` is initialized with English as the default language and can be expanded in `src/i18n.ts`.
