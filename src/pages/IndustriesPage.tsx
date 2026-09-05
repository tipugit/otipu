import { Industries } from "../components/sections/Industries";
import { Cta } from "../components/sections/Cta";
import { PageHero } from "../components/ui";
import { useSEO } from "../lib/hooks";

const DESCRIPTION =
  "We do not claim regulated credentials we do not hold. We do build software for organizations whose work is specific — membership, logistics, commerce, professional services and more.";

export function IndustriesPage() {
  useSEO({ title: "Industries — Otipu", description: DESCRIPTION });

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="The same engineering standard, applied to different operations."
        copy={DESCRIPTION}
      />
      <Industries hideHeader />
      <Cta />
    </>
  );
}
