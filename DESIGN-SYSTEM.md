# Ember Ridge — Design System

Luxury mountain retreat meets modern ministry sanctuary. Black is the
foundation, gold is the accent, and whitespace does most of the work.

All tokens are defined once in `src/styles/global.css` inside Tailwind v4's
`@theme` block, which makes each one available as a utility class. Change a hex
value there and it updates everywhere.

---

## 1. Palette

### Foundation — black and charcoal

| Token | Hex | Utility | Use |
|---|---|---|---|
| `ink` | `#0A0A0B` | `bg-ink` | Page background. Near-black, never pure `#000`. |
| `ink-800` | `#101113` | `bg-ink-800` | Barely-raised bands. |
| `charcoal` | `#16171A` | `bg-charcoal` | Cards, tables, form fields. |
| `charcoal-400` | `#1E2024` | `bg-charcoal-400` | Hover surface. |
| `charcoal-300` | `#2A2C31` | `border-charcoal-300` | Hairline borders. Decorative only — never used for text. |

### Accent — gold, used sparingly

| Token | Hex | Utility | Use |
|---|---|---|---|
| `gold-100` | `#F4E7C4` | `text-gold-100` | Text inside gold-tinted review notes. |
| `gold-300` | `#E0C380` | `text-gold-300` | Hover state for gold links; emphasis inside headlines. |
| `gold-400` | `#CFAE63` | `text-gold-400` | Quiet links, active nav item. |
| `gold-500` | `#C8A24A` | `bg-gold-500` | **Primary accent.** Eyebrows, rules, bullets, primary button fill. |
| `gold-600` | `#A8873A` | `border-gold-600` | Borders, callout rules, numerals. |
| `gold-700` | `#7F6529` | `bg-gold-700/10` | Tinted backgrounds at 10%, selection highlight. |

**Discipline:** gold never becomes a background field. It appears as a 1px rule,
a 4px bullet, a border, a small-caps eyebrow, or one button. On a full page there
should be roughly three to five gold moments — no more.

### Support — bronze, stone, cream

| Token | Hex | Utility | Use |
|---|---|---|---|
| `bronze` | `#6E4E2E` | `text-bronze` | Links and rules on cream surfaces. |
| `bronze-light` | `#8A6440` | `bg-bronze-light` | Secondary bullets, differentiating a second list. |
| `stone-100` | `#E6E1D7` | `text-stone-100` | Emphasised body copy, list items. |
| `stone-300` | `#C3BCAF` | `text-stone-300` | **Default body copy on dark.** 10.5:1. |
| `stone-500` | `#8C8577` | `text-stone-500` | Muted labels, footer meta. 5.4:1 — the floor for text on ink. |
| `stone-700` | `#55504A` | `text-stone-700` | Body copy on cream **only**. Fails contrast on ink. |
| `cream` | `#F6F2E9` | `bg-cream` | Legal-page surface; heading colour on dark. |
| `cream-dark` | `#ECE5D6` | `bg-cream-dark` | Legal-page masthead. |
| `bone` | `#FBF9F4` | `bg-bone` | Reserved for print and future light sections. |

### Measured contrast (WCAG AA)

| Pair | Ratio | AA normal |
|---|---|---|
| stone-300 on ink | 10.49 | Pass |
| cream on ink | 17.71 | Pass |
| gold-500 on ink | 8.22 | Pass |
| ink on gold-500 (button) | 8.22 | Pass |
| stone-500 on ink | 5.41 | Pass |
| gold-600 on ink | 5.83 | Pass |
| stone-700 on cream | 7.14 | Pass |
| bronze on cream | 6.73 | Pass |

---

## 2. Typography

Two families, both self-hosted via `@fontsource` — no external font requests,
which keeps the site fast and the Cookie Notice honest.

- **Display — Cormorant Garamond**, weights 300/400/500 + italic 400.
  `font-display`. Set at weight 300 with `-0.012em` tracking and `text-wrap: balance`.
- **Body / UI — Inter Variable.** `font-sans`. Used for body copy, eyebrows,
  buttons, labels and legal text.

| Class | Renders | Use |
|---|---|---|
| `.eyebrow` | 11px, uppercase, `0.22em` tracking, gold-500 | Section kicker above every heading |
| `.display-1` | Cormorant 36 → 68px, `1.06` leading | Page `<h1>` only |
| `.display-2` | Cormorant 30 → 48px | Major section `<h2>` |
| `.display-3` | Cormorant 24 → 30px | Sub-section `<h3>`, card group headings |
| `.lede` | Cormorant 20 → 24px, italic, stone-100 | The one-sentence statement under a heading |
| `.prose-body` | Inter 17px, `1.8` leading, max `42rem` | Long-form body columns |
| `.pullquote` | Cormorant 24 → 30px, italic | Quotes and Scripture |
| `.legal-doc` | Inter 15px, `1.85` leading | Policy pages — plain, dense, high legibility |

