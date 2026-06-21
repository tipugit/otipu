import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { MagneticButton, Reveal } from "./ui";

export function CTASection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        <Reveal>
          <div
            className="relative rounded-3xl overflow-hidden px-8 py-14 sm:px-14 sm:py-20 text-center"
            style={{
              background: "linear-gradient(135deg, #0c1a4a 0%, #2e1065 45%, #0c3d5c 100%)",
              boxShadow: "0 40px 100px rgba(59,130,246,0.25)",
            }}
          >
            <motion.div
              animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-30"
              style={{ background: "#3B82F6" }}
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-25"
              style={{ background: "#F472B6" }}
            />
            <div className="absolute inset-0 grid-bg opacity-[0.06]" />

            <div className="relative z-10">
              <p className="font-mono-label text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
                Let&apos;s build something
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight mb-5">
                Ready to explore the
                <br />
                <span className="text-gradient">Otipu ecosystem?</span>
              </h2>
              <p className="text-white/60 font-body text-lg max-w-md mx-auto mb-10">
                Discover software built for real life — or start a conversation about your next
                project.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#products"
                  className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold font-body text-[#0c1a4a] bg-white overflow-hidden hover:bg-white/95 transition-colors shadow-xl"
                >
                  <motion.span
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 30%, rgba(59,130,246,0.15) 50%, transparent 70%)",
                      skewX: "-12deg",
                    }}
                    animate={{ x: ["-160%", "160%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore products <ArrowRight size={14} />
                  </span>
                </a>
                <MagneticButton href="mailto:hello@otipu.com" variant="ghost">
                  Contact us
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
