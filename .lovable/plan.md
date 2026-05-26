## Plan: Aetheria — Cinematic Enterprise Homepage

Build a single long-form homepage using the selected Cinematic Enterprise direction as the structural and visual reference. Dark luxurious UI, Instrument Serif + Outfit, electric blue accent (#3E63FF).

### Design tokens (ported verbatim into `src/styles.css`)
- `--background: #050505`, `--card/surface: #0F0F11`, `--primary: #3E63FF`, `--muted-foreground: #8E8E93`, foreground white
- Fonts: Instrument Serif (display, italic), Outfit (sans) — loaded via Google Fonts in `__root.tsx`

### Page sections (in order, matching the chosen prototype)
1. **Fixed nav** — Aetheria. wordmark, links (Portfolio / Solutions / Intelligence / Connect), white pill "Book Consultation"
2. **Hero (full-viewport)** — chrome/dark cinematic background image, eyebrow pill, oversized serif italic "Advertising for the Modern Universe.", premium subhead, dual CTAs (Start Your Campaign / View Portfolio)
3. **Industry Showcase** — 3 tall image tiles with staggered offset (Luxury Retail, Health & Tech, Real Estate), gradient overlay captions
4. **What We Create** — 6 large visual cards: Video Ads, Brand Campaigns, Reels & Shorts, Product Creatives, Creator Marketing, Social Campaigns (added on top of prototype's two-up to fulfill brief)
5. **Performance Intelligence** — split: copy block (AI-Assisted Precision, Scalable Production) + cinematic dashboard mockup (ROI/retention tiles, glowing progress bars)
6. **Selected Artifacts (portfolio)** — dominant section: 4 work tiles in asymmetric two-column staggered grid with mockup overlays (campaign + analytics chip floating)
7. **Why Businesses Choose Us** — 4 minimal stat/value rows (faster turnaround, AI workflows, scalable production, premium quality)
8. **Conversion block** — bordered rounded card: serif headline, contact row (WhatsApp / Instagram / Email), Strategy Session CTA
9. **Footer** — copyright, secondary links

### Mockup visuals (cinematic, not functional SaaS)
- Performance dashboard panel (hero of section 5)
- Floating analytics chip on lead portfolio tile (conversion lift + sparkline)
- Creator performance / engagement chips overlayed on work tiles
- AI generation status sticker (pulse dot + progress)
- Small growth chart card in portfolio sidebar

All rendered as Tailwind/CSS — no Recharts. Styled as portfolio art layered on imagery.

### Images
Generate via `imagegen` into `src/assets/` (fast tier, jpg) for: hero cinematic backdrop, 3 industry tiles, 6 capability previews, 4 portfolio campaigns. ~14 images total.

### Animations
Framer Motion for: hero stagger fade-up, scroll-triggered reveals on each section, hover scale on industry/portfolio tiles, subtle parallax on hero. Restrained, premium timing.

### Files
- `src/styles.css` — add brand tokens, font families, keep shadcn base
- `src/routes/__root.tsx` — add Google Fonts links, update meta (title "Aetheria — AI Creative Studio", description, og)
- `src/routes/index.tsx` — compose page from section components
- `src/components/site/` — `Nav.tsx`, `Hero.tsx`, `IndustryShowcase.tsx`, `Capabilities.tsx`, `Intelligence.tsx`, `Portfolio.tsx`, `WhyUs.tsx`, `Conversion.tsx`, `Footer.tsx`
- `src/assets/` — generated images

### Out of scope
No backend, no auth, no real forms — CTAs are visual only. No routing beyond home.