**Rules.** Italic Cormorant carries the reverent voice — use it for ledes and
quotes, never for UI. Body columns are capped at `42rem` (~72 characters).
Headings are never all-caps; small-caps tracking is reserved for eyebrows,
buttons and labels.

---

## 3. Spacing and layout

| Class | Value |
|---|---|
| `.shell` | `max-w-76rem`, `px-6 → px-12` — the standard content container |
| `.shell-tight` | `max-w-46rem` — legal pages and single-column reading |
| `.section` | `py-20 → py-36` — standard vertical rhythm |
| `.section-sm` | `py-14 → py-20` — statement bands and interstitials |

Alternate `tone="ink"` and `tone="charcoal"` on consecutive `<Section>` elements
to create quiet horizontal bands without adding borders or ornament. Editorial
asymmetry is preferred over centred columns: heading in `lg:col-span-5`, body in
`lg:col-span-7`.

---

## 4. Components

**Buttons** — square corners, `1rem 2rem` padding, uppercase `0.14em` tracking.

- `.btn-primary` — gold fill, ink text. One per view. Lifts 1px with a soft gold glow on hover.
- `.btn-outline` — stone border, transparent fill. Border warms to gold on hover.
- `.btn-quiet` — inline gold text link with a trailing arrow, for "learn more".

Note: `.btn` is declared as `@utility btn` at the top level of `global.css`, not
inside `@layer components`. Tailwind v4 cannot `@apply` a class defined in a
layer, and the variants above need to apply it. Do not move it.

**Cards** — `.card` is charcoal with a `charcoal-300` hairline and `p-8`. Add
`.card-lift` for the hover treatment: 4px rise, deep shadow, border warming to
`gold-700`. Roman or two-digit numerals in `.card-numeral` give a set of cards an
editorial index feel.

**Callouts** — `.callout`: 2px gold left border, translucent charcoal fill. For
clarifications and boundaries, not for emphasis-by-shouting.

**Quotes** — `<PullQuote>`: 2px gold left border, generous left padding, italic
Cormorant, optional small-caps citation.

**Review notes** — `<ReviewNote>`: gold-tinted panel with a warning glyph, for
anything awaiting legal, financial or factual sign-off. Deliberately visible.
Grep for `ReviewNote` to find every open item.

**Footer** — three columns on desktop (identity, explore, connect), the Firebrand
attribution lockup, a gold small-caps motto line, the five legal links on their
own row, and a standing note that Ember Ridge is in formation.

---

## 5. Motion

One easing curve — `--ease-refined: cubic-bezier(0.16, 0.8, 0.24, 1)` — used
everywhere, so the whole site decelerates the same way.

| Effect | Implementation | Duration |
|---|---|---|
| Hero ambient drift | two radial gradients, `animate-ember-drift` + `animate-ember-glow` | 26s / 9s, alternating |
| Section reveal | one `IntersectionObserver` toggles `.is-visible` on `[data-reveal]`; fade + 18px rise | 900ms |
| Staggered card entry | `data-reveal-delay` in 80–90ms increments | — |
| Nav underline | `after:` pseudo-element scaling from origin-left | 300ms |
| Card lift | `translateY(-4px)` + shadow + border warm | 500ms |
| Portrait | `scale(1.03)` and grayscale 18% → 0% | 900ms |
| Bio disclosure | `grid-template-rows: 0fr → 1fr` (fluid height, no max-height guessing) | 600ms |

No animation library — the whole reveal system is roughly 25 lines of vanilla
JavaScript. **Everything is disabled under `prefers-reduced-motion: reduce`**,
including the ambient hero gradients and smooth scrolling.

---

## 6. Imagery

- Portraits are square-cropped to 900×900, served at `aspect-[4/5]` with
  `object-top`, and carry an 18% grayscale that clears on hover — this unifies
  photographs taken in different settings.
- A gradient scrim from `charcoal` up to transparent sits over each portrait so
  the card and the photograph read as one object.
- `.grain` adds a 3.5% SVG noise overlay on large black fields to prevent
  gradient banding on wide screens.
- Logos: `*-logo-dark.png` variants were generated by remapping the black
  lettering to cream while preserving the gold, so the marks read correctly on
  black without a CSS filter flattening the gold.
