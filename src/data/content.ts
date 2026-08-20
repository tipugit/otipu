export const SOLUTIONS = [
  {
    slug: "enterprise-management",
    title: "Enterprise Management Platforms",
    description:
      "Central systems that connect departments, roles and reporting across an organization.",
    icon: "Building2",
  },
  {
    slug: "internal-systems",
    title: "Internal Business Systems",
    description:
      "Tools your team uses every day — operations, administration and internal workflows.",
    icon: "Briefcase",
  },
  {
    slug: "customer-portals",
    title: "Customer Portals",
    description:
      "Secure spaces where customers manage accounts, requests, documents and activity.",
    icon: "Users",
  },
  {
    slug: "saas-platforms",
    title: "SaaS Platforms",
    description:
      "Multi-tenant products with billing, roles, onboarding and the operational core of a software business.",
    icon: "AppWindow",
  },
  {
    slug: "membership",
    title: "Membership Platforms",
    description:
      "Member records, dues, access, communications and reporting for organizations that run on membership.",
    icon: "IdCard",
  },
  {
    slug: "financial-management",
    title: "Financial Management Systems",
    description:
      "Ledgers, invoicing, approvals and reporting shaped around how finance actually operates.",
    icon: "Wallet",
  },
  {
    slug: "operations",
    title: "Operations Management",
    description:
      "Day-to-day operational software for tasks, status, handoffs and accountability.",
    icon: "ClipboardList",
  },
  {
    slug: "inventory-logistics",
    title: "Inventory & Logistics Systems",
    description:
      "Stock, purchasing, movement and fulfillment with a clear picture of what is where.",
    icon: "Package",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Replace repeated handoffs with structured workflows, rules and notifications.",
    icon: "Workflow",
  },
  {
    slug: "booking",
    title: "Booking & Scheduling Systems",
    description:
      "Availability, appointments, resources and reminders for service-driven businesses.",
    icon: "Calendar",
  },
  {
    slug: "learning",
    title: "Learning Platforms",
    description:
      "Course delivery, progress tracking and content management for training and education.",
    icon: "GraduationCap",
  },
  {
    slug: "marketplace",
    title: "Marketplace Platforms",
    description:
      "Multi-sided platforms connecting buyers, sellers or providers with orders and accounts.",
    icon: "Store",
  },
  {
    slug: "analytics-platforms",
    title: "Analytics Platforms",
    description:
      "Purpose-built reporting environments for metrics, trends and operational visibility.",
    icon: "PieChart",
  },
  {
    slug: "digital-commerce",
    title: "Digital Commerce",
    description:
      "Commerce experiences connected to catalog, payments, orders and internal operations.",
    icon: "ShoppingCart",
  },
  {
    slug: "document-management",
    title: "Document Management Systems",
    description:
      "Structured storage, permissions, versioning and retrieval for business documents.",
    icon: "FolderOpen",
  },
] as const;

export const MEGA_SOLUTIONS = SOLUTIONS.slice(0, 8).map((s) => ({
  title: s.title,
  href: `/solutions#${s.slug}`,
}));

export const INDUSTRIES = [
  { slug: "professional-services", title: "Professional Services", icon: "Scale" },
  { slug: "retail", title: "Retail & Commerce", icon: "Store" },
  { slug: "finance", title: "Finance", icon: "Landmark" },
  { slug: "education", title: "Education", icon: "GraduationCap" },
  { slug: "healthcare", title: "Healthcare Technology", icon: "HeartPulse" },
  { slug: "logistics", title: "Logistics", icon: "Truck" },
  { slug: "real-estate", title: "Real Estate", icon: "Home" },
  { slug: "construction", title: "Construction", icon: "HardHat" },
  { slug: "hospitality", title: "Hospitality", icon: "Hotel" },
  { slug: "membership", title: "Membership Organizations", icon: "UsersRound" },
  { slug: "nonprofits", title: "Nonprofits", icon: "Handshake" },
  { slug: "startups", title: "Startups", icon: "Rocket" },
  { slug: "enterprise", title: "Enterprise Operations", icon: "Building" },
] as const;

export const PROCESS_STEPS = [
  {
    id: "discover",
    title: "Discover",
    summary: "Understand the business, users, challenges and goals.",
    detail:
      "We start with how the organization works today — constraints, stakeholders, existing systems and the outcome that would actually matter.",
  },
  {
    id: "plan",
    title: "Plan",
    summary: "Define requirements, scope, architecture and delivery strategy.",
    detail:
      "Scope, architecture and sequencing are made explicit so engineering has a clear path and the business knows what will be delivered.",
  },
  {
    id: "design",
    title: "Design",
    summary: "Create flows, interfaces, prototypes and design systems.",
    detail:
      "Flows and interfaces are designed against real tasks, then turned into a coherent system the product can grow inside.",
  },
  {
    id: "engineer",
    title: "Engineer",
    summary: "Build scalable frontend, backend, integrations and infrastructure.",
    detail:
      "We implement the product with attention to structure, integrations, data and the environments it will run in.",
  },
  {
    id: "validate",
    title: "Validate",
    summary: "Test functionality, performance, usability and reliability.",
    detail:
      "Functionality, edge cases, performance and usability are checked before the software is asked to serve real users.",
  },
  {
    id: "launch",
    title: "Launch",
    summary: "Deploy carefully and prepare the platform for real users.",
    detail:
      "Deployment is planned, monitored and reversible where it needs to be — with the operational basics in place from day one.",
  },
  {
    id: "improve",
    title: "Improve",
    summary: "Monitor, support and continuously evolve the product.",
    detail:
      "After launch we stay with the product — fixing, refining and extending it as the business learns what it needs next.",
  },
] as const;

