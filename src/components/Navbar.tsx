import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { MagneticButton, useScrolled } from "./ui";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)] ${
        scrolled ? "glass border-b border-border shadow-lg shadow-black/10" : ""
      }`}
    >
      <div className="container-wide h-14 sm:h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group touch-target">
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-white text-sm font-extrabold font-display transition-transform group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
              boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
            }}
          >
            O
          </div>
          <span className="text-base sm:text-lg font-extrabold font-display tracking-tight">otipu</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium font-body text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="touch-target rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className="hidden md:block">
            <MagneticButton href="#products">Explore</MagneticButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden touch-target flex items-center justify-center"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="container-wide py-4 space-y-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-body text-muted-foreground border-b border-border/40 last:border-0 touch-target"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-4">
                <MagneticButton href="#products">Explore products</MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
