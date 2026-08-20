# Repository Guidelines

## Project Structure & Module Organization

Read `CONTEXT.md` for approved product language and `docs/landing-page-layout-v1.md` for the current page plan. The Vite entry points are `index.html` and `src/main.tsx`; `src/App.tsx` composes the landing-page sections. Keep reusable UI in `src/components/`, approved copy and structured content in `src/data/`, and test setup in `src/test/`. Web assets live under `public/images/`: product photography is in `product/source/`, while the six in-device screens are in `flow/`.

## Build, Test, and Development Commands

- `npm install`: install the locked dependencies.
- `npm run dev`: start the Vite development server.
- `npm run build`: type-check and create the production bundle in `dist/`.
- `npm run lint`: run Oxlint against `src/`.
- `npm run test:run`: execute the Vitest suite once.
- `npm run preview`: serve the production build locally.

Run build, lint, and tests before opening a pull request.

## Coding Style & Naming Conventions

Use strict TypeScript, two-space indentation, semicolons, and double quotes. React component files and exported components use PascalCase (`ProductBento.tsx`); data and utilities use camelCase. Prefer semantic HTML, accessible labels, and native controls. Keep Tailwind utilities close to markup and shared tokens or custom effects in `src/styles.css`. Use GSAP through `@gsap/react` with scoped `useGSAP` cleanup, and respect `prefers-reduced-motion`.

## Testing Guidelines

Vitest, jsdom, and Testing Library cover rendering and user-facing behavior. Name tests `*.test.tsx` beside the relevant source or under `src/`. Test observable outcomes, especially CTA copy, section presence, and lead-form failure states. Do not fake successful submissions when `VITE_LEAD_FORM_ENDPOINT` is absent.

## Commit & Pull Request Guidelines

Use Conventional Commits such as `feat: build landing page hero` or `fix: prevent false lead submission`. Pull requests need a concise user-facing summary, validation commands, linked issue when applicable, and desktop/mobile screenshots for visual changes. Do not add fabricated logos, testimonials, pricing, cooperation terms, or performance claims.

## Security & Assets

Never commit API keys, credentials, or lead data. Configure the form endpoint through local environment variables. Preserve the machine's physical proportions when editing imagery, keep generated derivatives separate from source photos, and document any externally licensed asset.
