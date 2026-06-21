import { useState } from "react";
import { Check, Github, Linkedin, Send, Twitter } from "lucide-react";
import { DF } from "../data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, color-mix(in srgb, var(--primary) 6%, transparent), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        {/* Large brand mark */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-extrabold text-white"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                  fontFamily: DF,
                  boxShadow: "0 8px 32px rgba(37,99,235,0.35)",
                }}
              >
                O
              </div>
              <div>
                <p className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: DF }}>
                  otipu
                </p>
                <p className="text-xs text-muted-foreground">Practical software, crafted.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We build digital products that simplify everyday life — from shared living to personal
              finance to AI-powered productivity.
            </p>
            <div className="flex gap-2 mt-5">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Products", links: ["Roomly", "TokiTaki", "DMV Practice", "AI Suite"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Resources", links: ["Docs", "Status", "Privacy", "Terms"] },
            ].map((col) => (
              <div key={col.title}>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60 mb-4"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-xs">
            <p className="text-sm font-bold mb-1" style={{ fontFamily: DF }}>
              Stay in the loop.
            </p>
            <p className="text-sm text-muted-foreground mb-4">New products and updates. No spam.</p>
            {done ? (
              <div className="flex items-center gap-2 text-emerald-500 text-sm font-semibold">
                <Check size={14} /> You&apos;re subscribed!
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 h-10 px-3 rounded-xl text-sm bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => email && setDone(true)}
                  aria-label="Subscribe"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
                >
                  <Send size={14} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-border">
          <p
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © {new Date().getFullYear()} Otipu, Inc. All rights reserved.
          </p>
          <a
            href="mailto:hello@otipu.com"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            hello@otipu.com
          </a>
        </div>
      </div>
    </footer>
  );
}
