# Dancing Electrons

Website of the Dancing Electrons research group (Prof. Yubo "Paul" Yang,
Department of Physics and Astronomy, Hofstra University), served at
https://dancing-electrons.github.io.

Built with [Astro](https://astro.build). Pushing to `main` triggers the
GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. In the repository settings, Pages must
be set to build from **GitHub Actions** (Settings > Pages > Source).

## Editing content

All content is in plain data files. No page code needs to change for routine
updates.

| What | File |
|---|---|
| Publications | `src/data/publications.yml` |
| People (PI, current members, alumni) | `src/data/people.yml` |
| Research themes and highlighted papers | `src/data/research.yml` |
| Grants shown in the "Supported by" band | `src/data/funding.yml` |
| Photos | `public/people/` (square crops, 600 px or larger) |
| Paper figures | `public/research/` |

Publications are numbered automatically from the oldest ([1]) to the newest,
sorted by the `date` field, and listed newest first. Set `pi` to the
zero-based position of the PI in the `authors` list; that name is bolded.
Give `doi` for a journal link; omit it for preprints. Use `"…"` as an author
entry to elide a long author list.

The home page shows the first three cards of the first section of
`research.yml` as highlights, and the first email in `people.yml` as the
contact.

## Local preview

```bash
nvm use 26        # or any Node 20+
npm install
npm run dev       # http://localhost:4321, hot reload
npm run build     # writes dist/
```

## Design

Colors follow the Hofstra palette (Blue #003594, Gold #FFC72C, Dark Navy
#001254, Mid Blue #2E96FF, Light Blue #84C8FF) without the university logo.
Fonts are Syne (display) and Manrope (body), self-hosted via Fontsource.
The hero graphic (a triangular Wigner crystal on a moiré background) is
drawn by `src/components/MoireHero.astro`; the twist angle constant there
sets the crystal period.
