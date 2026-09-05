import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MagneticButton, Reveal } from "../components/ui";
import { BrandMark } from "../components/BrandLogo";
import { useSEO } from "../lib/hooks";

const QUICK_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Company", href: "/company" },
  { label: "Case Studies", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function NotFoundPage() {
  useSEO({
    title: "Page not found — Otipu",
    description: "The page you're looking for doesn't exist or may have moved.",
    noindex: true,
  });

  return (
    <section className="relative min-h-[78dvh] flex items-center overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <span className="font-display font-extrabold text-[42vw] sm:text-[26vw] leading-none tracking-tight text-foreground/[0.035] whitespace-nowrap">
          404
        </span>
      </span>

      <div className="container-wide relative py-20 sm:py-24">
        <Reveal className="mx-auto max-w-lg text-center">
          <div className="mx-auto mb-7 w-14 h-14 opacity-80">
            <BrandMark size="lg" />
          </div>
          <p className="font-mono-label text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
            404 — Page not found
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            This page does not exist.
          </h1>
          <p className="text-muted-foreground font-body leading-relaxed mb-9">
            The link may be outdated, mistyped, or the page may have moved. Here's how to get back on
            track.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <MagneticButton to="/" magnetic>
              Go home <ArrowRight size={15} />
            </MagneticButton>
            <MagneticButton to="/services" variant="outline">
              View services
            </MagneticButton>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-[11px] font-mono-label uppercase tracking-[0.18em] text-muted-foreground/70 mb-4">
              Or try one of these
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {QUICK_LINKS.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium font-body text-foreground/80 hover:border-primary/35 hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
