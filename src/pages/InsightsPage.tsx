import { INSIGHTS } from "../data/content";
import { Cta } from "../components/sections/Cta";
import { EmptyState, PageHero } from "../components/ui";
import { useDocumentTitle } from "../lib/hooks";

export function InsightsPage() {
  useDocumentTitle("Insights — Otipu");
  const published = INSIGHTS.filter((i) => i.published);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes on building software that has to last."
        copy="Articles will appear here as they are written. The section is ready for a title, excerpt, category and date."
      />
      <section className="pb-16">
        <div className="container-wide">
          {published.length === 0 ? (
            <EmptyState
              title="No articles published yet"
              body="This page is structured for a simple insights model so writing can be added later without changing the layout."
            />
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {published.map((post) => (
                <article key={post.slug} className="card-premium p-8">
                  <p className="text-[11px] font-mono-label uppercase tracking-widest text-primary mb-2">
                    {post.category}
                  </p>
                  <h2 className="font-display text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground font-body">{post.excerpt}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
      <Cta />
    </>
  );
}
