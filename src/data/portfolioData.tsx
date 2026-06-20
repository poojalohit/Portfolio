// ============================================
// CENTRALIZED PORTFOLIO DATA
// ============================================
// 
// This is the SINGLE SOURCE OF TRUTH for all portfolio content.
// To update any section of your portfolio, edit the corresponding data below:
//
// - Education: Edit `educationData` array
// - Work Experience: Edit `workExperienceData` array
// - Projects: Edit `projectsData` array
// - Travel: Edit `travelCountries`, `travelPhotos`, or `travelStats`
// - Books: Edit `currentlyReading` or `bookRecommendations` array
// - Contact: Edit `contactData` array
//
// After making changes, save the file and the portfolio will automatically update.
// ============================================

import React from 'react'

// ============================================
// EDUCATION
// ============================================
export interface EducationItem {
  university: string
  degree: string
  period: string
  gpa: string
  details: string[]
  color: 'nyu-purple' | 'yellow'
}

export const educationData: EducationItem[] = [
  {
    university: 'NYU',
    degree: "Master's Degree in Management of Technology",
    period: '2025-2027',
    gpa: 'GPA: 4.0/4.0',
    details: [
      'Graduate Student Advisory Board Member',
      'Alumni Relations Manager for Women in Business and Entrepreneurship',
    ],
    color: 'nyu-purple',
  },
  {
    university: 'Amity University Dubai',
    degree: 'Bachelor\'s Degree in Electronics and Telecommunication Engineering',
    period: '2017-2021',
    gpa: 'GPA: 9.51/10.00',
    details: ['Full-ride merit scholarship across all four years'],
    color: 'yellow',
  },
]

// ============================================
// CERTIFICATIONS
// ============================================
export interface Certification {
  name: string
  date: string
  link?: string
}

export const certificationsData: Certification[] = [
  {
    name: 'CompTIA Security+',
    date: 'Certified June 2025',
  },
]

// ============================================
// WORK EXPERIENCE
// ============================================
export interface WorkExperienceRole {
  role: string
  period: string
  description: string[]
  isIntern?: boolean
}

export interface WorkExperienceItem {
  company: string
  role: string
  period: string
  link: string
  description: string[]
  isIntern?: boolean
  // Optional: when a single company spans multiple roles, list them here.
  // If present, the card renders these stacked instead of the top-level role/period/description.
  roles?: WorkExperienceRole[]
}

export const workExperienceData: WorkExperienceItem[] = [
  {
    company: 'Commvault',
    role: 'Global Partner Marketing Intern',
    period: 'May 2026 - Aug 2026',
    link: 'https://www.commvault.com',
    isIntern: true,
    description: [
      'Interning at Commvault this summer!',
      'Watch this space for more details.',
    ],
  },
  {
    company: 'Thales',
    role: 'Inside Sales – Cybersecurity Solutions',
    period: '2022 – 2025',
    link: 'https://www.thalesgroup.com',
    description: [
      'Drove IAM renewal revenue growth across the META region by executing targeted messaging and value-driven positioning.',
      'Partnered with marketing, product, and technical teams to translate customer insights into high-impact GTM campaigns.',
      'Built Salesforce and Power BI dashboards to optimize pipeline analytics and maintain high-accuracy sales forecasting.',
      'Awarded at Sales Kickoff 2025 for outstanding contribution to team performance and collaboration.',
    ],
  },
  {
    company: 'Beta Information Technology',
    role: 'Account Manager – Cybersecurity Solutions',
    period: '2021 – 2022',
    link: 'https://www.betait.net',
    description: [],
    roles: [
      {
        role: 'Account Manager – Cybersecurity Solutions',
        period: '2021 – 2022',
        description: [
          'Managed 15+ high-value enterprise accounts, orchestrating tailored cybersecurity and data infrastructure solutions.',
          'Conducted competitive and market research to inform GTM execution and consistently drive quota attainment.',
          'Led cross-functional alignment across vendors, distributors, and technical teams to accelerate deal delivery.',
        ],
      },
      {
        role: 'Cybersecurity Intern',
        period: 'Jun 2020 – Aug 2020',
        isIntern: true,
        description: [
          'Analyzed emerging threat landscapes and cybersecurity trends, delivering weekly strategic insights to executive leadership to guide portfolio decisions.',
        ],
      },
    ],
  },
]

