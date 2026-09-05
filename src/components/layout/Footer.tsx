import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SITE } from "../../data/site";
import { Logo, MagneticButton } from "../ui";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Process", href: "/process" },
      { label: "Case Studies", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Software Services",
    links: [
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "ERP Systems", href: "/services/erp-systems" },
      { label: "Web Applications", href: "/services/web-applications" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "AI & Automation", href: "/services/ai-automation" },
    ],
  },
  {
    title: "Technology Services",
    links: [
      { label: "API & Integration", href: "/services/api-integration" },
      { label: "Database Engineering", href: "/services/database-engineering" },
      { label: "Analytics", href: "/services/analytics" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "QA & Testing", href: "/services/qa-testing" },
      { label: "Maintenance", href: "/services/maintenance" },
    ],
  },
  {
    title: "Digital Growth",
    links: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Paid Advertising", href: "/services/paid-advertising" },
      { label: "SEO", href: "/services/seo" },
      { label: "Social Media", href: "/services/social-media" },
      { label: "Conversion Optimization", href: "/services/conversion" },
      { label: "Analytics", href: "/services/analytics-tracking" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Technologies", href: "/expertise" },
      { label: "Industries", href: "/industries" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/">
              <Logo />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground font-body leading-relaxed max-w-[16rem]">
              Software development and digital solutions for businesses that need more than a website.
            </p>
            <p className="mt-6 text-xs text-muted-foreground/70 font-body">
              © {new Date().getFullYear()} {SITE.legalName}
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-mono-label uppercase tracking-[0.18em] text-muted-foreground/70 mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
          <div>
            <p className="text-[11px] font-mono-label uppercase tracking-[0.18em] text-muted-foreground/70 mb-2">
              Contact
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm font-body text-foreground/80 hover:text-foreground"
            >
              {SITE.email}
            </a>
          </div>
          <MagneticButton to="/contact" magnetic>
            Start a Project <ArrowRight size={14} />
          </MagneticButton>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-muted-foreground/70 font-body">
          <Link to="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-foreground">
            Terms of Service
          </Link>
          <span className="ml-auto text-muted-foreground/50">{SITE.domain}</span>
        </div>
      </div>
    </footer>
  );
}
