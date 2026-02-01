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
      'Alumni Relations Coordinator for Women in Business and Entrepreneurship',
    ],
    color: 'nyu-purple',
  },
  {
    university: 'Amity University Dubai',
    degree: 'Bachelor\'s Degree in Electronics and Telecommunication Engineering',
    period: '2017-2021',
    gpa: 'GPA: 9.51/10.00',
    details: ['100% Scholarship across all four years of study'],
    color: 'yellow',
  },
]

// ============================================
// WORK EXPERIENCE
// ============================================
export interface WorkExperienceItem {
  company: string
  role: string
  period: string
  link: string
  description: string[]
  isIntern?: boolean
}

export const workExperienceData: WorkExperienceItem[] = [
  {
    company: 'Thales Group',
    role: 'Inside Sales Rep',
    period: '2022-2025',
    link: 'https://www.thalesgroup.com',
    description: [
      'Spearheaded IAM ecosystem growth across the META region, earning global recognition in 2025. Turned user feedback into revenue, notably driving a 20% increase in renewals for a $3M ARR portfolio, while leveraging Power BI and Salesforce to maintain 94% sales forecasting accuracy for senior leadership.',
    ],
  },
  {
    company: 'Beta Information Technology',
    role: 'Sales Account Manager',
    period: '2021-2022',
    link: 'https://www.betait.net',
    description: [
      'Managed the end-to-end cybersecurity sales lifecycle for 15 enterprise accounts, identifying infrastructure gaps and conducting competitive research to align modernizations with evolving security standards.',
    ],
  },
  {
    company: 'Beta Information Technology',
    role: 'Intern',
    period: 'June 2020 - August 2020',
    link: 'https://www.betait.net',
    isIntern: true,
    description: [
      'Led a team of five to analyze AI and Data Infrastructure trends, delivering weekly strategic insights to senior leadership that shaped the company\'s long-term solution roadmap.',
    ],
  },
]

// ============================================
// PROJECTS
// ============================================
export interface ProjectItem {
  title: string
  category: 'Published Work' | 'Projects' | 'Initiatives'
  description: string | (() => React.ReactElement)
  link?: string
  linkText?: string
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
    title: 'Tableau Analysis: Dietary Patterns & Biometric Outcomes',
    category: 'Projects',
    description: () => (
      <div className="space-y-4">
        <div>
          <span className="font-light text-accent-blue">🗂 Project Overview</span>
          <p className="mt-1">
            This interactive dashboard was designed for clinical nutritionists to identify correlations between patient lifestyle habits (Diet, Cooking Method, Workout Type) and key biometric health outcomes (BMI, Cholesterol, Sodium levels, and Metabolic Efficiency).
          </p>
        </div>
        <div>
          <span className="font-semibold text-accent-gold">🎯 The Business Question</span>
          <p className="mt-1">
            How can we move beyond generic diet prescriptions to find specific combinations of cooking methods and activity levels that maximize caloric deficit while minimizing cardiovascular risk?
          </p>
        </div>
        <div>
          <span className="font-light text-dusty-rose">🛠 Tools & Techniques</span>
          <ul className="mt-1 space-y-1 list-disc list-inside">
            <li>Tool: Tableau Public</li>
            <li>Data Structure: Aggregated tabular lifestyle data</li>
            <li>Key Features: Linked Highlighting, Cross-Filtering, Parameter Actions</li>
            <li>Accessibility: Implemented Orange-Blue Diverging and Viridis color palettes to ensure full readability for color-blind users (Deuteranopia/Protanopia safe).</li>
          </ul>
        </div>
        <div>
          <span className="font-semibold text-accent-gold">💡 Key Insights & Findings</span>
          <p className="mt-1">Through cross-tabulated analysis, three major patterns emerged that challenge standard dietary advice:</p>
          <ul className="mt-2 space-y-2 list-disc list-inside">
            <li><strong>The "Grill & Burn" Sweet Spot:</strong> Analysis reveals that a Grilled, Low-Carb diet offers the highest probability of maintaining an Ideal BMI while keeping cholesterol below average.</li>
            <li><strong>The Metabolic Threshold:</strong> Hydration efficiency is non-linear. Metabolic burn efficiency remains stagnant until patients cross a threshold of 3.0L per day.</li>
            <li><strong>Intensity over Duration:</strong> HIIT delivers the most consistent net caloric deficit compared to Strength training.</li>
          </ul>
        </div>
        <div>
          <span className="font-light text-dusty-rose">🚀 Conclusion</span>
          <p className="mt-1">
            To achieve optimal health outcomes, the data supports a protocol of Grilled Low-Carb nutrition combined with HIIT activity, supported by a strict &gt;3L daily hydration target.
          </p>
        </div>
      </div>
    ),
    link: 'https://public.tableau.com/views/DietaryPatternsBiometricOutcomes/Dashboard3?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    title: 'ReSKUe: An AI-Powered Platform to Reduce Retail Food Waste',
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
    title: 'Weekly Capital Markets Tracker',
    category: 'Projects',
    description: () => (
      <div className="space-y-4">
        <p>
          An automated fintech solution designed to track and analyze U.S. financial conditions. By replacing manual spreadsheets with a programmatic pipeline, the project provides real-time visibility into market-moving trends.
        </p>
        <div>
          <span className="font-semibold text-accent-gold">Key Features:</span>
          <ul className="mt-2 space-y-2 list-disc list-inside">
            <li><strong>Automated Data Pipeline:</strong> Pulls weekly closing prices and percentage changes for the S&P 500, 10-Year Treasury Yields, Gold, and Bitcoin using the yfinance API.</li>
            <li><strong>AI Narrative Engine:</strong> Uses Large Language Models (LLMs) to synthesize market data into a 450-word narrative, connecting quantitative shifts to broader macro themes like Fed policy and geopolitical events.</li>
            <li><strong>Transmission Mechanism Analysis:</strong> Automatically identifies global events and explains their specific impact on U.S. risk sentiment and FX markets.</li>
            <li><strong>Interactive Interface:</strong> A GitHub Pages-hosted frontend that allows users to visualize market volatility and explore advanced corporate finance concepts through an interactive library.</li>
          </ul>
        </div>
      </div>
    ),
    link: 'https://poojalohit.github.io/Weekly-Capital-Markets/',
    linkText: 'View the Tracker',
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
  title: 'Butter',
  author: 'Asako Yuzuki',
  coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1698348373l/200776812.jpg',
  goodreadsUrl: 'https://www.goodreads.com/book/show/200776812',
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
