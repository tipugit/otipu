import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { DF } from "../data";
import { MagneticButton, Reveal } from "./ui";

export function CTASection() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div
            className="relative rounded-[2.5rem] overflow-hidden p-10 sm:p-16 lg:p-20 text-center"
            style={{
              background: "linear-gradient(135deg, #050a1f 0%, #1a0a3e 40%, #0a2540 100%)",
              boxShadow: "0 48px 120px rgba(37,99,235,0.25)",
            }}
          >
            {/* Light waves */}
            <motion.div
              animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-30"
              style={{ background: "#2563EB" }}
            />
            <motion.div
              animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-25"
              style={{ background: "#7C3AED" }}
            />
            <motion.div
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px]"
              style={{ background: "#FF6B4A" }}
            />

            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/45 mb-5"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Let&apos;s build something
              </motion.p>

              <h2
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.05] tracking-tight mb-5"
                style={{ fontFamily: DF }}
              >
                Ready to explore
                <br />
                the Otipu ecosystem?
              </h2>

              <p className="text-white/55 mb-10 max-w-md mx-auto text-[15px] leading-relaxed">
                Discover software built for real life — or start a conversation about your next
                project.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#products"
                  className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold text-[#050a1f] bg-white overflow-hidden hover:bg-white/92 transition-colors shadow-xl shadow-black/25"
                  style={{ fontFamily: DF }}
                >
                  <motion.span
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 30%, rgba(37,99,235,0.15) 50%, transparent 70%)",
                      skewX: "-12deg",
                    }}
                    animate={{ x: ["-160%", "160%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Products <ArrowRight size={14} />
                  </span>
                </a>
                <MagneticButton href="mailto:hello@otipu.com" variant="ghost">
                  Contact Us
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
