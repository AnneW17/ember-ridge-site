// src/data/site.ts
// Single source of truth for org details, contact info and nav.
// NEEDS REVIEW: confirm email, phone, mailing address and legal entity name
// before launch. Placeholders are marked with TODO.

export const site = {
  name: 'Ember Ridge',
  parentOrg: 'Firebrand Revivalists',
  tagline: 'A house that ministers first to the Lord.',
  descriptor: 'A ministry of Firebrand Revivalists · Moravian Falls, North Carolina',
  location: 'Moravian Falls, North Carolina',
  url: 'https://emberridge.org', // TODO confirm production domain
  mission:
    'Ember Ridge exists to tend the fire God has entrusted to His people — a house that ministers first to the Lord, restores those who carry great responsibility, and sends them back strengthened for the work of the Kingdom.',
  motto: 'Watchmen. Worshipers. Builders. Servants of the Kingdom.',
  contact: {
    // All enquiries route to one inbox. Netlify form submissions are delivered
    // here too — set the recipient under Netlify → Forms → Notifications.
    email: 'info@firebrandrevivalists.com',
    phone: '',                                 // TODO add if a public number is desired
    mailing: 'Moravian Falls, North Carolina', // TODO full mailing address
  },
  // TODO: add live profiles, or leave empty and the footer omits the block.
  social: [] as { label: string; href: string }[],
};

// ── Giving ───────────────────────────────────────────────────────────────
// Update a link here and it changes everywhere it appears on the site.
export const giving = {
  // Firebrand Revivalists is a church under section 508(c)(1)(A) of the
  // Internal Revenue Code. NEEDS LEGAL SIGN-OFF on exact wording before launch.
  status:
    'Ember Ridge is a ministry of Firebrand Revivalists, a church under section 508(c)(1)(A) of the Internal Revenue Code. Gifts are tax-deductible to the extent permitted by law, and giving receipts are provided.',
  methods: [
    {
      label: 'Givelify',
      handle: 'Firebrand Revivalists',
      note: 'Card, bank transfer, Apple Pay or Google Pay. One-time or recurring gifts.',
      href: 'https://www.givelify.com/donate/firebrand-revivalists-randolph-nj-2j7wy5NjE2MjQ=/donation/amount',
      primary: true,
    },
    {
      label: 'Venmo',
      handle: '@Firebrand45',
      note: 'Please add “Ember Ridge” in the note so the gift is tracked to this work.',
      href: 'https://venmo.com/u/Firebrand45',
    },
    {
      label: 'Cash App',
      handle: '$firebrand45',
      note: 'Please add “Ember Ridge” in the note so the gift is tracked to this work.',
      href: 'https://cash.app/$firebrand45',
    },
    {
      label: 'Zelle',
      handle: 'Firebrand Revivalists',
      // TODO: Zelle needs a recipient email or phone number to reach the ministry.
      note: 'Send through your own bank’s Zelle service.',
      href: null as string | null,
    },
  ],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Vision', href: '/vision' },
  { label: 'Story', href: '/story' },
  { label: 'Moravian Falls', href: '/the-place' },
  { label: 'Ministry', href: '/ministry-model' },
  { label: 'Remodel & Grounds', href: '/remodel-and-grounds' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Partner', href: '/partner' },
  { label: 'Contact', href: '/contact' },
];

// Secondary pages surfaced in the footer and in-page links.
export const secondaryNav = [
  { label: 'The House of Prayer', href: '/house-of-prayer' },
  { label: 'Financial Stewardship', href: '/financial-stewardship' },
];

export const legalNav = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  // RCW 19.373 requires this to be a link that is separate and distinct from the
  // standard privacy policy, prominently displayed on the homepage. The footer
  // renders on every page, homepage included.
  { label: 'Consumer Health Data Privacy', href: '/legal/consumer-health-data-privacy' },
  { label: 'Terms of Use', href: '/legal/terms-of-use' },
  { label: 'Cookie Notice', href: '/legal/cookie-notice' },
  { label: 'Disclaimer', href: '/legal/disclaimer' },
  { label: 'Accessibility Statement', href: '/legal/accessibility-statement' },
];
