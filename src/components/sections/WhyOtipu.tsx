import { WHY_OTIPU } from "../../data/content";
import { Icon } from "../icons";
import { BrandMark } from "../BrandLogo";
import { Reveal, SectionHeader } from "../ui";

export function WhyOtipu() {
  return (
    <section className="section-padding relative bg-ink-soft text-white overflow-hidden">
      <div className="container-wide relative grid lg:grid-cols-[1.05fr_0.85fr] gap-14 items-center">
        <div>
          <SectionHeader
            align="left"
            light
            eyebrow="Why Otipu"
            title="More than developers. A technology partner."
            copy="The work is technical. The responsibility is commercial — software the business can run, trust and extend."
          />
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {WHY_OTIPU.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-accent flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[0.98rem] mb-1 text-white">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-white/60 font-body leading-[1.6]">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="hidden lg:block">
          <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.03] aspect-square flex items-center justify-center overflow-hidden p-14">
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
                maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
              }}
              aria-hidden
            />
            <BrandMark size="hero" animated />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
