import { Navigate, useParams } from "react-router-dom";
import { CASE_STUDIES, publishedCaseStudies } from "../data/content";
import { SelectedWork } from "../components/sections/SelectedWork";
import { Cta } from "../components/sections/Cta";
import { PageHero } from "../components/ui";
import { useDocumentTitle } from "../lib/hooks";

export function WorkPage() {
  useDocumentTitle("Case Studies — Otipu");

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Selected work"
        copy="When a project can be discussed publicly, it will appear here with the problem, the system we built, and the outcome — without invented metrics."
      />
      <SelectedWork hideHeader />
      <Cta />
    </>
  );
}

export function WorkDetailPage() {
  const { slug } = useParams();
  const study = publishedCaseStudies().find((c) => c.slug === slug);
  useDocumentTitle(study ? `${study.title} — Otipu` : "Case Studies — Otipu");

  if (!study) {
    const existsUnpublished = CASE_STUDIES.some((c) => c.slug === slug);
    if (existsUnpublished) return <Navigate to="/work" replace />;
    return <Navigate to="/work" replace />;
  }

  return (
    <>
      <PageHero eyebrow={study.industry} title={study.title} copy={study.challenge} />
      <section className="pb-20">
        <div className="container-wide grid md:grid-cols-2 gap-6">
          <article className="card-premium p-8">
            <h2 className="font-display font-bold text-xl mb-3">Solution</h2>
            <p className="text-muted-foreground font-body leading-relaxed">{study.solution}</p>
          </article>
          <article className="card-premium p-8">
            <h2 className="font-display font-bold text-xl mb-3">Outcome</h2>
            <p className="text-muted-foreground font-body leading-relaxed">{study.outcome}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {study.services.map((s) => (
                <li key={s} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                  {s}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <Cta />
    </>
  );
}
