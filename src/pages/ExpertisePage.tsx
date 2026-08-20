import { Expertise } from "../components/sections/Expertise";
import { Credibility } from "../components/sections/Credibility";
import { Cta } from "../components/sections/Cta";
import { PageHero } from "../components/ui";
import { useDocumentTitle } from "../lib/hooks";

export function ExpertisePage() {
  useDocumentTitle("Expertise — Otipu");

  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Technology chosen for the system, not for the slide."
        copy="We work across frontend, backend, mobile, cloud, data, APIs, automation, security and design systems. Expand a category to see the technologies behind it."
      />
      <Expertise hideHeader />
      <Credibility />
      <Cta />
    </>
  );
}
