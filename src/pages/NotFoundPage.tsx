import { Link } from "react-router-dom";
import { MagneticButton } from "../components/ui";
import { useDocumentTitle } from "../lib/hooks";

export function NotFoundPage() {
  useDocumentTitle("Page not found — Otipu");

  return (
    <section className="min-h-[70dvh] flex items-center">
      <div className="container-wide py-24">
        <p className="font-mono-label text-[11px] uppercase tracking-[0.2em] text-primary mb-4">404</p>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-4">This page does not exist.</h1>
        <p className="text-muted-foreground font-body mb-8 max-w-md">
          The link may be outdated. You can return home or browse services.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <MagneticButton to="/">Go home</MagneticButton>
          <MagneticButton to="/services" variant="outline">
            View services
          </MagneticButton>
        </div>
        <p className="mt-8 text-sm">
          <Link to="/contact" className="text-primary font-medium">
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}
