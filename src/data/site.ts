export const SITE = {
  name: "Otipu",
  legalName: "Otipu, Inc.",
  domain: "otipu.com",
  email: "hello@otipu.com",
  tagline: "Software development & digital solutions",
  description:
    "Otipu is a full-service technology partner helping businesses design, build, modernize and scale digital products, internal systems, enterprise software and digital experiences.",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Services", href: "/services", mega: "services" as const },
  { label: "Solutions", href: "/solutions", mega: "solutions" as const },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [{ label: "Facebook", href: "https://www.facebook.com/otipu", icon: "Facebook" }] as const;

export const TRUST_BADGES = [
  "Business-Focused Engineering",
  "Secure Architecture",
  "Scalable Systems",
  "Transparent Delivery",
  "Long-Term Support",
  "Quality-Driven Development",
] as const;

export const HERO_TRUST = [
  { icon: "Zap", label: "Modern Engineering" },
  { icon: "ShieldCheck", label: "Reliable Delivery" },
  { icon: "TrendingUp", label: "Built to Scale" },
] as const;

export const HERO_TAGS = [
  "Strategy",
  "Software Engineering",
  "ERP Systems",
  "Cloud",
  "AI & Automation",
  "Security",
  "Design",
  "Growth",
] as const;

export const HERO_WORDS = [
  "Software",
  "Platforms",
  "Systems",
  "Experiences",
  "Automation",
  "Infrastructure",
  "Growth",
] as const;

export const PROJECT_TYPES = [
  "Custom Software",
  "ERP / Business System",
  "Web Application",
  "Mobile App",
  "Cloud & Infrastructure",
  "AI & Automation",
  "Digital Growth",
  "Not sure yet",
] as const;
