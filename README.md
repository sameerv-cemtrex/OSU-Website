# OSU Website

This is the source code for the OSU website. It is built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Local Development

1. Clone This repo and install dependencies. (Check the node version before installing. This project uses node version `v20.14.0`. You can manually change this or run `nvm use` in the root directory)

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Now, run the development server:

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

## Learn More

This project uses two fonts "Grozen Medical" and "Aeonik", you can find these in the fonts folder.

## Data and Copy Changes

This project has the data and copy being stored in the `app/data.ts` file. This file contains JSON objects for data related to each section seperately. Just changing the data or copy here, can be reflected in the site UI. It is adviced to make changes here too, when adding or updating the site content. Keeping track of this file will help other people to make changes easily too.
