import { Industries } from "../components/sections/Industries";
import { Cta } from "../components/sections/Cta";
import { PageHero } from "../components/ui";
import { useDocumentTitle } from "../lib/hooks";

export function IndustriesPage() {
  useDocumentTitle("Industries — Otipu");

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="The same engineering standard, applied to different operations."
        copy="We do not claim regulated credentials we do not hold. We do build software for organizations whose work is specific — membership, logistics, commerce, professional services and more."
      />
      <Industries hideHeader />
      <Cta />
    </>
  );
}
