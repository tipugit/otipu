import { SITE } from "../data/site";
import { PageHero } from "../components/ui";
import { useDocumentTitle } from "../lib/hooks";

export function PrivacyPage() {
  useDocumentTitle("Privacy Policy — Otipu");

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        copy="This page describes how Otipu handles information you send us through this website."
      />
      <section className="pb-20">
        <div className="container-wide max-w-3xl space-y-6 text-muted-foreground font-body leading-relaxed">
          <p>
            If you contact us through the form or by email, we use the details you provide — typically
            your name, email address, company and project description — to respond to the inquiry.
          </p>
          <p>
            We do not sell that information. We do not publish it. We keep it only as long as it is
            useful for the conversation you started.
          </p>
          <p>
            This website may collect basic technical logs from hosting infrastructure (such as IP
            address and request time) as part of operating the site securely.
          </p>
          <p>
            Questions about privacy can be sent to{" "}
            <a className="text-primary" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

export function TermsPage() {
  useDocumentTitle("Terms of Service — Otipu");

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        copy="This website describes services Otipu can provide. A project begins only when both parties agree in writing."
      />
      <section className="pb-20">
        <div className="container-wide max-w-3xl space-y-6 text-muted-foreground font-body leading-relaxed">
          <p>
            Content on this site is for general information. It is not a proposal, a price, or a
            commitment to take on a particular engagement.
          </p>
          <p>
            Work is performed under a separate agreement that defines scope, commercial terms and
            responsibilities. Until that agreement exists, neither party is obligated beyond a
            conversation.
          </p>
          <p>
            The site and its contents are provided by {SITE.legalName}. If you have questions, write
            to{" "}
            <a className="text-primary" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
