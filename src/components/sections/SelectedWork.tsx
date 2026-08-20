import { Link } from "react-router-dom";
import { publishedCaseStudies } from "../../data/content";
import { EmptyState, Reveal, SectionHeader } from "../ui";

export function SelectedWork({ hideHeader = false }: { hideHeader?: boolean }) {
  const studies = publishedCaseStudies();

  return (
    <section id="work" className="section-padding">
      <div className="container-wide">
        {!hideHeader && (
          <SectionHeader
            eyebrow="Selected work"
            title="Work, when it can be shared."
            copy="Case studies are published when a client is comfortable with the story. Until then, this space stays honest."
          />
        )}
        {studies.length === 0 ? (
          <Reveal>
            <EmptyState
              title="Case studies forthcoming"
              body="This section is wired to a simple project model — title, industry, challenge, solution, services and outcome — so published work can be added without redesigning the page."
            />
          </Reveal>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {studies.map((study) => (
              <Link
                key={study.slug}
                to={`/work/${study.slug}`}
                data-cursor="View"
                className="card-premium p-8 hover:border-primary/30 transition-colors group"
              >
                <p className="text-[11px] font-mono-label uppercase tracking-widest text-primary mb-3">
                  {study.industry}
                </p>
                <h3 className="font-display text-2xl font-bold mb-3">{study.title}</h3>
                <p className="text-muted-foreground font-body">{study.challenge}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
