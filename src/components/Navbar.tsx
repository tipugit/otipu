import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, useScrolled } from "./ui";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div className="container-wide h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-semibold">
            O
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">otipu</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact">Get in touch</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden w-9 h-9 flex items-center justify-center text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white px-5 py-4 space-y-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3">
            <Button href="#contact">Get in touch</Button>
          </div>
        </div>
      )}
    </header>
  );
}
