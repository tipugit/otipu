import { Solutions } from "../components/sections/Solutions";
import { Cta } from "../components/sections/Cta";
import { PageHero } from "../components/ui";
import { useDocumentTitle } from "../lib/hooks";

export function SolutionsPage() {
  useDocumentTitle("Solutions — Otipu");

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="What we can build for the way you operate."
        copy="These are product and platform shapes — not a restatement of services. Each one is a system we can design, engineer and support."
      />
      <Solutions hideHeader />
      <Cta />
    </>
  );
}
