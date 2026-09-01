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
  // Section 508(c)(1)(A) is the mandatory exception excusing churches from the
  // Form 1023 notification requirement in 508(a) — it is not a separate exempt
  // status. Exemption itself runs through 501(c)(3).
  status:
    'Ember Ridge is an auxiliary ministry of Firebrand Revivalists\u2122, a Washington nonprofit corporation and a church for federal tax purposes, exempt under section 501(c)(3) of the Internal Revenue Code and excepted from the application requirement by section 508(c)(1)(A). Gifts are tax-deductible to the extent permitted by law, and giving receipts are provided.',
  methods: [
    {
      label: 'Givelify',
      handle: 'Firebrand Revivalists',
      note: 'Card, bank transfer, Apple Pay or Google Pay. One-time or recurring gifts.',
      href: 'https://www.givelify.com/donate/firebrand-revivalists-randolph-nj-2j7wy5NjE2MjQ=/donation/amount',
      primary: true,
    },
    {
      label: 'PayPal',
      handle: 'Firebrand Revivalists',
      note: 'Card, bank account or PayPal balance. Please add “Ember Ridge” in the note so the gift is tracked to this work.',
      href: 'https://www.paypal.com/donate/?hosted_button_id=7WKL2AJ6W4XJN',
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

// Header navigation. Top-level items with `children` render as dropdowns.
export type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

export const navTree: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    children: [
      { label: 'The Vision for Ember Ridge', href: '/vision' },
      { label: 'The Story Behind the Vision', href: '/story' },
      { label: 'The History of the Land', href: '/the-place' },
      { label: 'Ministries & Marketplace', href: '/our-ministries' },
    ],
  },
  {
    label: 'Ministry',
    children: [
      { label: 'Prayer, Worship, and Intercession', href: '/house-of-prayer' },
      { label: 'The Ministry Model', href: '/ministry-model' },
      { label: 'Remodel, Grounds & Financial Stewardship', href: '/remodel-and-grounds' },
    ],
  },
  {
    label: 'Leadership',
    children: [
      { label: 'Leadership Team', href: '/leadership' },
      { label: 'Governance & Accountability', href: '/leadership#governance' },
    ],
  },
  {
    label: 'Partner With Us',
    children: [
      { label: 'Pray', href: '/partner#pray' },
      { label: 'Partner', href: '/partner#partner' },
      { label: 'Give', href: '/partner#give' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

// Flat list used by the footer.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'The Vision for Ember Ridge', href: '/vision' },
  { label: 'The Story Behind the Vision', href: '/story' },
  { label: 'The History of the Land', href: '/the-place' },
  { label: 'Our Family of Ministries', href: '/our-ministries' },
  { label: 'Prayer, Worship, and Intercession', href: '/house-of-prayer' },
  { label: 'The Ministry Model', href: '/ministry-model' },
  { label: 'Remodel, Grounds & Financial Stewardship', href: '/remodel-and-grounds' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Contact', href: '/contact' },
];

// Secondary pages surfaced in the footer and in-page links.
export const secondaryNav: { label: string; href: string }[] = [];

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
