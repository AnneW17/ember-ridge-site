# Ember Ridge — Pre-Launch Review Checklist

Every item below is something the site currently marks as unverified. Nothing has
been invented to fill a gap. Work top to bottom; the site can go live behind a
Netlify password while this is in progress.

---

## A. Legal — drafted 30 July 2026, awaiting your adoption

All six legal pages are now complete drafts with no bracketed placeholders. They are
written for federal law plus North Carolina and Washington. They are not legal advice
and have not been reviewed by outside counsel.

| # | Item | File |
|---|---|---|
| A1 | Confirm the exact legal entity name and mailing address to publish | all legal pages |
| A2 | ✅ Tax status stated: church under §508(c)(1)(A), gifts deductible to the extent permitted by law, receipts provided. Confirm wording | `disclaimer.astro`, `financial-stewardship.astro` |
| A3 | ✅ Privacy Policy complete. WA has no comprehensive privacy statute; NC has none. Rights offered to all visitors as a matter of practice | `privacy-policy.astro` |
| A4 | ✅ Limitation of liability drafted, capped at $100. **Confirm the cap and the carve-outs** | `terms-of-use.astro` |
| A5 | ✅ Governing law North Carolina; venue Wilkes County. **Confirm venue** — the ministry's current base of operations may point elsewhere | `terms-of-use.astro` |
| A6 | Confirm trademark status of the Ember Ridge and Firebrand Revivalists marks; confirm photo licences for all concept imagery | `terms-of-use.astro` |
| A7 | Review the Sophion related-party language against the governing documents and conflict-of-interest policy | `leadership.astro` |
| A8 | **NC: religious institutions are exempt from charitable solicitation licensing (N.C.G.S. § 131F-3).** WA: churches and integrated auxiliaries are exempt from RCW 19.09 registration, but "religious organizations" that are not churches are not — confirm which category Firebrand falls into in Washington | — |
| A9 | ✅ Processors described generically (host and form processor, email provider). Name them specifically if you prefer | `privacy-policy.astro` |
| A10 | ✅ Retention periods set: 24 months for correspondence, 7 years for giving records, 30 days for server logs. **Confirm these match actual practice** | `privacy-policy.astro` |
| A11 | ✅ Cookie Notice complete. No consent banner needed while the site sets no non-essential cookies | `cookie-notice.astro` |
| A12 | ✅ Effective date set to 30 July 2026 on all six pages; draft banners removed | `LegalLayout.astro` |
| A13 | **Washington My Health My Data Act (RCW 19.373)** — no nonprofit exemption, no revenue threshold. A separate Consumer Health Data Privacy Policy is now published and linked from the homepage footer as the Act requires. Confirm the ministry's Washington nexus and whether the intercession team's handling of prayer requests matches what the policy describes | `consumer-health-data-privacy.astro` |
| A14 | Confirm the gift variance-power language in Terms §6 matches Firebrand's bylaws | `terms-of-use.astro` |

## B. Content and facts to confirm

| # | Item | File |
|---|---|---|
| B1 | Replace all four leadership bios with each leader's own approved text | `src/data/leadership.ts` |
| B2 | Confirm titles and credentials exactly as each leader wants them published | `src/data/leadership.ts` |
| B3 | Add Mark Burgett's portrait — drop the file at `public/images/leadership/mark-burgett.jpg` and update the `image` path | `src/data/leadership.ts` |
| B4 | Verify property facts (1993, ~10 bedrooms, ~11 bathrooms, ~11 acres) against appraisal, survey and tax records | `src/pages/campus-vision.astro` |
| B5 | Confirm the current status of property negotiations; do not name the seller or exact address before closing | `src/pages/the-place.astro` |
| B6 | Confirm the capital ranges are still current, or replace with post-bid figures | `src/components/CapitalTable.astro` |
| B7 | Confirm whether a phone number or full mailing address should be public (email is set to info@firebrandrevivalists.com) | `src/data/site.ts` |
| B10 | **Zelle needs a recipient email or phone number** — the site currently shows only the name "Firebrand Revivalists," which is not enough for a donor to complete a transfer | `src/data/site.ts` |
| B11 | Regenerate the prayer garden image — the Scripture text on the stone is garbled | `public/images/campus/prayer-garden.jpg` |
| B8 | Confirm the crisis-resource wording and that 988 references are current | `contact.astro`, `disclaimer.astro` |
| B9 | Decide whether to publish board member names once the board is formally seated | `src/pages/leadership.astro` |

---

## C. Technical setup

| # | Item | Where |
|---|---|---|
| C1 | Confirm the production domain and update `site` in `astro.config.mjs` | `astro.config.mjs` |
| C2 | Update the `Sitemap:` line to match | `public/robots.txt` |
| C3 | Connect the GitHub repository to Netlify | Netlify dashboard |
| C4 | Add the custom domain and confirm TLS | Netlify → Domain management |
| C5 | Set form notification recipients for `ember-ridge-inquiry`; decide who may read confidential submissions | Netlify → Forms |
| C6 | Enable password protection while the site is in review | Netlify → Access control |
| C7 | Review the baseline security headers with counsel or an IT advisor | `netlify.toml` |
| C8 | Create 1200×630 social share images per page and pass `ogImage` to `BaseLayout` | `public/images/og/` |
| C9 | Add conceptual renderings for the great room, dining, prayer garden and pavilion, each captioned as conceptual | `campus-vision.astro` |
| C10 | Run Lighthouse and a screen-reader pass; record results in the Accessibility Statement | `legal/accessibility-statement.astro` |

---

## D. Deliberately not built

These were left out on purpose. Each needs a decision before it is added.

- ~~**Online giving.**~~ Added 30 July 2026 — four methods on the Partner page under "Ways to give."
- **Analytics.** No tracking of any kind, which is what makes the Cookie Notice as short as it is. If analytics are added, update the Cookie Notice and Privacy Policy first.
- **Newsletter signup.** No mailing-list capture. Would need its own consent language.
- **Application or booking form for stays.** The document is explicit that placements are prayerfully discerned through relationship and referral, not publicly marketed — so the site invites a conversation instead.
- **Blog, events calendar, or sermon library.** Not in the source document.
- **Testimonials or outcome claims.** Nothing that would overstate results.

---

## How to find every open item in the code

```bash
grep -rn "TODO" src/                  # placeholder values
grep -rn "ReviewNote" src/pages/      # visible review banners on public pages
grep -rn "Needs legal review" src/    # items awaiting counsel
grep -rn "\[Needs" src/pages/legal/   # bracketed items inside policy text
```
