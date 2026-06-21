import { useState } from "react";
import { Check, Github, Linkedin, Send, Twitter } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-wide py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-semibold">
                O
              </div>
              <span className="text-lg font-semibold">otipu</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-5">
              Practical software for everyday life. Built with care and shipped with purpose.
            </p>
            <div className="flex gap-2">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-9 h-9 rounded-lg border border-border bg-white flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Products
            </p>
            <ul className="space-y-2.5">
              {["Roomly", "TokiTaki", "DMV Practice", "AI Suite"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Newsletter
            </p>
            <p className="text-sm text-muted-foreground mb-3">Product updates, no spam.</p>
            {done ? (
              <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                <Check size={14} /> Subscribed
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 h-9 px-3 rounded-lg text-sm bg-white border border-border focus:outline-none focus:border-primary/40 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => email && setDone(true)}
                  aria-label="Subscribe"
                  className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Otipu, Inc.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a
              href="mailto:hello@otipu.com"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@otipu.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
