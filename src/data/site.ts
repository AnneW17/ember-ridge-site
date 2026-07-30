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

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Vision', href: '/vision' },
  { label: 'Story', href: '/story' },
  { label: 'Ministry', href: '/ministry-model' },
  { label: 'Campus', href: '/campus-vision' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Partner', href: '/partner' },
  { label: 'Contact', href: '/contact' },
];

// Secondary pages surfaced in the footer and in-page links.
export const secondaryNav = [
  { label: 'The House of Prayer', href: '/house-of-prayer' },
  { label: 'The Place', href: '/the-place' },
  { label: 'Remodel & Grounds', href: '/remodel-and-grounds' },
  { label: 'Financial Stewardship', href: '/financial-stewardship' },
];

export const legalNav = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Terms of Use', href: '/legal/terms-of-use' },
  { label: 'Cookie Notice', href: '/legal/cookie-notice' },
  { label: 'Disclaimer', href: '/legal/disclaimer' },
  { label: 'Accessibility Statement', href: '/legal/accessibility-statement' },
];
