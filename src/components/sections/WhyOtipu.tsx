import { WHY_OTIPU } from "../../data/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader } from "../ui";

export function WhyOtipu() {
  return (
    <section className="section-padding relative surface-lavender overflow-hidden">
      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Why Otipu"
          title="More than developers. A technology partner."
          copy="The work is technical. The responsibility is commercial — software the business can run, trust and extend."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_OTIPU.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="card-premium p-6 sm:p-7 h-full group hover:-translate-y-1 transition-transform duration-300">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 text-primary transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(56,198,255,0.14), rgba(107,92,255,0.16))",
                  }}
                >
                  <Icon name={item.icon} size={20} />
                </div>
                <h3 className="font-display font-bold text-[1.05rem] mb-2">{item.title}</h3>
                <p className="text-[13.5px] text-muted-foreground font-body leading-[1.65]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
