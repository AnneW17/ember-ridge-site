# Ember Ridge — Pre-Launch Review Checklist

Every item below is something the site currently marks as unverified. Nothing has
been invented to fill a gap. Work top to bottom; the site can go live behind a
Netlify password while this is in progress.

---

## A. Legal review — required before the site is public

| # | Item | File |
|---|---|---|
| A1 | Confirm exact legal entity name, state of incorporation, mailing address, privacy contact | `src/pages/legal/privacy-policy.astro` |
| A2 | Confirm tax status of Firebrand Revivalists and **all** language about deductibility, receipting, restricted gifts, donor reporting | `disclaimer.astro`, `financial-stewardship.astro` |
| A3 | Determine whether state privacy laws (CA, CO, CT, VA, others) apply; add required disclosures and response timelines | `privacy-policy.astro` |
| A4 | Write the limitation of liability and indemnity clause for NC law — **currently a placeholder** | `terms-of-use.astro` |
| A5 | Confirm venue and dispute-resolution preference | `terms-of-use.astro` |
| A6 | Confirm trademark status of the Ember Ridge and Firebrand Revivalists marks; confirm photo licences and credits | `terms-of-use.astro` |
| A7 | Review related-party language for Sophion Media & Consulting Group against the governing documents and conflict-of-interest policy | `leadership.astro` |
| A8 | Confirm charitable solicitation registration for NC and any other state before adding a donate button | `partner.astro` |
| A9 | List the specific data processors in use (host, form handling, email, any CRM) and confirm their terms | `privacy-policy.astro` |
| A10 | Set a retention period for form submissions and confidential correspondence | `privacy-policy.astro` |
| A11 | Confirm which strictly-necessary cookies the host sets; complete the inventory table | `cookie-notice.astro` |
| A12 | Set the `Last updated` date on all five legal pages, then remove the draft banner from `LegalLayout.astro` | `src/layouts/LegalLayout.astro` |

---

## B. Content and facts to confirm

| # | Item | File |
|---|---|---|
| B1 | Replace all four leadership bios with each leader's own approved text | `src/data/leadership.ts` |
| B2 | Confirm titles and credentials exactly as each leader wants them published | `src/data/leadership.ts` |
| B3 | Add Mark Burgett's portrait — drop the file at `public/images/leadership/mark-burgett.jpg` and update the `image` path | `src/data/leadership.ts` |
| B4 | Verify property facts (1993, ~10 bedrooms, ~11 bathrooms, ~11 acres) against appraisal, survey and tax records | `src/pages/campus-vision.astro` |
| B5 | Confirm the current status of property negotiations; do not name the seller or exact address before closing | `src/pages/the-place.astro` |
| B6 | Confirm the capital ranges are still current, or replace with post-bid figures | `src/components/CapitalTable.astro` |
| B7 | Confirm real email addresses, and whether a phone number or full mailing address should be public | `src/data/site.ts` |
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

- **Online giving.** No donate button, no payment processor, no giving page. Gated on A2 and A8.
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
