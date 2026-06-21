export const APPS = [
  {
    id: "roomly",
    name: "Roomly",
    tag: "Flagship",
    tagline: "Roommate Management",
    desc: "Split expenses, manage chores, and keep shared living organized — without spreadsheets.",
    color: "#1d4ed8",
    features: ["Expense splitting", "Shared tasks", "Bill reminders"],
    stat: "2,400+ households",
    live: true,
  },
  {
    id: "tokitaki",
    name: "TokiTaki",
    tag: "Live",
    tagline: "Expense Tracker",
    desc: "AI-powered budgeting that categorizes spending and keeps your finances clear.",
    color: "#0d9488",
    features: ["Auto categorization", "Visual budgets", "Forecasts"],
    stat: "1,800+ users",
    live: true,
  },
  {
    id: "dmv",
    name: "DMV Practice",
    tag: "Beta",
    tagline: "DMV Test Prep",
    desc: "Prepare for your California DMV written test with real questions and adaptive learning.",
    color: "#0369a1",
    features: ["500+ questions", "Adaptive learning", "Offline mode"],
    stat: "In development",
    live: false,
  },
  {
    id: "ai",
    name: "AI Suite",
    tag: "Coming soon",
    tagline: "Productivity Platform",
    desc: "Write, summarize, and automate workflows in one focused AI workspace.",
    color: "#059669",
    features: ["Writing assistant", "Summaries", "Automation"],
    stat: "Launching Q3 2025",
    live: false,
  },
] as const;

export const SERVICES = [
  { id: "ai", label: "AI Solutions", desc: "Practical AI integrated into real products" },
  { id: "web", label: "Web Applications", desc: "Reliable, scalable web software" },
  { id: "mobile", label: "Mobile Apps", desc: "Native-quality iOS and Android experiences" },
  { id: "auto", label: "Automation", desc: "Systems that reduce manual work" },
  { id: "ext", label: "Browser Extensions", desc: "Focused tools inside the browser" },
  { id: "custom", label: "Custom Software", desc: "End-to-end product development" },
] as const;

export const STATS = [
  { value: 5, suffix: "+", label: "Products" },
  { value: 4200, suffix: "+", label: "Active users" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
] as const;

export const FONT = "'Inter', system-ui, -apple-system, sans-serif";