export const WHY_OTIPU = [
  {
    title: "Business-First Thinking",
    body: "We focus on the problem the technology needs to solve, not just the code.",
    icon: "Lightbulb",
  },
  {
    title: "End-to-End Capability",
    body: "Strategy, design, engineering, infrastructure, automation and growth can be handled together.",
    icon: "Layers",
  },
  {
    title: "Scalable Engineering",
    body: "Solutions are designed with future growth, maintainability and performance in mind.",
    icon: "Expand",
  },
  {
    title: "Clear Communication",
    body: "Clients should always understand what is being built and why.",
    icon: "MessagesSquare",
  },
  {
    title: "Security by Design",
    body: "Security and data protection are considered throughout the development process.",
    icon: "ShieldCheck",
  },
  {
    title: "Long-Term Partnership",
    body: "We can continue supporting, improving and evolving products after launch.",
    icon: "Handshake",
  },
] as const;

export const EXPERTISE = [
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "TypeScript", "REST services", "Application logic"],
  },
  {
    id: "mobile",
    title: "Mobile",
    items: ["Cross-platform apps", "Progressive Web Apps", "iOS and Android delivery"],
  },
  {
    id: "cloud",
    title: "Cloud",
    items: ["Cloud architecture", "Environment setup", "Scalable hosting"],
  },
  {
    id: "databases",
    title: "Databases",
    items: ["Relational modeling", "Schema design", "Migrations", "PostgreSQL"],
  },
  {
    id: "apis",
    title: "APIs",
    items: ["REST APIs", "Webhooks", "Third-party integrations"],
  },
  {
    id: "ai",
    title: "AI",
    items: ["Product AI features", "Model API integrations", "Intelligent search"],
  },
  {
    id: "automation",
    title: "Automation",
    items: ["Workflow automation", "Internal tools", "Process orchestration"],
  },
  {
    id: "devops",
    title: "DevOps",
    items: ["CI/CD", "Deployment pipelines", "Environment management"],
  },
  {
    id: "analytics",
    title: "Analytics",
    items: ["Dashboards", "Reporting", "Event tracking"],
  },
  {
    id: "security",
    title: "Security",
    items: ["Authentication", "Authorization", "Access control", "Secure API design"],
  },
  {
    id: "design-systems",
    title: "Design Systems",
    items: ["Component libraries", "Design tokens", "Interface consistency"],
  },
] as const;

export const DISCIPLINE = [
  "Architecture before implementation",
  "Clean, maintainable code",
  "Well-structured databases",
  "Secure authentication",
  "Reliable APIs",
  "Thorough testing",
  "Automated deployment",
  "Performance optimization",
  "Documentation",
  "Long-term maintainability",
] as const;

export const ARCHITECTURE_LAYERS = [
  { id: "interface", title: "Interface", note: "The screens, flows and interactions people use." },
  { id: "application", title: "Application", note: "Client-side logic, state and product behavior." },
  { id: "api", title: "API", note: "Contracts between systems, clients and services." },
  { id: "logic", title: "Business Logic", note: "Rules, workflows and domain behavior." },
  { id: "database", title: "Database", note: "Structured data, integrity and reporting." },
  { id: "infrastructure", title: "Infrastructure", note: "Environments, deployment and scale." },
  { id: "security", title: "Security", note: "Identity, access and data protection." },
  { id: "monitoring", title: "Monitoring", note: "Health, performance and operational visibility." },
] as const;

export const ERP_MODULES = [
  "Finance",
  "Sales",
  "Purchasing",
  "Inventory",
  "CRM",
  "HR",
  "Payroll",
  "Members",
  "Projects",
  "Assets",
  "Documents",
  "Approvals",
  "Reports",
  "Analytics",
  "Operations",
] as const;

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  services: string[];
  outcome: string;
  published: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "_template-operations",
    title: "Project title",
    industry: "Industry",
    challenge: "Describe the operational or product challenge.",
    solution: "Describe the system that was designed and delivered.",
    services: ["Custom Software", "ERP Systems"],
    outcome: "Describe the business result without inflating metrics.",
    published: false,
  },
  {
    slug: "_template-platform",
    title: "Project title",
    industry: "Industry",
    challenge: "Describe the platform or product challenge.",
    solution: "Describe the architecture and product approach.",
    services: ["Web Applications", "Cloud & DevOps"],
    outcome: "Describe qualitative improvement and what changed.",
    published: false,
  },
];

export const publishedCaseStudies = () => CASE_STUDIES.filter((c) => c.published);

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  published: boolean;
};

export const INSIGHTS: Insight[] = [];

export const FAQS = [
  {
    q: "What kinds of projects does Otipu take on?",
    a: "Custom software, ERP and business systems, web and mobile applications, cloud and infrastructure, AI-assisted features, integrations, and digital growth work that supports those products.",
  },
  {
    q: "Do you only build new products, or can you work with existing systems?",
    a: "Both. We design new platforms and we modernize, integrate or extend systems that are already in production.",
  },
  {
    q: "Can you handle a project from idea through launch?",
    a: "Yes. Discovery, planning, design, engineering, validation, deployment and ongoing support can be handled as one engagement or in defined phases.",
  },
  {
    q: "Do you work with startups as well as established organizations?",
    a: "Yes. The engagement is sized to the problem — from a focused product build to a larger operational platform.",
  },
  {
    q: "How do we start?",
    a: "Send a note to hello@otipu.com or use the contact form. We will ask enough to understand the problem, then propose a clear next step.",
  },
] as const;
