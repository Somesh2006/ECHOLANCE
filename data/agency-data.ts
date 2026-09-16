export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  metrics: string;
  tag: string;
  previewCode: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  result: string;
  tags: string[];
  image: string;
  link: string;
  accentColor: string;
  featured: boolean;
  stats: { label: string; value: string }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  keyOutcome: string;
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

export interface Differentiator {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlight: string;
}

export const AGENCY_STATS = [
  { label: "Products Shipped", value: "120+", detail: "Across 14 countries" },
  { label: "Lighthouse Performance", value: "99+", detail: "Guaranteed Core Web Vitals" },
  { label: "Average Client ROI", value: "3.4x", detail: "Conversion lift in 90 days" },
  { label: "Client Satisfaction", value: "99.8%", detail: "5-star rating across reviews" },
];

export const SERVICES: Service[] = [
  {
    id: "web-design",
    number: "01",
    title: "Bespoke Web Design",
    shortDesc: "High-impact visual identities and UI systems engineered for immediate market presence.",
    fullDesc: "We craft custom digital platforms that capture brand essence while prioritizing conversion psychology. Every layout, typography scale, and interaction is designed with mathematical precision.",
    iconName: "LayoutGrid",
    deliverables: ["Custom Design Systems", "Interactive Prototypes", "Micro-interaction Specs", "Brand Alignment"],
    metrics: "+140% Engagement",
    tag: "Visual Excellence",
    previewCode: `// Echolance Design Engine
const designSystem = {
  grid: "12-Column Responsive Fluid",
  typography: "Display Sans + Monospace Accent",
  contrastRatio: "AAA Compliant",
  motionProfile: "Spring Physics (0.8s, 120 stiffness)",
};`,
  },
  {
    id: "web-development",
    number: "02",
    title: "Modern Web Development",
    shortDesc: "Next-generation React & Next.js architectures with sub-second page loads and zero layout shift.",
    fullDesc: "Our engineering stack leverages modern headless solutions, SSR/SSG rendering, dynamic asset optimization, and clean TypeScript code bases that scale effortlessly.",
    iconName: "Code2",
    deliverables: ["Next.js & React Apps", "TypeScript Architecture", "Headless CMS Integration", "API & Webhook Engines"],
    metrics: "< 0.6s First Paint",
    tag: "Next.js & TypeScript",
    previewCode: `// Performant Architecture
export async function generatePlatformCore() {
  const edgeData = await fetchEdgeCache();
  return <DigitalCanvas data={edgeData} fps={60} />;
}`,
  },
  {
    id: "ui-ux",
    number: "03",
    title: "UI/UX & Product Design",
    shortDesc: "Human-centric digital interfaces shaped by empirical user research and behavioral analysis.",
    fullDesc: "We transform complex business requirements into intuitive product workflows that reduce user friction, elevate retention rates, and turn casual visitors into loyal advocates.",
    iconName: "Figma",
    deliverables: ["User Journey Mapping", "Wireframes & Flows", "Design Tokens & Kits", "Usability Testing"],
    metrics: "-65% User Friction",
    tag: "User Experience",
    previewCode: `// UX State Controller
interface UserFlowState {
  step: "discovery" | "interaction" | "conversion";
  frictionScore: number; // Goal: 0.00
  completionRate: "98.4%";
}`,
  },
  {
    id: "ecommerce",
    number: "04",
    title: "E-Commerce Experiences",
    shortDesc: "Bespoke storefronts engineered for high conversion rates, fast checkout, and seamless scale.",
    fullDesc: "Forget cookie-cutter templates. We build headless, custom e-commerce platforms with lightning-fast catalog navigation, localized currencies, and optimized checkout funnels.",
    iconName: "ShoppingBag",
    deliverables: ["Headless Storefronts", "Shopify / Custom Backend", "Stripe & Crypto Pay", "Cart Optimization"],
    metrics: "+42% Conversion Rate",
    tag: "Headless Commerce",
    previewCode: `// Commerce Engine
const checkoutStream = new CommerceEngine({
  instantPay: true,
  zeroLagCart: true,
  globalCDN: "Edge-Deploys",
});`,
  },
  {
    id: "optimization",
    number: "05",
    title: "Speed & SEO Optimization",
    shortDesc: "Transforming slow sites into 100/100 Lighthouse performance powerhouses.",
    fullDesc: "Speed is a core feature. We perform deep bundle analysis, asset compression, critical CSS path extraction, and technical SEO structure to dominate search rankings.",
    iconName: "Zap",
    deliverables: ["Lighthouse Audit 100", "Core Web Vitals Pass", "Technical SEO Schema", "CDN Edge Caching"],
    metrics: "100/100 Performance",
    tag: "Speed Engineering",
    previewCode: `// Speed Benchmark
const auditResults = {
  performance: 100,
  accessibility: 100,
  bestPractices: 100,
  seo: 100,
  lcp: "0.45s",
};`,
  },
  {
    id: "support",
    number: "06",
    title: "Continuous Growth & Support",
    shortDesc: "Long-term engineering partnership, regular updates, security monitoring, and iterative enhancements.",
    fullDesc: "Launch is just step one. We provide ongoing design iterations, feature developments, security hardening, and performance monitoring so your site evolves as your business grows.",
    iconName: "ShieldCheck",
    deliverables: ["24/7 Uptime Monitor", "Bi-Weekly Feature Sprints", "Security Patching", "Analytics Reports"],
    metrics: "99.99% Uptime",
    tag: "Partnership",
    previewCode: `// System Guard
const guard = new SecurityGuard({
  uptimeTarget: 99.99,
  threatResponse: "Instant AI Defense",
  sprintCadence: "Bi-Weekly Upgrades",
});`,
  },
];

