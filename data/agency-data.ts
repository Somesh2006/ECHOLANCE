export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  metrics: string;
  previewType: "web-design" | "web-dev" | "ecommerce" | "landing" | "business" | "maintenance";
}

export type Service = ServiceItem;

export interface WorkItem {
  number: string;
  id: string;
  title: string;
  type: string;
  status: "SELECTED CONCEPT" | "CONCEPT" | "ARCHIVED CONCEPT";
  description: string;
  technologies: string[];
  client: string;
  category: string;
  year: string;
  result: string;
  tags: string[];
  image: string;
  link: string;
}

export type Project = WorkItem;

export interface ProcessItem {
  number: string;
  id: string;
  title: string;
  headline: string;
  description: string;
  outputs: string[];
  step: string;
  deliverables: string[];
}

export type ProcessStep = ProcessItem;

export interface ValueItem {
  title: string;
  description: string;
  subtitle: string;
  icon: string;
}

export type Pillar = ValueItem;

export interface AgencyStat {
  label: string;
  value: string;
  detail: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
  impactMetric: string;
}

// 01 — SERVICES (Canonical structure)
export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    id: "web-design",
    title: "WEB DESIGN",
    category: "Visual Identity & Art Direction",
    description:
      "Bespoke digital identities and human-centered user interfaces crafted for distinction and clear visual hierarchy.",
    shortDesc: "Bespoke digital identities and human-centered user interfaces crafted for distinction.",
    fullDesc: "We craft custom visual platforms that capture your brand essence while prioritizing conversion psychology.",
    iconName: "LayoutGrid",
    deliverables: [
      "Custom Design Systems",
      "Interactive Prototypes",
      "Design Tokens",
      "Micro-Interactions",
    ],
    metrics: "Visual Craft",
    previewType: "web-design",
  },
  {
    number: "02",
    id: "web-development",
    title: "WEB DEVELOPMENT",
    category: "Full-Stack & Next.js Engineering",
    description:
      "Modern Next.js and TypeScript architectures engineered for sub-second performance, accessibility, and clean maintainability.",
    shortDesc: "Next.js and TypeScript architectures engineered for sub-second performance.",
    fullDesc: "Our engineering stack leverages modern headless solutions, server-side rendering, and clean modular codebases.",
    iconName: "Code2",
    deliverables: [
      "Next.js Architecture",
      "TypeScript Codebases",
      "API & Webhook Integrations",
      "Performance Audits",
    ],
    metrics: "Sub-Second Paint",
    previewType: "web-dev",
  },
  {
    number: "03",
    id: "ecommerce",
    title: "E-COMMERCE",
    category: "Headless Commerce & Funnels",
    description:
      "Custom storefronts designed for intuitive product discovery, fast checkout experiences, and global scalability.",
    shortDesc: "Custom storefronts designed for intuitive product discovery and checkout.",
    fullDesc: "Custom storefront solutions with fast catalog search, global currencies, and optimized checkout funnels.",
    iconName: "ShoppingBag",
    deliverables: [
      "Headless Storefronts",
      "Custom Checkout Flows",
      "Catalog Search Optimization",
      "Payment Gateway Integration",
    ],
    metrics: "Headless Speed",
    previewType: "ecommerce",
  },
  {
    number: "04",
    id: "landing-pages",
    title: "LANDING PAGES",
    category: "High-Impact Campaign Platforms",
    description:
      "Precision-crafted single-page experiences structured with strong typographic narrative and focused call-to-action funnels.",
    shortDesc: "Targeted single-page experiences built with strategic typography.",
    fullDesc: "High-frequency campaign platforms structured with strategic typography, micro-interactions, and conversion focus.",
    iconName: "Sparkles",
    deliverables: [
      "Editorial Layouts",
      "Visual Storytelling",
      "A/B Structure Ready",
      "Responsive Optimization",
    ],
    metrics: "High Conversion",
    previewType: "landing",
  },
  {
    number: "05",
    id: "ui-ux",
    title: "UI/UX",
    category: "Product Architecture & Systems",
    description:
      "End-to-end interface design, user journey mapping, and component architecture for complex web applications.",
    shortDesc: "End-to-end interface design, user journeys, and component architecture.",
    fullDesc: "Comprehensive product design systems, user journey mapping, wireframing, and design token libraries.",
    iconName: "Globe",
    deliverables: [
      "User Journey Mapping",
      "Design System Libraries",
      "Wireframing & Prototypes",
      "Usability Architecture",
    ],
    metrics: "Design Systems",
    previewType: "business",
  },
  {
    number: "06",
    id: "maintenance",
    title: "MAINTENANCE",
    category: "Long-Term Technical Partnership",
    description:
      "Proactive code updates, security monitoring, performance tuning, and continuous feature sprints.",
    shortDesc: "Continuous engineering partnership, security monitoring, and updates.",
    fullDesc: "Ongoing design updates, feature developments, security hardening, and Core Web Vitals audits.",
    iconName: "ShieldCheck",
    deliverables: [
      "Performance Monitoring",
      "Security Updates",
      "Feature Iterations",
      "Dependency Upgrades",
    ],
    metrics: "Active Support",
    previewType: "maintenance",
  },
];

export const SERVICES = SERVICES_DATA;

