import { useState } from "react";
import { Check, Github, Linkedin, Send, Twitter } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-border relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.08), transparent 70%)",
        }}
      />

      <div className="container-wide py-14 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold font-display"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  boxShadow: "0 6px 24px rgba(59,130,246,0.35)",
                }}
              >
                O
              </div>
              <span className="text-xl font-bold font-display">otipu</span>
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-sm mb-5">
              Practical software for everyday life. Colorful, crafted, and built with care.
            </p>
            <div className="flex gap-2">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono-label text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-4">
              Products
            </p>
            <ul className="space-y-2.5">
              {["Roomly", "TokiTaki", "DMV Practice", "AI Suite"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-label text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-4">
              Newsletter
            </p>
            <p className="text-sm text-muted-foreground font-body mb-3">Updates, no spam.</p>
            {done ? (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold font-body">
                <Check size={14} /> Subscribed!
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 h-9 px-3 rounded-xl text-sm font-body bg-card border border-border focus:outline-none focus:border-primary/40 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => email && setDone(true)}
                  aria-label="Subscribe"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}
                >
                  <Send size={13} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground font-mono-label">
            © {new Date().getFullYear()} Otipu, Inc.
          </p>
          <a
            href="mailto:hello@otipu.com"
            className="text-xs text-muted-foreground font-body hover:text-foreground transition-colors"
          >
            hello@otipu.com
          </a>
        </div>
      </div>
    </footer>
  );
}
