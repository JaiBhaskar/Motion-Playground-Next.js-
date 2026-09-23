# Motion Playground

A collection of small, interactive animation experiments built with React, Next.js, and Motion. Explore the page and try the examples: hover and tap the buttons, click the expandable items, and drag the lizard card.

## Highlights

- Spring-based hover and tap interactions
- Entrance animations and staggered list reveals
- Expandable items animated with layout transitions
- A draggable card with elastic constraints
- A cursor-following glow and looping live badge
- A simple loading indicator and bouncing arrow

## Tech stack

- [Next.js](https://nextjs.org/) with the App Router
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Motion](https://motion.dev/) for animation
- [Tailwind CSS](https://tailwindcss.com/) for utility styling
- [MUI](https://mui.com/) for the demo card

## Run locally

Use Node.js and npm, then install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the playground.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm run start` | Run the production server after building |
| `npm run lint` | Run ESLint |

## Project structure

```text
app/
  components/   Individual animation demos
  page.tsx      Playground page that brings the demos together
  globals.css   Global styles
public/
  images/       Images used by the demos
```

## License

No license has been specified yet. Add a license before inviting others to reuse or redistribute this project.
