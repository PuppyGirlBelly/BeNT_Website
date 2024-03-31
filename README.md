# Better Noise Toys Website

This website is constructed using the [Astro Framework](https://astro.build/). Built on top of the 
[Build your first Astro Blog](https://docs.astro.build/en/tutorial/0-introduction/) tutorial. To develop start with running the 
following command;

```sh
npm install
```

## Project Structure

```text
│ Directory                      │ Notes
└────────────────────────────────┼─────────────────────────────────
/                                │
├── dist                         │ - Output of `npm build`
│   └── ... (`npm build` output) │
├── public                       │ - Static resources (e.g. img)
│   └── favicon.svg              │
├── src                          │ - Web Page, Scripts, and Styles
│   ├── components               │ - Reusable components
│   │   └── <component>.astro    │
│   ├── layouts                  │ - Layouts and page organization
│   │   ├── <layout>.astro       │
│   ├── pages                    │ - Webpages and content
│   │   ├── posts                │ - Blog posts
│   │   │   └── <blog post>.md   │
│   │   ├── tags                 │ - Tags (automatically generated)
│   │   │   ├── index.astro      │
│   │   │   └── [tag].astro      │
│   │   ├── rss.xml.ts           │ - RSS Feed generation script
│   │   ├── index.astro          │ - Home page and starting point
│   │   ├── <web pages>.astro    │
│   ├── scripts                  │ - Typescript scripts
│   │   └── <scripts>.ts         │
│   ├── styles                   │ - CSS styles
│   │   ├── global.css           │
│   │   └── <styles>.css         │
│   └── env.d.ts                 │
├── .gitignore                   │
├── .stylelintrc.json            │
├── astro.config.ts              │
├── eslint.config.js             │
├── package-lock.json            │
├── package.json                 │
├── prettier.config.js           │
└── tsconfig.json                │
├── README.md                    │
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands


| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
