// src/data/leadership.ts
// Leadership Team content. Swap the `image` path to update a portrait — no
// markup changes needed. Every bio is now the leader's own approved text.

export type Leader = {
  name: string;
  credential?: string;
  title: string;
  /** Firebrand Revivalists board seat, shown beneath the title. */
  boardRole?: string;
  summary: string;   // short highlighted line beneath the name
  bio: string[];     // paragraphs revealed by the "Read full bio" toggle
  image: string;
  alt: string;
};

export const leadership: Leader[] = [
  {
    name: 'Shannon Suttles',
    title: 'President',
    boardRole: 'Board Chair – Firebrand Revivalists Board of Directors',
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
    boardRole: 'Treasurer – Firebrand Revivalists Board of Directors',
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
    title: 'Chief Cybersecurity & Infrastructure Engineer (In Training)',
    summary:
      'United States Navy veteran building the cybersecurity, infrastructure and technology systems behind the ministries and operations entrusted to his care.',
    bio: [
      'Mark Burgett has been an integral part of the Suttles family ministry journey and has faithfully served alongside Jason and Shannon Suttles. Over the years, Mark has been part of the life and ministry of their family, participating in the culture of prayer, service, and obedience that has shaped their calling. He has also played a role in welcoming and supporting those God has brought into their home and community.',
      'Mark served in the United States Navy, where he developed a strong foundation of discipline, commitment, and service. He has continued expanding his technical expertise through education in information technology and is pursuing further specialization in cybersecurity to strengthen his ability to serve in technology, security, and infrastructure.',
      'Mark serves as Chief Cybersecurity & Infrastructure Engineer (In Training), supporting Firebrand Revivalists, Ember Ridge, associated ministries, and the business operations stewarded by Jason and Shannon Suttles. In this role, he supports cybersecurity initiatives, technology infrastructure, systems management, and strategic technology planning to help ensure that the organizations and operations entrusted to him remain secure, efficient, and aligned with their mission.',
      'With a passion for technology, strategy, and innovation, Mark brings a unique combination of technical ability, creativity, focus, and servant leadership. He has also pursued excellence in competitive gaming, where he has developed discipline, problem-solving skills, and a platform through which he seeks to honor the Lord and steward the gifts God has given him.',
      'Mark’s heart is to use his abilities in technology and leadership to serve God’s purposes, strengthen the infrastructure behind the work being built, and help protect and advance the ministries, organizations, and operations he has been entrusted to support.',
    ],
    image: '/images/leadership/mark-burgett-v2.jpg',
    alt: 'Portrait of Mark Burgett, Chief Cybersecurity and Infrastructure Engineer',
  },
];

// ── Ministry staff ──────────────────────────────────────────────────────
// Same shape as `leadership` so both can be rendered by LeadershipTeam.
export const ministryStaff: Leader[] = [
  {
    name: 'Marco Sanzari',
    title: 'Ordained Chaplain, Lead Intercessor & IT Engineer',
    boardRole: 'Administrator – Firebrand Revivalists Board of Directors',
    summary:
      'Brings computer science and engineering management to the ministry’s digital infrastructure, bridging IT governance and day-to-day operations.',
    bio: [
      'Marco is a devoted husband to Danielle Sanzari and proud father of two children. He holds a Bachelor of Science in Computer Science and a Master of Science in Engineering Management. With a strong foundation in health and wellness, Marco has spent years as a certified CrossFit coach, leading classes and encouraging others to steward their physical health as a reflection of honoring God.',
      'With an extensive background in technology and leadership, Marco brings a strategic and solutions-oriented approach to his work in IT. He currently serves as an IT Engineer for Firebrand, working closely with the Operations and Legal team to ensure the ministry’s digital infrastructure is secure, compliant, and aligned with organizational goals. His responsibilities include systems integration, network support, multi-factor authentication (MFA) implementation, and strategic planning to enhance digital capabilities across the ministry.',
      'Marco plays a vital role in helping ensure the ministry adheres to best practices in IT governance, security, and regulatory compliance, strengthening the infrastructure that supports sensitive and mission-critical operations.',
      'In addition to his ongoing service as a Board Member, Marco also serves as an ordained Chaplain and Lead Intercessor. His multifaceted position reflects both strategic oversight and operational excellence, allowing him to bridge governance and execution with precision.',
      'Marco’s commitment to excellence is rooted in a desire to serve God through his work, using his gifts in technology.',
    ],
    image: '/images/leadership/marco-sanzari.jpg',
    alt: 'Portrait of Marco Sanzari, Ordained Chaplain, Lead Intercessor and IT Engineer',
  },
  {
    name: 'Danielle Sanzari',
    title: 'Ordained Chaplain & Lead Intercessor',
    boardRole: 'Board Member – Firebrand Revivalists Board of Directors',
    summary:
      'New Jersey School Chaplain with Firebrand Revivalists, serving students, families and staff after six years teaching middle school mathematics.',
    bio: [
      'Danielle serves as the New Jersey School Chaplain with Firebrand Revivalists, where she is passionately committed to seeing the next generation transformed by the love and power of Jesus. She is an ordained Chaplain and serves as a Lead Intercessor with Firebrand. She is a devoted wife to Marco Sanzari, and mother of two children. Her journey into ministry has been deeply shaped by her love for both her own family and the children she’s served throughout her career.',
      'Before stepping into full-time ministry, Danielle spent six years as a middle school math teacher, driven by a deep compassion for young people and a heart for education. She holds a Master of Science in Curriculum and Instruction, a Post-Baccalaureate degree in Elementary Education (K–5), and a specialization certification in Middle School Mathematics (6–8).',
      'Danielle’s calling into chaplaincy was cultivated through the intentional mentorship and spiritual guidance of Shannon and Jason Suttles. As spiritual parents and leaders, they counseled, trained, and equipped Danielle in both pastoral ministry and the practical application of her educational background, teaching her how to merge her academic training with a pastoral heart. The vision for the chaplaincy ministry was birthed by God and downloaded to Shannon and Jason through the Holy Spirit.',
      'In a divinely orchestrated move, Danielle returned to the classroom during the 2024–2025 school year — not only to teach fourth grade, but to walk through a dedicated season of training and preparation for chaplaincy ministry. She has since continued in the school as a full time Chaplain, and God has worked mightily through her presence there — transforming the lives of students, strengthening families, and profoundly impacting the staff in ways that can only be attributed to the power and grace of the Holy Spirit.',
    ],
    image: '/images/leadership/danielle-sanzari.jpg',
    alt: 'Portrait of Danielle Sanzari, Ordained Chaplain and Lead Intercessor',
  },
];

