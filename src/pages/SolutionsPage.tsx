import { Solutions } from "../components/sections/Solutions";
import { Cta } from "../components/sections/Cta";
import { PageHero } from "../components/ui";
import { useSEO } from "../lib/hooks";

const DESCRIPTION =
  "These are product and platform shapes — not a restatement of services. Each one is a system we can design, engineer and support.";

export function SolutionsPage() {
  useSEO({ title: "Solutions — Otipu", description: DESCRIPTION });

  return (
    <>
      <PageHero eyebrow="Solutions" title="What we can build for the way you operate." copy={DESCRIPTION} />
      <Solutions hideHeader />
      <Cta />
    </>
  );
}