export const PROJECTS: Project[] = [
  {
    id: "aura-architects",
    title: "Aura Architecture Studio",
    client: "Aura Global",
    category: "Architecture & Design",
    year: "2026",
    description: "A spatial digital gallery for an international architectural studio showcasing luxury residential structures.",
    result: "+210% High-Value Client Inquiries in 60 Days",
    tags: ["Next.js", "GSAP 3D", "Tailwind CSS", "WebGL"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    link: "#",
    accentColor: "#38BDF8",
    featured: true,
    stats: [
      { label: "Inquiry Growth", value: "+210%" },
      { label: "Page Load", value: "0.4s" },
      { label: "Awards", value: "Awwwards SOTD" },
    ],
  },
  {
    id: "veloce-mobility",
    title: "Veloce Autonomous Electric",
    client: "Veloce Motors",
    category: "Automotive & EV",
    year: "2026",
    description: "Interactive launch experience for next-gen electric hypercars featuring real-time 3D configurator.",
    result: "$18M Pre-orders Reserved at Launch Event",
    tags: ["React 19", "Three.js", "Custom Sound FX", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    link: "#",
    accentColor: "#6366F1",
    featured: true,
    stats: [
      { label: "Pre-orders", value: "$18M" },
      { label: "Average Session", value: "4m 12s" },
      { label: "Configurators", value: "45K+" },
    ],
  },
  {
    id: "synthetix-ai",
    title: "Synthetix Design Engine",
    client: "Synthetix Inc.",
    category: "SaaS & AI Tooling",
    year: "2025",
    description: "High-contrast dark interface for an AI creative workspace used by 100,000+ visual designers globally.",
    result: "4.8x Conversion Rate Lift on Pro Subscriptions",
    tags: ["TypeScript", "Canvas API", "Tailwind CSS", "Dark Mode UI"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    link: "#",
    accentColor: "#8B5CF6",
    featured: true,
    stats: [
      { label: "Conversion Lift", value: "4.8x" },
      { label: "Active Users", value: "100K+" },
      { label: "Lighthouse", value: "100/100" },
    ],
  },
  {
    id: "kroma-living",
    title: "Kroma Modern Living",
    client: "Kroma Furniture",
    category: "E-Commerce",
    year: "2025",
    description: "Headless minimalist furniture storefront with instant catalog search and AR room preview.",
    result: "+68% Organic Traffic & 38% Revenue Increase",
    tags: ["Shopify Headless", "Next.js", "Tailwind", "Stripe"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    link: "#",
    accentColor: "#10B981",
    featured: false,
    stats: [
      { label: "Revenue Lift", value: "+38%" },
      { label: "Cart Abandonment", value: "-24%" },
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    duration: "Week 1",
    description: "We deep-dive into your business goals, competitive landscape, target audience psychology, and technical requirements.",
    deliverables: ["Product Vision Brief", "User Archetypes", "Tech Stack Blueprint", "Project Roadmap"],
    keyOutcome: "Crystal-clear alignment and defined success metrics before a single line of code.",
  },
  {
    step: "02",
    title: "UI/UX & Visual Direction",
    duration: "Weeks 2-3",
    description: "We craft interactive visual prototypes, custom typography layouts, micro-interaction models, and visual design tokens.",
    deliverables: ["Figma Design System", "Interactive Prototype", "Motion Guidelines", "Design Approval"],
    keyOutcome: "A stunning, custom visual direction validated for user engagement.",
  },
  {
    step: "03",
    title: "Engineering & Motion",
    duration: "Weeks 4-5",
    description: "We turn designs into clean Next.js/React code with GSAP scroll animations, responsive CSS, and sub-second page performance.",
    deliverables: ["Clean Component Library", "GSAP Motion Scripts", "API Integrations", "100 Speed Audit"],
    keyOutcome: "Pixel-perfect frontend architecture optimized for 60 FPS performance.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    duration: "Week 6",
    description: "Rigorous cross-device testing, accessibility validation, SEO metadata indexing, and zero-downtime deployment.",
    deliverables: ["Cross-browser Verification", "SEO Audit", "SSL & Domain Setup", "Production Launch"],
    keyOutcome: "A flawless, high-speed digital experience live to the world.",
  },
  {
    step: "05",
    title: "Optimization & Growth",
    duration: "Ongoing",
    description: "We monitor live analytics, user heatmaps, Core Web Vitals, and continuously ship bi-weekly enhancements.",
    deliverables: ["Uptime Monitoring", "Conversion Analysis", "Feature Sprints", "Dedicated Support"],
    keyOutcome: "Continuous growth and competitive advantage for your brand.",
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "100% Bespoke Code",
    subtitle: "Zero generic templates or bloated visual page builders.",
    description: "We write clean, modular Next.js and TypeScript code crafted specifically for your brand's unique goals.",
    icon: "Code2",
    highlight: "Custom Engine",
  },
  {
    title: "Sub-Second Speed",
    subtitle: "Speed is conversion. We optimize down to the millisecond.",
    description: "Our platforms consistently achieve 99+ Core Web Vitals scores and instantaneous page transitions.",
    icon: "Zap",
    highlight: "100/100 Lighthouse",
  },
  {
    title: "Purposeful Animation",
    subtitle: "Motion that guides, engages, and elevates.",
    description: "GSAP and physics-based animations engineered to feel premium and responsive, never distracting.",
    icon: "Sparkles",
    highlight: "60 FPS Motion",
  },
  {
    title: "Conversion-Focused UX",
    subtitle: "Designed to drive real business metrics.",
    description: "Every CTA, layout section, and typography hierarchy is strategically built to convert visitors into clients.",
    icon: "TrendingUp",
    highlight: "Measurable ROI",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Echolance redesigned our platform from the ground up. The visual quality is simply unmatched, and our inbound client conversion jumped by 210% within two months of launch.",
    author: "Elena Rostova",
    role: "Founder & Creative Director",
    company: "Aura Architecture Studio",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    impactMetric: "+210% Lead Conversion",
  },
  {
    id: "2",
    quote: "Working with Echolance felt like having a world-class senior design and engineering team right in our office. They delivered an interactive 3D site ahead of schedule.",
    author: "Marcus Vance",
    role: "VP of Digital",
    company: "Veloce Motors",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    impactMetric: "$18M Pre-orders",
  },
  {
    id: "3",
    quote: "Our previous website was slow and looked like every other SaaS tool. Echolance gave us a distinctive dark aesthetic with 100/100 performance scores. Truly exceptional.",
    author: "Dr. Aris Thorne",
    role: "Chief Product Officer",
    company: "Synthetix AI",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    impactMetric: "4.8x Conversion Lift",
  },
];
