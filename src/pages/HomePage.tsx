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
import { useDocumentTitle } from "../lib/hooks";

export function HomePage() {
  useDocumentTitle("Otipu — Software Development & Digital Solutions");

  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Growth />
      <FeaturedErp />
      <Solutions />
      <Industries />
      <Process />
      <WhyOtipu />
      <Expertise />
      <SelectedWork />
      <Credibility />
      <Cta />
    </>
  );
}