// ============================================
// PROJECTS
// ============================================
export interface BehindTheBuildPost {
  episode: number
  title: string
  image: string
  link: string
}

export const behindTheBuildPosts: BehindTheBuildPost[] = [
  { episode: 8, title: 'Krista Peryer — brb App', image: 'behind-the-build/episode-8.png', link: 'https://www.linkedin.com/posts/pooja-lohit_behind-the-build-8-activity-7404197819823083520-Frgj?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeKAz0BNGEAS-3V0tVv6BvGu4x-9L4MPvQ' },
  { episode: 7, title: 'Elton Coutinho — ButlerAI', image: 'behind-the-build/episode-7.png', link: 'https://www.linkedin.com/posts/pooja-lohit_behind-the-build-with-pooja-lohit-7-activity-7401760826342318080-U28T?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeKAz0BNGEAS-3V0tVv6BvGu4x-9L4MPvQ' },
  { episode: 6, title: 'Brodey Wang — OnlyWorks', image: 'behind-the-build/episode-6.png', link: 'https://www.linkedin.com/posts/pooja-lohit_behind-the-build-with-pooja-lohit-6-activity-7396907465893830656-BmrW?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeKAz0BNGEAS-3V0tVv6BvGu4x-9L4MPvQ' },
  { episode: 5, title: 'Kareem El — 4RL', image: 'behind-the-build/episode-5.png', link: 'https://www.linkedin.com/posts/pooja-lohit_behind-the-build-with-pooja-lohit-5-activity-7394033396387069952-XOKt?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeKAz0BNGEAS-3V0tVv6BvGu4x-9L4MPvQ' },
  { episode: 4, title: 'Rami Maalouf — Audora', image: 'behind-the-build/episode-4.png', link: 'https://www.linkedin.com/posts/pooja-lohit_behind-the-build-4-activity-7391551717013786625-tCej?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeKAz0BNGEAS-3V0tVv6BvGu4x-9L4MPvQ' },
  { episode: 3, title: 'Deborah Lee — AI Empath', image: 'behind-the-build/episode-3.png', link: 'https://www.linkedin.com/posts/pooja-lohit_behind-the-build-with-pooja-lohit-activity-7388975711707025408-hbMG?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeKAz0BNGEAS-3V0tVv6BvGu4x-9L4MPvQ' },
  { episode: 2, title: 'Noah Habtemichael — GenAIxSwipe', image: 'behind-the-build/episode-2.png', link: 'https://www.linkedin.com/posts/pooja-lohit_behind-the-build-with-pooja-lohit-activity-7385777407355420672-a1y5?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeKAz0BNGEAS-3V0tVv6BvGu4x-9L4MPvQ' },
  { episode: 1, title: 'Hannah Carlson — Inertia Growth', image: 'behind-the-build/episode-1.png', link: 'https://www.linkedin.com/posts/pooja-lohit_behind-the-build-with-pooja-lohit-activity-7383273925230714880-cdqp?utm_source=share&utm_medium=member_desktop&rcm=ACoAACeKAz0BNGEAS-3V0tVv6BvGu4x-9L4MPvQ' },
]

export interface ProjectItem {
  title: string
  category: 'Published Work' | 'Projects' | 'Initiatives'
  description: string | (() => React.ReactElement)
  link?: string
  linkText?: string
  posts?: BehindTheBuildPost[]
}

