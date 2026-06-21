import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { DF } from "../data";
import { MagneticButton, useScrolled } from "./ui";

const LINKS = ["Home", "Story", "Products", "Services", "Contact"];

export function Navbar({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center font-extrabold text-white text-lg transition-transform group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #2563EB, #7C3AED)",
              boxShadow: "0 6px 24px rgba(37,99,235,0.45)",
              fontFamily: DF,
            }}
          >
            O
          </div>
          <span className="text-xl font-extrabold tracking-tight" style={{ fontFamily: DF }}>
            otipu
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/60 transition-all"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <div className="hidden md:block">
            <MagneticButton href="#products">Explore Products</MagneticButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="lg:hidden w-10 h-10 flex items-center justify-center"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {LINKS.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-muted-foreground border-b border-border/40 last:border-0"
                >
                  {l}
                </a>
              ))}
              <div className="pt-4">
                <MagneticButton href="#products">Explore Products</MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
