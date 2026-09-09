# Keaya Chua — Portfolio

A React + Vite portfolio site. Dark, editorial, artistic layout with a custom
palette (wine / mauve / blue / sky / gold), floating hero shapes with subtle
mouse parallax, and scroll-triggered reveals.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Editing your content

Everything text-based lives in **`src/data/content.js`** — your name, bio,
skills, experience, education, projects, and photography captions. You don't
need to touch any component files to update the content; just edit that one
file.

### Photography section

Photos live in `public/photos/` and are listed in `content.js` under
`photography.photos`. To add or swap photos:

1. Drop the image file into `public/photos/`
2. Add (or edit) an entry in `photography.photos` with `src` (e.g.
   `/photos/your-file.jpg`), `alt`, `caption`, and `orientation`
   (`"portrait"` or `"landscape"` — just affects masonry sizing)

The gallery is a CSS masonry grid with a click-to-expand lightbox
(supports arrow keys and Escape). The location captions on the current
photos are best-effort guesses — double check they're right before
publishing.

A few fields are placeholders (clearly marked with `// PLACEHOLDER` comments)
because they weren't in your resume:

- `aboutBio` — a couple of sentences about you, in your own words
- `profile.tagline` / `profile.role` — the one-liner under your name
- `profile.github`, `profile.resumeUrl` — add if you want them linked
- each project's `link` — add a live link, repo, or case study once you have one

## Styling

- Global colors, fonts and shared utility classes: `src/index.css`
- Each section has its own component + CSS file in `src/components/`
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display serif)
  + [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (body/UI),
  loaded from Google Fonts in `index.html`

## Deploying

This is a standard Vite app, so it deploys anywhere static:

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
# drag-and-drop the generated `dist/` folder onto netlify.com/drop
# or: npx netlify-cli deploy --prod --dir=dist
```

**GitHub Pages** — set `base: "/your-repo-name/"` in `vite.config.js`, then:
```bash
npm run build
# push the dist/ output using your preferred gh-pages action/tool
```

Any host works as long as it serves `dist/` after running `npm run build`.
