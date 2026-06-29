# Parinama Website — Project Context (CLAUDE.md)

## What we're building
Phase 1 marketing/investor website for Parinama Group — India's first full-stack
climate platform (AIF · Advisory · Ecosystem). Six static pages.
Goal: clear, credible, visually appealing, FAST to build and publish.
This is Phase 1 — keep it simple. Static, minimal JS, no CMS/auth/database yet.

## Stack & conventions
- Astro + Tailwind CSS. Static output. Minimal client JS.
- Deploy: Vercel (or Netlify). Domain: parinama.com.
- Components in /src/components. Page content specs in /specs.
- Pull ALL copy and numbers from /specs files. NEVER invent statistics —
  this is investor-facing; a wrong/hallucinated number is a real risk.
- TypeScript where applicable. Mobile-first responsive. Target Lighthouse 95+.

## Brand
- Name: Parinama (परिणाम) — Sanskrit for transformation / fruition / outcome.
- Positioning: "India's first full-stack climate platform."
- Pillars: AIF · Advisory · Ecosystem.
- Palette: deep forest green (primary), lime/chartreuse (accent),
  sky-blue (highlights), off-white background, near-black text.
  Define these as Tailwind theme tokens.
- Type: serif headlines (institutional) + grotesk sans body.
  Suggested: serif "Fraunces", sans "Inter".
- Tone: institutional, evidence-led, mission-driven. Every claim backed by a stat.

## Global components (BUILD THESE FIRST)
- Nav: persistent top nav — Platform · The Fund · Ecosystem · Team · Contact
  + primary "Investor Enquiry" button (right). Logo links home.
- StatStrip: 4-up counters. Reused on Homepage + Contact.
- Footer: logo + "India's first full-stack climate platform · AIF · Advisory ·
  Ecosystem"; investors@parinama.com; the required disclaimer (below).
- SectionHeading, CardGrid, ComparisonTable, CapitalStack (donut/stacked bar),
  Funnel.

## Required legal text
Must appear in the footer on EVERY page, and prominently on /fund and /contact:
"For informational purposes only. Does not constitute an offer to buy or sell
securities. Subject to SEBI AIF Regulations 2012."

## Global stat strip values
$10.1T  — India climate infra need 2030–2070 (CEEW-CEF)
$150M   — target fund size (SEBI Cat-II AIF; hard cap $200M, TBD)
15–20%  — blended net IRR (USD, post-fees)  [SEE DECISION #2]
40+     — institutional partners engaged & aligned


## Placeholders (DO NOT ship fake assets)
- Team headshots and partner logos: use clearly labeled placeholder components.
- Hero image: labeled placeholder until final asset is provided.

## Build order
1. Scaffold + Tailwind theme + global components.
2. Homepage. 3. Deploy (get a live URL early).
4. /platform -> /fund -> /ecosystem -> /team -> /contact (one at a time).

## Workflow rules
- Use plan mode before large changes; propose file structure first, then build.
- After each page: run dev server, fix console errors, check mobile +
  Lighthouse before declaring it done.
- Commit after each working page.