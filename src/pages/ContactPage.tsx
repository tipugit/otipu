import { FormEvent, useState } from "react";
import { SITE, PROJECT_TYPES } from "../data/site";
import { MagneticButton, PageHero, Reveal } from "../components/ui";
import { useDocumentTitle } from "../lib/hooks";
import { ArrowRight, Check } from "lucide-react";

export function ContactPage() {
  useDocumentTitle("Contact — Otipu");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const type = String(data.get("type") ?? "");
    const message = String(data.get("message") ?? "");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nProject type: ${type}\n\n${message}`
    );
    const subject = encodeURIComponent(`Project inquiry from ${name || company || email}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build."
        copy="Share enough context for a useful first conversation. We will follow up at the email you provide."
      />
      <section className="pb-20">
        <div className="container-wide grid lg:grid-cols-[1fr_340px] gap-8">
          <Reveal>
            {sent ? (
              <div className="card-premium p-10">
                <div className="w-10 h-10 rounded-full bg-muted text-primary flex items-center justify-center mb-4">
                  <Check size={18} />
                </div>
                <h2 className="font-display text-2xl font-bold mb-2">Your email client should be open.</h2>
                <p className="text-muted-foreground font-body">
                  If it is not, write directly to{" "}
                  <a className="text-primary" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card-premium p-6 sm:p-8 grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                <Field label="Company" name="company" autoComplete="organization" />
                <label className="block sm:col-span-1">
                  <span className="block text-sm font-medium mb-2">Project type</span>
                  <select
                    name="type"
                    className="w-full h-12 rounded-xl border border-border bg-white px-3 font-body text-sm focus:border-primary/40"
                    defaultValue={PROJECT_TYPES[0]}
                  >
                    {PROJECT_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="block text-sm font-medium mb-2">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full rounded-xl border border-border bg-white px-3 py-3 font-body text-sm focus:border-primary/40"
                    placeholder="What are you trying to solve?"
                  />
                </label>
                <div className="sm:col-span-2 pt-2">
                  <MagneticButton type="submit" magnetic>
                    Send message <ArrowRight size={15} />
                  </MagneticButton>
                </div>
              </form>
            )}
          </Reveal>
          <Reveal delay={0.08}>
            <aside className="card-premium p-8 h-fit">
              <p className="font-display font-bold text-lg mb-2">Direct email</p>
              <a href={`mailto:${SITE.email}`} className="text-primary font-medium">
                {SITE.email}
              </a>
              <p className="mt-6 text-sm text-muted-foreground font-body leading-relaxed">
                Include goals, current systems, timeline and any constraints you already know. That is enough to start.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-2">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full h-12 rounded-xl border border-border bg-white px-3 font-body text-sm focus:border-primary/40"
      />
    </label>
  );
}
