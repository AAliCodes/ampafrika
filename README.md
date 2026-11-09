# AmpAfrika Umbrella Frontend (Angular 17+ for Vercel)

Unified enterprise frontend for AmpAfrika and its consolidated sub-businesses:
- **AmpAfrika Energy**: Smart solar grid infrastructure & GU10 LED solutions.
- **AmpAfrika Meats**: Ethical halaal protein catalog & wholesale bulk purchasing.
- **Compounds Storefront**: Clinical peptide e-commerce with batch purity lookup.
- **The Milk Run**: Micro-dairy fresh cream & Amasi subscription portal.

## Deployment to Vercel

### Method 1: Vercel CLI (Recommended)
1. Extract this archive into your project workspace.
2. Open a terminal in the root directory.
3. Run `npm install` to install dependencies.
4. Run `npx vercel` and follow the prompts (select Angular framework).

### Method 2: Git Repository Import
1. Push this directory to a GitHub / GitLab / Bitbucket repository.
2. Go to Vercel Dashboard -> Add New Project.
3. Import your repository. Vercel automatically detects `vercel.json` and Angular 17 setup.
4. Click Deploy.

## Local Development
Run `npm run start` to spin up a local development server at `http://localhost:4200/`.