export const projectsData: ProjectItem[] = [
  {
    title: 'Machine Learning Algorithms',
    category: 'Published Work',
    description: 'Co-authored the paper: Analysis of Machine Learning Algorithms in Smart Manufacturing. IEEE published. Presented at ICRITO 2020.',
    link: 'https://ieeexplore.ieee.org/document/9198017/',
    linkText: 'Click here to access',
  },
  {
    title: 'Human-Computer Interaction',
    category: 'Published Work',
    description: 'Co-authored the chapter: Challenges in Human-Computer Interaction in the book "Industry 4.0 and Intelligent Business Analytics for Healthcare". Published by Nova Publishers. Feb 2022.',
    link: 'https://novapublishers.com/shop/industry-4-0-and-intelligent-business-analytics-for-healthcare/',
    linkText: 'Click here to access',
  },
  {
    title: 'OptiSecure: Helping CISOs Optimize Budget Spend',
    category: 'Projects',
    description: () => (
      <div className="space-y-3">
        <p>
          Worked on OptiSecure as part of NYU&apos;s Vertically Integrated Project (VIP): research and implementation with a public whitepaper and interactive dashboard on the project site.
        </p>
        <p className="text-sm text-text-muted">
          <a
            href="https://github.com/poojalohit/OptiSecure"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:underline"
          >
            GitHub repository
          </a>
          <span className="mx-2">·</span>
          <a
            href="https://poojalohit.github.io/OptiSecure/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:underline"
          >
            Live site (whitepaper &amp; dashboard)
          </a>
        </p>
      </div>
    ),
    link: 'https://poojalohit.github.io/OptiSecure/',
    linkText: 'View OptiSecure site',
  },
  {
    title: 'ReSKUe: Reducing Retail Food Waste with AI',
    category: 'Projects',
    description: () => (
      <div className="space-y-3">
        <p>
          In a 24-hour Product Management Case Competition, our team developed ReSKUe to combat the urgent issue of retail food waste.
        </p>
        <p>
          Our platform integrates with a store's existing inventory system to proactively identify fresh produce nearing its expiration date. It then empowers retailers with two simple choices: use our AI-powered tool to suggest optimal price markdowns for a quick sale, or seamlessly connect with a network of local donation partners to arrange for pickup.
        </p>
        <p>
          Ultimately, ReSKUe helps retailers recover lost revenue, significantly reduce waste, and build a more sustainable food system.
        </p>
      </div>
    ),
    link: '/pdfs/ReSKUe Pitch Deck.pdf',
    linkText: 'View the Pitch Deck',
  },
  {
    title: 'Economic Analysis: How AI and M&As are Forcing a New Business Model for Cybersecurity Vendors',
    category: 'Projects',
    description: () => (
      <div className="space-y-4">
        <p>
          Conducted an in-depth strategic analysis of the structural transformation within the US Cybersecurity Software industry, investigating how Artificial Intelligence is driving a market-wide shift from fragmented "best-of-breed" tools toward integrated "National Champion" platforms.
        </p>
        <div>
          <span className="font-semibold text-accent-gold">Frameworks Applied:</span>
          <p className="mt-1">
            Leveraged PESTEL and Porter's Five Forces to analyze macro-environmental trends and industry rivalry, identifying a transition toward a protected oligopoly.
          </p>
        </div>
        <div>
            <span className="font-light text-accent-blue">Case Study:</span>
          <p className="mt-1">
            Performed an internal business model analysis of Palo Alto Networks (PANW) using the Business Model Canvas and Resource-Based View to evaluate "platformization" as a survival strategy.
          </p>
        </div>
        <div>
          <span className="font-semibold text-accent-gold">Key Insights:</span>
          <p className="mt-1">
            Identified critical structural vulnerabilities, including high supplier dependency on cloud compute/GPUs and technical debt from aggressive M&A.
          </p>
        </div>
        <div>
            <span className="font-light text-accent-blue">Strategic Recommendations:</span>
          <p className="mt-1">
            Proposed six targeted initiatives to optimize resource disposal and long-term profitability.
          </p>
        </div>
      </div>
    ),
    link: '/pdfs/Economic Analysis of Cybersecurity Industry.pdf',
    linkText: 'View the full analysis',
  },
  {
    title: 'My Framework: AI-First GTM Engineering',
    category: 'Projects',
    description: () => (
      <div className="space-y-4">
        <p>
          Designed a GTM engineering framework built around AI-driven automation across the entire revenue pipeline — from signal generation to CRM feedback loops — spanning six pillars: Signal Generation, Scoring, Enrichment, Routing, AI Outreach & Follow-ups, and CRM Feedback Loops.
        </p>
        <p>
          As a proof of concept, built the signal detection layer end-to-end on n8n: a workflow that continuously scans fraud-related news to surface high-intent prospects (financial institutions experiencing scam incidents, impersonation attacks, or mule network exposure), scores and prioritizes them by severity, and pushes top-ranked accounts directly into the CRM for contextual outbound — no manual intervention required.
        </p>
        <p>
          The broader framework is designed to be fully extendable, with AI handling urgency scoring at qualification, personalizing outreach sequences, and summarizing CRM activity for leadership.
        </p>
      </div>
    ),
    link: '/pdfs/AI-First GTM Engineering.pdf',
    linkText: 'View the Deck',
  },
  {
    title: 'Social Media Sentiment Analysis using ML Models',
    category: 'Projects',
    description: () => (
      <div className="space-y-4">
        <p>
          Analyzed 732 social media posts across Twitter, Instagram, and Facebook to uncover how sentiment, platform, and posting behavior shape audience engagement — turning raw social data into signals a GTM or marketing team can act on.
        </p>
        <div>
          <span className="font-semibold text-accent-gold">Why it matters for GTM &amp; Marketing:</span>
          <ul className="mt-2 space-y-2 list-disc list-inside">
            <li>Pinpointed which platforms and sentiment profiles drive the highest engagement — informing channel prioritization and budget allocation.</li>
            <li>Surfaced the hashtags and posting windows that consistently lift reach, directly applicable to content calendars and campaign timing.</li>
            <li>Quantified statistically significant regional differences in sentiment and platform preference to guide market-specific messaging.</li>
          </ul>
        </div>
        <div>
          <span className="font-light text-accent-blue">Approach:</span>
          <p className="mt-1">
            An end-to-end workflow spanning data cleaning, EDA, hypothesis testing (Chi-Square, Kruskal-Wallis, Mann-Whitney U), and predictive modeling — comparing five classifiers, with tree-based models (Random Forest, Gradient Boosting) outperforming linear baselines for both sentiment classification and engagement prediction.
          </p>
        </div>
      </div>
    ),
    link: 'https://github.com/poojalohit/Sentiment-Analysis-of-Social-Media',
    linkText: 'View on GitHub',
  },
  {
    title: 'Sharing Excess — Food Rescue Volunteering',
    category: 'Initiatives',
    description: () => (
      <div className="space-y-4">
        <p>
          Volunteered with{' '}
          <a
            href="https://www.sharingexcess.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue hover:underline"
          >
            Sharing Excess
          </a>{' '}
          to distribute free produce to neighbors, this was food that would otherwise have gone to landfills. The pop-up distributions connect surplus with people who need it.
        </p>
        <p className="text-sm text-text-muted">
          Photos from an outdoor distribution event in New York City.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
          {[
            { file: 'volunteer-1.png', alt: 'Sharing Excess tent and produce distribution on a city sidewalk' },
            { file: 'volunteer-2.png', alt: 'Volunteers and community members at a Sharing Excess produce table' },
            { file: 'volunteer-3.png', alt: 'Fresh citrus and vegetables at a Sharing Excess free food event' },
          ].map(({ file, alt }) => (
            <div
              key={file}
              className="rounded-lg overflow-hidden border border-surface-light/30 bg-surface-elevated aspect-[3/4] sm:aspect-square"
            >
              <img
                src={`${import.meta.env.BASE_URL}initiatives/sharing-excess/${file}`}
                alt={alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    ),
    link: 'https://www.sharingexcess.com/about',
    linkText: 'Sharing Excess',
  },
  {
    title: 'Behind the Build with Pooja Lohit',
    category: 'Initiatives',
    description: () => (
      <div>
        <p>
          A weekly LinkedIn series called "Behind the Build", where I feature one founder's answer to a single, insightful question about their experience building from scratch.
        </p>
      </div>
    ),
    link: 'https://www.linkedin.com/in/pooja-lohit/',
    linkText: 'Link to my LinkedIn',
    posts: behindTheBuildPosts,
  },
]

export const projectCategories = ['Published Work', 'Projects', 'Initiatives'] as const

// ============================================
// TRAVEL
// ============================================
export interface Country {
  name: string
  flag: string
  iso: string
}

export interface TravelPhoto {
  city: string
  filename: string
  alt: string
}

export const travelCountries: Country[] = [
  { name: 'Jordan', flag: '🇯🇴', iso: 'JOR' },
  { name: 'Spain', flag: '🇪🇸', iso: 'ESP' },
  { name: 'Morocco', flag: '🇲🇦', iso: 'MAR' },
  { name: 'Georgia', flag: '🇬🇪', iso: 'GEO' },
  { name: 'Azerbaijan', flag: '🇦🇿', iso: 'AZE' },
  { name: 'Hungary', flag: '🇭🇺', iso: 'HUN' },
  { name: 'Maldives', flag: '🇲🇻', iso: 'MDV' },
  { name: 'Nepal', flag: '🇳🇵', iso: 'NPL' },
  { name: 'Oman', flag: '🇴🇲', iso: 'OMN' },
  { name: 'Ukraine', flag: '🇺🇦', iso: 'UKR' },
  { name: 'Zanzibar', flag: '🇹🇿', iso: 'TZA' },
  { name: 'Portugal', flag: '🇵🇹', iso: 'PRT' },
  { name: 'Kenya', flag: '🇰🇪', iso: 'KEN' },
  { name: 'Egypt', flag: '🇪🇬', iso: 'EGY' },
  { name: 'Turkey', flag: '🇹🇷', iso: 'TUR' },
  { name: 'Greece', flag: '🇬🇷', iso: 'GRC' },
  { name: 'United Kingdom', flag: '🇬🇧', iso: 'GBR' },
  { name: 'Argentina', flag: '🇦🇷', iso: 'ARG' },
  { name: 'Brazil', flag: '🇧🇷', iso: 'BRA' },
  { name: 'Peru', flag: '🇵🇪', iso: 'PER' },
  { name: 'United Arab Emirates', flag: '🇦🇪', iso: 'ARE' },
  { name: 'United States', flag: '🇺🇸', iso: 'USA' },
  { name: 'India', flag: '🇮🇳', iso: 'IND' },
  { name: 'Cyprus', flag: '🇨🇾', iso: 'CYP' },
  { name: 'Mexico', flag: '🇲🇽', iso: 'MEX' },
]

export const travelPhotos: TravelPhoto[] = [
  // Greece
  { city: 'Athens, Greece', filename: 'Athens - 1.jpeg', alt: 'Athens, Greece' },
  { city: 'Mykonos, Greece', filename: 'Mykonos - 1.jpeg', alt: 'Mykonos, Greece' },
  { city: 'Santorini, Greece', filename: 'Santorini -1.jpeg', alt: 'Santorini, Greece' },
  
  // Brazil
  { city: 'Rio De Janeiro, Brazil', filename: 'Brazil -2.jpg', alt: 'Rio De Janeiro, Brazil' },
  { city: 'Rio De Janeiro, Brazil', filename: 'Rio De Janeiro - 1.JPG', alt: 'Rio De Janeiro, Brazil' },
  { city: 'Iguazu Falls, Brazil', filename: 'Iquazu Falls Brazil -1.JPG', alt: 'Iguazu Falls, Brazil' },
  
  // Argentina
  { city: 'Buenos Aires, Argentina', filename: 'Buenos Aires - 1.JPG', alt: 'Buenos Aires, Argentina' },
  
  // Cyprus
  { city: 'Cyprus', filename: 'Cyprus - 1.jpg', alt: 'Cyprus' },
  { city: 'Cyprus', filename: 'Cyprus - 2.JPG', alt: 'Cyprus' },
  
  // Egypt
  { city: 'Abu Simbel, Egypt', filename: 'Egypt - 1.jpeg', alt: 'Egypt' },
  { city: 'Abu Simbel, Egypt', filename: 'Egypt -2.jpeg', alt: 'Egypt' },
  
  // Kenya
  { city: 'Masai Mara, Kenya', filename: 'Kenya -1.jpg', alt: 'Kenya' },
  { city: 'Masai Mara, Kenya', filename: 'Kenya -2.jpg', alt: 'Kenya' },
  { city: 'Masai Mara, Kenya', filename: 'Kenya -3.jpg', alt: 'Kenya' },
  { city: 'Masai Mara, Kenya', filename: 'Kenya - 4.JPG', alt: 'Kenya' },
  
  // United Kingdom
  { city: 'London, United Kingdom', filename: 'London - 1.jpeg', alt: 'London, United Kingdom' },
  { city: 'Oxford, United Kingdom', filename: 'Oxford - 1.JPG', alt: 'Oxford, United Kingdom' },
  
  // Spain
  { city: 'Madrid, Spain', filename: 'Madrid - 1.jpeg', alt: 'Madrid, Spain' },
  
  // United States
  { city: 'San Francisco, United States', filename: 'San Francisco - 1.jpeg', alt: 'San Francisco, United States' },
  { city: 'Yosemite National Park, United States', filename: 'Yosemite National Park - 1.jpeg', alt: 'Yosemite National Park, United States' },
  
  // Peru
  { city: 'Nazca Lines, Peru', filename: 'Peru - 1.JPG', alt: 'Peru' },
  { city: 'The Quechua people of Peru', filename: 'Peru - 2.JPG', alt: 'Peru' },
  { city: 'Machu Picchu, Peru', filename: 'Peru - 3.jpg', alt: 'Peru' },
  { city: 'Rainbow Mountain, Peru', filename: 'Peru - 4.jpg', alt: 'Peru' },
  
  // India
  { city: 'Valley of Flowers, Uttarakhand', filename: 'Uttarakhand - 1.jpeg', alt: 'Uttarakhand, India' },
  { city: 'Valley of Flowers, Uttarakhand', filename: 'Uttarakhand - 2.jpeg', alt: 'Uttarakhand, India' },
]

export const travelStats = {
  visited: 25,
  total: 195,
}

export const instagramLink = 'https://www.instagram.com/poojalohit/'

// Country name to ISO code mapping (for world atlas matching)
export const countryNameToISO: Record<string, string> = {
  'Jordan': 'JOR',
  'Hashemite Kingdom of Jordan': 'JOR',
  'Spain': 'ESP',
  'Kingdom of Spain': 'ESP',
  'Morocco': 'MAR',
  'Kingdom of Morocco': 'MAR',
  'Georgia': 'GEO',
  'Azerbaijan': 'AZE',
  'Republic of Azerbaijan': 'AZE',
  'Hungary': 'HUN',
  'Maldives': 'MDV',
  'Republic of Maldives': 'MDV',
  'Nepal': 'NPL',
  'Federal Democratic Republic of Nepal': 'NPL',
  'Oman': 'OMN',
  'Sultanate of Oman': 'OMN',
  'Ukraine': 'UKR',
  'Tanzania': 'TZA', // Zanzibar is part of Tanzania
  'United Republic of Tanzania': 'TZA',
  'Portugal': 'PRT',
  'Portuguese Republic': 'PRT',
  'Kenya': 'KEN',
  'Republic of Kenya': 'KEN',
  'Egypt': 'EGY',
  'Arab Republic of Egypt': 'EGY',
  'Turkey': 'TUR',
  'Republic of Turkey': 'TUR',
  'Greece': 'GRC',
  'Hellenic Republic': 'GRC',
  'United Kingdom': 'GBR',
  'United Kingdom of Great Britain and Northern Ireland': 'GBR',
  'Argentina': 'ARG',
  'Argentine Republic': 'ARG',
  'Brazil': 'BRA',
  'Federative Republic of Brazil': 'BRA',
  'Peru': 'PER',
  'Republic of Peru': 'PER',
  'United Arab Emirates': 'ARE',
  'U.A.E.': 'ARE',
  'United States of America': 'USA',
  'United States': 'USA',
  'U.S.A.': 'USA',
  'India': 'IND',
  'Republic of India': 'IND',
  'Cyprus': 'CYP',
  'Republic of Cyprus': 'CYP',
  'Mexico': 'MEX',
  'United Mexican States': 'MEX',
}

// ============================================
// BOOKS
// ============================================
export interface BookRecommendation {
  rank: number
  title: string
  author: string
  coverUrl?: string
  whyILikeIt?: string
  goodreadsUrl?: string
}

export const currentlyReading = {
  title: 'The Loneliness of Sonia and Sunny',
  author: 'Kiran Desai',
  coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1754044242l/222683974.jpg',
  goodreadsUrl: 'https://www.goodreads.com/book/show/222683974',
}

export const bookRecommendations: BookRecommendation[] = [
  {
    rank: 1,
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
    whyILikeIt: 'I love how this book walks through the evolution of mankind by deconstructing the "stories" we all buy into, like religion, money, and politics. Looking at the world through this historical lens puts everything into perspective and completely changed how I see the systems we live in today.',
    goodreadsUrl: 'https://www.goodreads.com/search?q=Sapiens+Yuval+Noah+Harari',
  },
  {
    rank: 2,
    title: 'Empire of Pain',
    author: 'Patrick Radden Keefe',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780385545686-L.jpg',
    whyILikeIt: 'It was truly shocking to see how far-reaching the devastating effects of a marketing strategy can be. This was a heavy but necessary read for me because it highlights exactly why accountability and integrity within corporations are absolutely essential.',
    goodreadsUrl: 'https://www.goodreads.com/search?q=Empire+of+Pain+Patrick+Radden+Keefe',
  },
  {
    rank: 3,
    title: 'Everybody Lies',
    author: 'Seth Stephens-Davidowitz',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9781408894736-L.jpg',
    whyILikeIt: 'This is such a fascinating look at how big data acts as a digital truth serum for the things people are too afraid to say out loud. It\'s a reminder that if you really want to understand the human condition, you have to look at the data people leave behind rather than just what they tell the world.',
    goodreadsUrl: 'https://www.goodreads.com/search?q=Everybody+Lies+Seth+Stephens-Davidowitz',
  },
]

export const goodreadsLink = 'https://www.goodreads.com/poojalohit'

// ============================================
// RUNNING
// ============================================
// `recentRuns` is auto-refreshed weekly from Strava (see scripts/update-running.cjs).
// The first run below mirrors a real Strava activity; the rest are placeholders that
// get replaced automatically once the Strava sync runs.
export interface RecentRun {
  title: string
  date: string
  location?: string
  distance: string
  pace: string
  time: string
  achievements?: number
  polyline?: string
  mapUrl?: string
  photoUrl?: string
  activityUrl?: string
}

export const stravaLink = 'https://www.strava.com/athletes/185115752'

export const recentRuns: RecentRun[] = [
  {
    title: '4K Interval Run & Walk',
    date: 'Jun 19, 2026',
    distance: '4.02 km',
    pace: '7:53 /km',
    time: '31m 38s',
    achievements: 5,
    polyline: '{n_xFvhkbMXYHEV]h@]j@Gp@Lv@XnAx@HDd@`@Zb@`@b@NHFJVVDJJJHDNARDRCh@UHGV}@@c@G[M_@Q]MKIO[_AIs@Dc@Ha@VYTMVA^DXVJVPz@LZJJBFLJTl@t@z@j@R`@D`@JhAPP?HGJ@XLX@FB^C^GH?PC\\Ap@Lj@b@\\t@ZX`@l@TP^n@j@r@ZRb@f@ZTj@X^VdAf@|@LNC\\@d@]`@e@HGf@Sn@OX?FHXBFFJ@LFH?n@JN@LIH@VGN@LCHBn@BPJVFJHh@Vb@^J@JHPFDH\\V`Ah@d@\\BFd@RHJ|@j@DFLD~@p@TJNRJDJHF?HLRLOUWWe@QMQIECKODIECGCBCIM?CEIYKEWWMEc@[OE]]C@GEI?GBIGC@SECEIUE?BKCGQISSQEEGc@[QEEEK?AIE?CGM?QOKCKIK?GCYEs@?[JSCm@Dm@Ma@QI@g@Cg@Dm@NUPaA~@E@W?w@Es@YKCMK_@Qi@a@YOCIYYg@]]]u@{@oBsCe@g@e@WGA]@]Hc@@c@Fq@AQGyAQ[?UKg@Ia@MQMGAUYSOQ[Ug@Ma@@GK]EEIUQ]KKc@UI@YHWZSZCLCr@?TLj@DFL\\LN@JJHPZDRDTAf@ANIVGHGNQPUHYBYEUM[_@GMKIC?KQUU',
    activityUrl: 'https://www.strava.com/activities/18985944698',
  },
  {
    title: 'Morning Run 🏃🏻‍♀️',
    date: 'Jun 16, 2026',
    distance: '5.03 km',
    pace: '7:05 /km',
    time: '35m 36s',
    achievements: 21,
    polyline: '_p_xFjjkbMHQNQ^i@N[f@[DM@QDEF?TLXDLHJBHCXHFFZHPLZNHHRHHJPFZ\\HAFBX\\DTd@p@RPHNLHj@HZGTONSHQJc@@o@AOOi@MY[e@Sc@Is@?]B]J[`@a@RCP?ND^ZP\\BTl@`Bn@z@j@d@lAX\\BHAP@F@XRl@HX?\\FN?tBULBXJZTbApAZh@LJt@bA~@fA\\RBHr@h@n@^ZNH@XNJBLLz@HV?TCdA}@d@YNGVEF@`@CRBVLH?LHbANV?F@NILA|@Gb@HNFXRL@|@l@DFRHNLZNb@\\b@V`At@\\Nd@ZBFp@b@d@RnA`ANCFLPNNVPLXHRPJ@DBdAz@p@ZLN^NRRPFDHLDLLb@Tf@`@PZRrACv@K`B?HBAF_@@u@AGDS@k@AWGi@I_@EIm@c@MM]SIKWOMCeAw@m@]c@]MEQYKCK@EAE@EDGGO[SWg@WEG]UKCk@c@MEMS[WCG_CyAc@]w@e@aBiAQIEB?GUO_@Ka@QEEa@Ee@@GGQ@_@Jq@Bc@KMIUIq@Ei@Do@PGA_A`A]Pg@Fs@I}@a@c@]q@]EI]Sk@e@mByBoAkB][IQWYi@M[?W?WHq@H_@A_@Ie@EMIKAO@_AOMEYEi@Oa@[?MEEOW_@a@_@q@WmAc@c@SG[@[NSTQd@?r@Jr@Xz@Td@DDNd@F^?\\Qp@UX]Na@A]OSSAGKCUQCM}@}@CC?IIMYMYMEGi@Wk@_@{@Se@CSB',
    activityUrl: 'https://www.strava.com/activities/18942134062',
  },
  {
    title: 'Interval Run',
    date: 'Jun 11, 2026',
    distance: '4.02 km',
    pace: '8:28 /km',
    time: '34m 02s',
    achievements: 11,
    polyline: 'oh_xFb~kbMGFJH@BGA@BPAb@DD?HCDB?^@VDDEDDF?RBLBZHd@AHFb@LRPJVBVEPMLMJ[D_@A_@@GAu@Og@?I@EHGPDR?RSBMRKH?LHRXA^DP?\\BHT?BDHD?B@BJAHBLFPR@?HJDD@JEFDLNPHPLJFHLH\\GRKP@JDFHDL?p@ADH`@DFHTHHNJDNBBI`@?DEHA\\HX^ZDJHb@?NDJHBFK@GLYDa@FQBSBCD@z@jA@Ht@d@NRRJD?f@^^Lt@`@J?LDbAf@h@Rf@b@XXFPNLHLDH?HDJFTN`@\\l@DLHJRPt@`@l@HVA`@IbACP@`@Rn@l@PTBLFHDXb@|AALZtAJXB@?IPKD?PJZh@?FZ^T^HBTTPHRPJDHHLFZHf@Tv@JRAb@F`BITEK?GBECCBIAEE[NKCKBEAG@EAQ?EAo@EsAQKMG?[WMGMO}@o@aA{AGQ}@gB?GDK@]GYEg@B}@Fg@Ci@BM@[AO@IE_@Ak@G]@KKu@U{@EAMQIAK@ALY^_@|@Uv@Gb@MfA@j@EVA?GCQ?SDc@?o@F]Ac@MWUWIIK_@s@S_AKIAMISGKICUYWUW]i@_@OAm@WQ?WKKK]OEGc@YMCe@][MYQ[a@YUIQS]c@kASaAKw@IUKk@[y@QYQG[W_@MMAe@USUGMMOO_@CQMUW_BUu@]w@[c@OMCGOISU[W[KM?E@ACQBIDKAMDS@GHQFMHG?OHM@KBSA]G',
    activityUrl: 'https://www.strava.com/activities/18884043197',
  }
]

// ============================================
// CONTACT
// ============================================
export interface ContactItem {
  label: string
  value: string
  link: string | null
  icon: 'email' | 'phone' | 'location'
}

export const contactData: ContactItem[] = [
  {
    label: 'Email',
    value: 'pooja.lohit6@gmail.com',
    link: 'mailto:pooja.lohit6@gmail.com',
    icon: 'email',
  },
  {
    label: 'Mobile',
    value: '+13473687729',
    link: 'tel:+13473687729',
    icon: 'phone',
  },
  {
    label: 'Location',
    value: 'New York City, New York, United States',
    link: null,
    icon: 'location',
  },
]
