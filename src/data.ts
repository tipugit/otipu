export const APPS = [
  {
    id: "roomly",
    name: "Roomly",
    tag: "Flagship",
    tagline: "Roommate Management Platform",
    desc: "Split expenses, manage chores, and keep your shared home running smoothly — built for real roommates, not spreadsheets.",
    color: "#2563EB",
    features: ["Smart expense splitting", "Shared task boards", "Bill reminders"],
    stat: "2,400+ households",
    live: true,
    angle: 0,
  },
  {
    id: "tokitaki",
    name: "TokiTaki",
    tag: "Live",
    tagline: "Personal Expense Tracker",
    desc: "AI-powered budgeting that auto-categorizes every transaction and gives you clarity over your finances.",
    color: "#7C3AED",
    features: ["AI categorization", "Visual budgets", "Spending forecasts"],
    stat: "1,800+ users",
    live: true,
    angle: 72,
  },
  {
    id: "dmv",
    name: "DMV Practice",
    tag: "Beta",
    tagline: "California DMV Learning App",
    desc: "Ace your CA DMV written test on the first try with 500+ real questions and adaptive learning.",
    color: "#06B6D4",
    features: ["500+ real questions", "Adaptive learning", "Offline mode"],
    stat: "In development",
    live: false,
    angle: 144,
  },
  {
    id: "ai",
    name: "AI Suite",
    tag: "Q3 2025",
    tagline: "AI Productivity Platform",
    desc: "Write, summarize, automate, and generate — one unified AI workspace that supercharges your day.",
    color: "#10B981",
    features: ["AI writing assistant", "Doc summarizer", "Workflow automation"],
    stat: "Launching Q3 2025",
    live: false,
    angle: 216,
  },
  {
    id: "future",
    name: "More",
    tag: "Soon",
    tagline: "Future Products",
    desc: "New tools in the pipeline — designed around everyday problems worth solving.",
    color: "#F59E0B",
    features: ["In research", "User-driven", "Craft-first"],
    stat: "Roadmap open",
    live: false,
    angle: 288,
  },
] as const;

export const SERVICES = [
  { id: "ai", label: "AI Solutions", desc: "Intelligent systems that learn and adapt", color: "#7C3AED" },
  { id: "web", label: "Web Apps", desc: "Fast, beautiful web experiences", color: "#2563EB" },
  { id: "mobile", label: "Mobile Apps", desc: "Native-feel apps for iOS & Android", color: "#06B6D4" },
  { id: "auto", label: "Automation", desc: "Workflows that run while you sleep", color: "#10B981" },
  { id: "ext", label: "Extensions", desc: "Browser tools that feel invisible", color: "#F59E0B" },
  { id: "custom", label: "Custom Software", desc: "Bespoke products from scratch", color: "#EF4444" },
] as const;

export const STATS = [
  { value: 5, suffix: "+", label: "Products launched" },
  { value: 4200, suffix: "+", label: "Users helped" },
  { value: 12000, suffix: "+", label: "Hours saved" },
  { value: 98, suffix: "%", label: "Satisfaction" },
] as const;

export const DF = "'Syne', sans-serif";
export const BF = "'DM Sans', sans-serif";
export const MF = "'JetBrains Mono', monospace";
