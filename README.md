# Little Pines Studio — v0

A trust-building document in website form. Four pages, editorial aesthetic, no backend beyond email capture.

## Local dev

```bash
npm run dev   # → http://localhost:3000
```

## Deploy to Vercel

Connect this directory as a Vercel project. Set **Root Directory** to `v0`. No env vars needed for v0.

To wire up real email, edit `src/app/api/subscribe/route.ts` — Buttondown/ConvertKit snippets are in the TODO comment there.

## Editing copy

| Page | File |
|------|------|
| Home | `src/app/page.tsx` — promise text is in the `PROMISES` array at top of file |
| Promise | `src/app/promise/page.mdx` |
| Research | `src/app/research/page.mdx` |
| Studio | `src/app/studio/page.mdx` |

## Design tokens (`src/app/globals.css`)

`--color-ink` · `--color-paper` · `--color-forest` · `--color-rule` + Fraunces / Source Serif 4 via `next/font/google`.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
