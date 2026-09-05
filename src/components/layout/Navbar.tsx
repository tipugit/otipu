import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { COMPACT_NAV, NAV } from "../../data/site";
import { MEGA_SERVICES } from "../../data/services";
import { MEGA_SOLUTIONS } from "../../data/content";
import { useScrolled } from "../../lib/hooks";
import { cn } from "../../lib/cn";
import { Logo, MagneticButton } from "../ui";

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<"services" | "solutions" | null>(null);
  const location = useLocation();
  const onDark = location.pathname === "/" && !scrolled && !open;

  useEffect(() => {
    setOpen(false);
    setMega(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300",
        scrolled || open ? "glass border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-wide h-16 lg:h-[4.25rem] flex items-center gap-4">
        <Link to="/" className="flex-shrink-0 touch-target flex items-center" aria-label="Otipu home">
          <Logo tone={onDark ? "light" : "dark"} />
        </Link>

        <nav className="hidden 2xl:flex flex-1 items-center justify-center gap-0.5" aria-label="Primary">
          {NAV.map((item) => (
            <NavItem key={item.href} item={item} mega={mega} setMega={setMega} onDark={onDark} />
          ))}
        </nav>

        <nav className="hidden lg:flex 2xl:hidden flex-1 items-center justify-center gap-0.5" aria-label="Primary">
          {COMPACT_NAV.map((item) => (
            <NavItem key={item.href} item={item} mega={mega} setMega={setMega} onDark={onDark} />
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:block">
            <MagneticButton to="/contact" magnetic className="px-5 py-2.5 min-h-[42px] text-[13px]">
              Start a Project <ArrowRight size={14} />
            </MagneticButton>
          </div>
          <button
            type="button"
            className={cn(
              "lg:hidden touch-target flex items-center justify-center rounded-full transition-colors",
              onDark ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mega && (
          <MegaPanel
            type={mega}
            onClose={() => setMega(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

function NavItem({
  item,
  mega,
  setMega,
  onDark,
}: {
  item: { label: string; href: string; mega?: "services" | "solutions" };
  mega: "services" | "solutions" | null;
  setMega: (v: "services" | "solutions" | null) => void;
  onDark: boolean;
}) {
  const hasMega = Boolean(item.mega);
  const activeMega = item.mega && mega === item.mega;

  if (hasMega && item.mega) {
    return (
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 px-2.5 py-2 rounded-lg text-[13px] font-medium font-body transition-colors",
          onDark
            ? activeMega
              ? "text-white bg-white/15"
              : "text-white/70 hover:text-white hover:bg-white/10"
            : activeMega
              ? "text-foreground bg-muted/70"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        )}
        aria-expanded={activeMega}
        onClick={() => setMega(activeMega ? null : item.mega!)}
        onMouseEnter={() => setMega(item.mega!)}
      >
        {item.label}
        <ChevronDown size={12} className={cn("transition-transform", activeMega && "rotate-180")} />
      </button>
    );
  }

  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        cn(
          "px-2.5 py-2 rounded-lg text-[13px] font-medium font-body transition-colors",
          onDark
            ? isActive
              ? "text-white"
              : "text-white/70 hover:text-white hover:bg-white/10"
            : isActive
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        )
      }
      onMouseEnter={() => setMega(null)}
    >
      {item.label}
    </NavLink>
  );
}

function MegaPanel({
  type,
  onClose,
}: {
  type: "services" | "solutions";
  onClose: () => void;
}) {
  const items = type === "services" ? MEGA_SERVICES : MEGA_SOLUTIONS;
  const ref = useRef<HTMLDivElement>(null);
  const labelId = useId();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.18 }}
      className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full pt-2"
      role="menu"
      aria-labelledby={labelId}
      onMouseLeave={onClose}
    >
      <div className="w-[34rem] rounded-2xl border border-border bg-white/95 backdrop-blur-xl shadow-2xl shadow-navy/10 p-4">
        <p id={labelId} className="px-2 pb-3 text-[11px] font-mono-label uppercase tracking-widest text-muted-foreground">
          {type === "services" ? "Services" : "Solutions"}
        </p>
        <div className="grid grid-cols-2 gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              role="menuitem"
              className="rounded-xl px-3 py-2.5 text-sm font-body text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Link
          to={type === "services" ? "/services" : "/solutions"}
          className="mt-2 flex items-center gap-1 px-3 py-2 text-sm font-semibold text-primary"
          onClick={onClose}
        >
          View all <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="lg:hidden overflow-hidden border-t border-border glass"
    >
      <nav className="container-wide py-4 max-h-[calc(100dvh-4rem)] overflow-y-auto" aria-label="Mobile">
        {NAV.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={onClose}
            className="block py-3.5 text-base font-body text-foreground border-b border-border/50 last:border-0"
          >
            {item.label}
          </Link>
        ))}
        <div className="pt-5 pb-3">
          <MagneticButton to="/contact">
            Start a Project <ArrowRight size={15} />
          </MagneticButton>
        </div>
      </nav>
    </motion.div>
  );
}
