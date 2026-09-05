import { Expertise } from "../components/sections/Expertise";
import { Credibility } from "../components/sections/Credibility";
import { Cta } from "../components/sections/Cta";
import { PageHero } from "../components/ui";
import { useSEO } from "../lib/hooks";

const DESCRIPTION =
  "We work across frontend, backend, mobile, cloud, data, APIs, automation, security and design systems. Expand a category to see the technologies behind it.";

export function ExpertisePage() {
  useSEO({ title: "Expertise — Otipu", description: DESCRIPTION });

  return (
    <>
      <PageHero eyebrow="Expertise" title="Technology chosen for the system, not for the slide." copy={DESCRIPTION} />
      <Expertise hideHeader />
      <Credibility />
      <Cta />
    </>
  );
}
