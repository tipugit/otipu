import { Hero } from "../components/sections/Hero";
import { Trust } from "../components/sections/Trust";
import { Services } from "../components/sections/Services";
import { Growth } from "../components/sections/Growth";
import { FeaturedErp } from "../components/sections/FeaturedErp";
import { Solutions } from "../components/sections/Solutions";
import { Industries } from "../components/sections/Industries";
import { Process } from "../components/sections/Process";
import { WhyOtipu } from "../components/sections/WhyOtipu";
import { Expertise } from "../components/sections/Expertise";
import { SelectedWork } from "../components/sections/SelectedWork";
import { Credibility } from "../components/sections/Credibility";
import { Cta } from "../components/sections/Cta";
import { useSEO } from "../lib/hooks";
import { SITE } from "../data/site";

export function HomePage() {
  useSEO({ title: "Otipu — Software Development & Digital Solutions", description: SITE.description });

  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Solutions />
      <FeaturedErp />
      <Growth />
      <WhyOtipu />
      <Industries />
      <Process />
      <Expertise />
      <SelectedWork />
      <Credibility />
      <Cta />
    </>
  );
}
