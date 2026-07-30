// src/data/leadership.ts
// Leadership Team content. Swap the `image` path to update a portrait — no
// markup changes needed. Bios marked `placeholder: true` still need the
// leader's own approved text.

export type Leader = {
  name: string;
  credential?: string;
  title: string;
  summary: string;   // short highlighted line beneath the name
  bio: string[];     // paragraphs revealed by the "Read full bio" toggle
  image: string;
  alt: string;
  placeholder?: boolean;
};

export const leadership: Leader[] = [
  {
    name: 'Shannon Suttles',
    title: 'President',
    summary:
      'Ordained pastor, founder, and the carrier of the Ember Ridge vision — with more than seventeen years of ministry and a career in regional property leadership.',
    bio: [
      'Shannon is an ordained pastor and the President of Ember Ridge, an auxiliary ministry of Firebrand Revivalists where she serves as the President and CEO, a biblically based ministry operating in the supernatural giftings of the Holy Spirit. She is also the Founder and President of Sophion Media and Consulting Group, a consulting business. In addition, she founded and serves as the President of an auxiliary ministry called Jesus Loves the Little Children, dedicated to raising up Spirit-led chaplains who go into schools to serve families, students, and staff.',
      'Her life and calling are deeply rooted in her personal journey with God. From a young age, her experiences and encounters with the Lord have shaped a passionate commitment to serve others and walk in the power of the Holy Spirit. This ministry is not something she does — it is the embodiment of her entire life.',
      'With a strong foundation in the business world, Shannon spent many years in the leasing industry, consistently ranking as a top performer in the Indianapolis region and surrounding areas. Her leadership extended into property management, where she held a regional manager position overseeing a $400 million A-market property, managing diverse teams including leasing agents, maintenance crews, contractors, and security personnel.',
      'She is a devoted wife, mother of two, and grandmother. Her family is deeply involved in the ministry — both of her children and her husband actively serve alongside her, reflecting the generational impact of her faith and leadership.',
      'With over 17 years of ministry experience, Shannon has served in a wide range of capacities, always with a heart for the broken and the marginalized. Her ministry has included serving the homeless, drug-addicted, and mentally ill; supporting parents in crisis; housing women and children escaping domestic violence; leading youth as a pastor; and partnering with organizations such as Wheeler Mission and the Billy Graham Association.',
      'She has also raised up powerful prayer movements, equipping individuals to hear the voice of God for their families, communities, and civil governing leaders. Her influence extends into the political and business arenas, where she has ministered to political leaders, advised ministry leaders, coached business professionals, and helped companies identify and address spiritual corruption.',
      'As the President and CEO of Firebrand Revivalists, Shannon continues to lead with prophetic insight, compassion, and unwavering dedication to the transformative power of the Holy Spirit.',
    ],
    image: '/images/leadership/shannon-suttles.jpg',
    alt: 'Portrait of Shannon Suttles, President',
  },
  {
    name: 'Jason Suttles',
    title: 'Vice President',
    summary:
      'Ordained pastor and spiritual father, bringing two decades of operations, engineering, and personnel leadership to the stewardship of the house.',
    bio: [
      'Jason Suttles serves as the Vice President of Ember Ridge, Firebrand Revivalists and Jesus Loves the Little Children. He is the Co-Founder and Vice President of Sophion Media and Consulting Group, a consulting business. He is the devoted husband of Shannon Suttles, and together they have two children and one grandchild.',
      'Their marriage is a powerful example of covenant partnership in ministry — Shannon often shares that she could not do what she does for the Lord without Jason’s unwavering support, wisdom, and strength. He has been a foundational part of her development and calling, both spiritually and practically.',
      'Jason brings over two decades of leadership and business experience to his role, having managed large-scale operations in the communications industry across multiple states. His background includes personnel management, systems engineering, budgeting, and customer relations. He began supervising at the age of 19 while working in the jail system, where he witnessed the Lord’s undeniable protection and presence — learning the spiritual discipline of tough love and principles that would later define his leadership in both business and ministry.',
      'In the early days of Firebrand, Jason worked full-time in engineering and subcontracting to financially support the ministry’s launch. His behind-the-scenes leadership laid the foundation for what Firebrand is today. While he previously served as CFO, his current role as Vice President reflects his broader influence — providing strategic insight, spiritual leadership, and overall support across the ministry.',
      'His professional background includes leading hiring and personnel management, engineering and technical systems oversight, payroll and budgeting, customer service, designing fiber optic systems, managing headend and hub operations, and running a subcontracting communications business.',
      'Today, as Vice President, he serves as a key support to the President — partnering in prayer, strategic planning, and the overall leadership of the ministry. His presence brings stability, discernment, and spiritual covering to the leadership team.',
      'Jason is also an ordained pastor and a spiritual father to many.',
    ],
    image: '/images/leadership/jason-suttles.jpg',
    alt: 'Portrait of Jason Suttles, Vice President',
  },
  {
    name: 'Anne Whaley',
    credential: 'J.D.',
    title: 'Chief Legal and Operations Officer',
    summary:
      'Legal, governance, and operations depth across pharmaceutical, railroad engineering, construction, real estate, and nonprofit sectors.',
    bio: [
      'Anne’s most cherished role is being the mother of a beautiful little girl named Layla, whose heart is already captivated by the love of Jesus. She is the daughter of Shannon and Jason Suttles. Anne serves as the Chief Legal and Operations Officer of Ember Ridge, Firebrand Revivalists and Jesus Loves the Little Children, and is the Chief Operating Officer of Sophion Media and Consulting Group.',
      'Her life and leadership have been deeply shaped by her parents’ example and mentorship. Raised under their spiritual guidance, she was equipped not only in faith but also in leadership, prayer, and service. Their investment in her life laid the foundation for her calling and continues to influence her walk with the Lord.',
      'Anne leverages extensive legal, compliance, strategic, and operational expertise across Firebrand Revivalists, providing high-level oversight of the ministry’s accounting and financial functions. Her professional background includes serving as Assistant General Counsel and General Manager of Legal Operations for a railroad engineering company, where she led high-level initiatives spanning legal and operational strategy, complex issue resolution, corporate governance, and cross-functional execution.',
      'At Sophion, Anne leads operational execution across the firm and serves in a senior leadership role across internal operations, client delivery, contract strategy, and organizational implementation. She brings over a decade of progressively senior experience in contract management, legal operations, compliance coordination, and organizational strategy across pharmaceutical, railroad engineering, construction, real estate, and nonprofit governance. Her background includes roles with Axiom, Johnson & Johnson, Holland L.P., and Firebrand Revivalists.',
      'Since October 2022, Anne has also served as a Board Member and Operations Committee Member at Choices Coordinated Care Solutions, a national non-profit organization dedicated to supporting youth and adults with behavioral and emotional challenges. She has held leadership roles with the League of Railway Women, including Membership Chair, Finance Committee Member, and Parliamentarian.',
      'Her areas of expertise include: strategic issue resolution and problem solving, profit and loss management, complex legal, operational, and commercial negotiations, parliamentary procedures and policy drafting, safety and compliance oversight, cross-company operations management, IT systems oversight and data governance, HR policy development, company process redesign, and organizational change management.',
      'Anne’s life was radically transformed in October 2014 when she experienced a life-changing encounter with God, receiving His forgiveness, hope, and peace. In January 2024, she fully surrendered her life to the Lord, and since then, has witnessed miraculous and supernatural transformation through His power. Leaving behind her career in the rail industry, Anne now passionately serves the Lord through her mother’s ministry, Firebrand Revivalists.',
      'She holds a Juris Doctorate from Valparaiso University School of Law (2015) and dual Bachelor’s degrees in Social Work and Psychology.',
    ],
    image: '/images/leadership/anne-whaley.jpg',
    alt: 'Portrait of Anne Whaley, J.D., Chief Legal and Operations Officer',
  },
  {
    name: 'Mark Burgett',
    title: 'Chief IT Engineer in Training',
    summary:
      'Developing the engineering, technology, and facilities capacity required to steward a complex mountain property over decades.',
    bio: [
      'Mark Burgett serves as Chief IT Engineer in Training. Having completed engineering-related education and preparing for further training, he will grow into responsibility for engineering systems, technology infrastructure, security systems, facilities stewardship, maintenance planning, and long-term campus development.',
      'His role reflects the broader vision for Ember Ridge: a house of prayer still needs sound roofs, reliable systems, and careful maintenance. Practical excellence is treated here as an expression of stewardship rather than a separate concern.',
    ],
    image: '/images/leadership/placeholder-portrait.svg',
    alt: 'Placeholder portrait for Mark Burgett, Chief IT Engineer in Training',
    placeholder: true,
  },
];

// Wider ministry leadership referenced in the Founding Vision document.
export const widerTeam = [
  {
    name: 'Marco Sanzari',
    title: 'Systems & Information Technology',
    note: 'Engineering-management and information-technology background strengthening digital security and systems governance.',
  },
  {
    name: 'Danielle Sanzari',
    title: 'Education & Chaplaincy',
    note: 'Education and chaplaincy experience connecting the vision to schools, children, and families.',
  },
];