// 02 — WORK (3 High-End Concept Prototypes)
export const WORK_DATA: WorkItem[] = [
  {
    number: "01",
    id: "restaurant-website",
    title: "RESTAURANT WEBSITE",
    type: "Hospitality & Culinary Atelier",
    status: "SELECTED CONCEPT",
    description:
      "An atmospheric editorial presence with tasting menus, reservations, and refined typography.",
    technologies: ["Next.js", "GSAP", "Tailwind CSS"],
    client: "Selected Concept",
    category: "WEB DESIGN / DEVELOPMENT",
    year: "2026",
    result: "Atmospheric Dining Platform",
    tags: ["Next.js", "GSAP", "Tailwind CSS"],
    image: "",
    link: "#",
  },
  {
    number: "02",
    id: "fashion-ecommerce",
    title: "FASHION E-COMMERCE",
    type: "Monochrome Runway Storefront",
    status: "SELECTED CONCEPT",
    description:
      "A high-contrast digital flagship centered on silhouette, curated lookbooks, and fluid cart micro-interactions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    client: "Selected Concept",
    category: "E-COMMERCE / UI DESIGN",
    year: "2026",
    result: "Monochrome Storefront",
    tags: ["Next.js", "TypeScript", "Headless Cart"],
    image: "",
    link: "#",
  },
  {
    number: "03",
    id: "business-website",
    title: "BUSINESS WEBSITE",
    type: "Strategic Advisory Flagship",
    status: "SELECTED CONCEPT",
    description:
      "A structured corporate platform communicating market authority, practice areas, and strategic insights.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    client: "Selected Concept",
    category: "WEB DESIGN / DEVELOPMENT",
    year: "2026",
    result: "Advisory Flagship",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "",
    link: "#",
  },
  {
    number: "04",
    id: "digital-platform",
    title: "DIGITAL PLATFORM",
    type: "Modular Cloud Infrastructure",
    status: "SELECTED CONCEPT",
    description:
      "A full-width high-performance platform interface engineered with sub-second data streaming and unified token libraries.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    client: "Selected Concept",
    category: "PLATFORM ARCHITECTURE",
    year: "2026",
    result: "Platform Interface",
    tags: ["Next.js", "TypeScript", "Design Tokens"],
    image: "",
    link: "#",
  },
];

export const PROJECTS = WORK_DATA;

// 03 — PROCESS
export const PROCESS_DATA: ProcessItem[] = [
  {
    number: "01",
    step: "01",
    id: "idea",
    title: "IDEA",
    headline: "Conceptual Blueprint & Architecture",
    description: "Understanding brand positioning, project parameters, and technical scope.",
    outputs: ["Blueprint", "Information Architecture"],
    deliverables: ["Blueprint", "Information Architecture"],
  },
  {
    number: "02",
    step: "02",
    id: "structure",
    title: "STRUCTURE",
    headline: "Wireframes & Spatial Grid",
    description: "Establishing layout hierarchy and intuitive user journeys.",
    outputs: ["Grid Layout", "Spatial Hierarchy"],
    deliverables: ["Grid Layout", "Spatial Hierarchy"],
  },
  {
    number: "03",
    step: "03",
    id: "design",
    title: "DESIGN",
    headline: "Art Direction & Design Tokens",
    description: "Custom typography, restrained dark aesthetics, and purposeful motion.",
    outputs: ["Design System", "Motion Tokens"],
    deliverables: ["Design System", "Motion Tokens"],
  },
  {
    number: "04",
    step: "04",
    id: "build",
    title: "BUILD",
    headline: "Next.js Engineering & Integration",
    description: "Clean TypeScript codebases engineered for speed and accessibility.",
    outputs: ["Production Codebase", "Component Library"],
    deliverables: ["Production Codebase", "Component Library"],
  },
  {
    number: "05",
    step: "05",
    id: "live",
    title: "LIVE",
    headline: "Edge Deployment & Launch",
    description: "Sub-second load times, global edge delivery, and ongoing support.",
    outputs: ["Edge Deployment", "Verification"],
    deliverables: ["Edge Deployment", "Verification"],
  },
];

export const PROCESS_STEPS = PROCESS_DATA;

// 04 — 3 CORE PRINCIPLES
export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

export const CORE_PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    title: "BESPOKE BY DEFAULT",
    description:
      "Every project is built from the ground up for the brand it represents. We do not use off-the-shelf templates or generic visual builders.",
  },
  {
    number: "02",
    title: "DESIGN + ENGINEERING",
    description:
      "Aesthetics and technical execution are inseparable. We write clean, modern code that renders quickly, moves with purpose, and feels effortless.",
  },
  {
    number: "03",
    title: "BUILT TO EVOLVE",
    description:
      "We structure platforms to scale cleanly over time, making future iterations, performance enhancements, and new features simple to introduce.",
  },
];

export const AGENCY_VALUES: ValueItem[] = [
  {
    title: "BESPOKE BY DEFAULT",
    subtitle: "Zero generic templates or visual builders.",
    description: "Every project is built from the ground up for the brand it represents.",
    icon: "Code2",
  },
  {
    title: "DESIGN + ENGINEERING",
    subtitle: "Aesthetics and technical execution in tandem.",
    description: "We write clean, modern code that renders quickly, moves with purpose, and feels effortless.",
    icon: "Sparkles",
  },
  {
    title: "BUILT TO EVOLVE",
    subtitle: "Scale cleanly over time without technical debt.",
    description: "Structured for longevity, making future iterations and enhancements simple to introduce.",
    icon: "ShieldCheck",
  },
];

export const WHY_POINTS = AGENCY_VALUES;


export const AGENCY_STATS: AgencyStat[] = [
  { label: "Bespoke Architecture", value: "100%", detail: "Zero visual page builders" },
  { label: "Performance Target", value: "Sub-Second", detail: "Optimized Core Web Vitals" },
  { label: "Core Stack", value: "Next.js", detail: "TypeScript, GSAP, Tailwind" },
  { label: "Art Direction", value: "Editorial", detail: "Tailored brand platforms" },
];

export const TESTIMONIALS: Testimonial[] = [];

// Navigation Anchors (Primary Destinations)
export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

