import type { ReactNode } from "react";
import { SITE } from "../data/site";
import { PageHero, Reveal } from "../components/ui";
import { useSEO } from "../lib/hooks";

const LAST_UPDATED = "September 4, 2026";

type Block =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "callout"; text: string };

type LegalSection = {
  id: string;
  title: string;
  blocks: Block[];
};

function p(text: string): Block {
  return { kind: "p", text };
}
function h3(text: string): Block {
  return { kind: "h3", text };
}
function ul(items: string[]): Block {
  return { kind: "ul", items };
}
function callout(text: string): Block {
  return { kind: "callout", text };
}

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    blocks: [
      p(
        `This Privacy Policy explains how ${SITE.legalName} ("Otipu", "we", "us", or "our") handles information in connection with your use of the website at ${SITE.domain} (the "Site"). It does not apply to information handled under a separate signed client agreement or statement of work, which is governed by the terms of that agreement.`
      ),
      p("By using the Site, you agree to the practices described in this Policy. If you do not agree, please do not use the Site."),
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    blocks: [
      h3("Information you provide"),
      p(
        `The Site's contact form asks for your name, email address, company, project type and message. Submitting it opens a pre-filled email in your own email application, addressed to ${SITE.email}. That email is sent from your own account, through your own email provider — Otipu does not receive, store or process this information on its own servers unless and until you choose to send the email.`
      ),
      p("If you email us directly, we receive and store that correspondence in our email system for as long as reasonably necessary to respond to and document the conversation."),
      h3("Information collected automatically"),
      p(
        "Like most websites, the Site is served through hosting infrastructure that may automatically log standard technical information for security, performance and diagnostic purposes — including IP address, browser and device type, referring page, pages requested, and timestamps. This is aggregate server-log data and is not used to build a profile of you."
      ),
      h3("Cookies and tracking technologies"),
      p(
        "This Site does not currently set tracking or advertising cookies and does not currently use third-party analytics scripts. If that changes — for example, if analytics, chat or advertising tools are added — this Policy will be updated to describe what is collected and how to control it before those technologies go live."
      ),
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Information",
    blocks: [
      ul([
        "Respond to inquiries and evaluate potential projects",
        "Operate, secure and maintain the Site",
        "Communicate with you about a project you have contacted us about",
        "Comply with legal obligations and enforce our Terms of Service",
      ]),
      p("We do not use information collected through the Site for automated decision-making or profiling, and we do not sell personal information."),
    ],
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing (EEA / UK Visitors)",
    blocks: [
      p(
        "If you are located in the European Economic Area or United Kingdom, we process personal information on the following legal bases under the GDPR: your consent (for example, sending us an inquiry), our legitimate interests in operating and securing the Site, and compliance with legal obligations. You may withdraw consent at any time by contacting us."
      ),
    ],
  },
  {
    id: "sharing",
    title: "How We Share Information",
    blocks: [
      p("We do not sell or rent personal information. We may share information with:"),
      ul([
        "Service providers who help operate the Site (for example, our hosting provider), under obligations to protect that information",
        "Professional advisors, such as legal or accounting, where necessary",
        "Authorities, if required by law or legal process, or to protect our rights, safety or property",
        "A successor entity, if Otipu is involved in a merger, acquisition or sale of assets",
      ]),
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    blocks: [
      p(
        "We retain correspondence and inquiry information for as long as reasonably necessary to respond to your inquiry, maintain business records, and comply with legal, accounting or reporting obligations, after which it is deleted or anonymized."
      ),
    ],
  },
  {
    id: "security",
    title: "Data Security",
    blocks: [
      p(
        "We use reasonable administrative and technical safeguards appropriate to a website of this kind, including HTTPS encryption in transit. No method of transmission or storage is completely secure, and we cannot guarantee absolute security."
      ),
    ],
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    blocks: [
      h3("If you are in the EEA or UK (GDPR)"),
      ul([
        "Access the personal information we hold about you",
        "Correct inaccurate or incomplete information",
        "Request erasure (“right to be forgotten”)",
        "Restrict or object to certain processing",
        "Receive your data in a portable format",
        "Withdraw consent at any time",
        "Lodge a complaint with your local data protection authority",
      ]),
      h3("If you are a California resident (CCPA / CPRA)"),
      ul([
        "Know what personal information we hold and how it is used",
        "Request deletion of your personal information",
        "Correct inaccurate personal information",
        "Opt out of the sale or sharing of personal information — we do not sell or share personal information for cross-context behavioral advertising",
        "Not be discriminated against for exercising these rights",
      ]),
      p(`To exercise any of these rights, contact us at ${SITE.email}. We may need to verify your identity before completing certain requests.`),
    ],
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    blocks: [
      p(
        "Otipu is based in [Your Country]. If you contact us from outside that country, your information may be transferred to, stored and processed there. By contacting us, you consent to this transfer."
      ),
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    blocks: [
      p(
        "The Site is not directed to children under 16, and we do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will delete it."
      ),
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    blocks: [
      p(
        "The Site may link to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies before providing information to them."
      ),
    ],
  },
  {
    id: "do-not-track",
    title: "Do Not Track Signals",
    blocks: [
      p(
        "Some browsers offer a “Do Not Track” signal. Because there is no common industry standard for responding to these signals, the Site does not currently respond to them differently."
      ),
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    blocks: [
      p(
        "We may update this Privacy Policy from time to time. The “Last updated” date below reflects the most recent revision. Continued use of the Site after changes take effect means you accept the updated Policy."
      ),
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    blocks: [
      p(`Questions about this Privacy Policy can be sent to ${SITE.email}.`),
      p(`${SITE.legalName} — ${SITE.domain}`),
    ],
  },
];

const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    blocks: [
      p(
        `These Terms of Service ("Terms") govern your access to and use of ${SITE.domain} (the "Site"), operated by ${SITE.legalName} ("Otipu", "we", "us", "our"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, do not use the Site.`
      ),
    ],
  },
  {
    id: "informational-only",
    title: "The Site Is Informational",
    blocks: [
      p(
        "The Site describes services Otipu can provide. Nothing on the Site is an offer capable of acceptance, a price quote, a guarantee of availability, or a binding commitment to perform work. A project begins only once both parties sign a separate written agreement — such as a proposal, statement of work, or master services agreement — setting out scope, deliverables, fees, timeline and other commercial terms. If anything in these Terms conflicts with a signed project agreement, the signed agreement controls for that engagement."
      ),
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    blocks: [
      p("You must be at least 18 years old, or the age of legal majority in your jurisdiction, and have the legal capacity to enter into these Terms, to use the Site."),
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    blocks: [
      p("You agree not to:"),
      ul([
        "Use the Site for any unlawful purpose or in violation of these Terms",
        "Attempt to gain unauthorized access to the Site or related systems and networks",
        "Interfere with or disrupt the Site, including through malware, denial-of-service activity, or excessive automated requests",
        "Scrape, harvest or systematically extract content from the Site without our prior written consent",
        "Reverse engineer, decompile or attempt to derive source code from the Site, except where applicable law expressly permits it",
        "Impersonate any person or entity, or misrepresent your affiliation with one",
        "Upload or transmit anything through the Site that infringes another's rights or contains malicious code",
      ]),
      p("We may suspend or restrict access to the Site for anyone we reasonably believe has violated these Terms."),
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    blocks: [
      p(
        `The Site — including its text, graphics, logos, the Otipu name and mark, design, layout and underlying code — is owned by ${SITE.legalName} or its licensors and protected by copyright, trademark and other intellectual property laws. Except where expressly permitted (for example, viewing the Site in your browser for personal, non-commercial reference), you may not copy, modify, distribute, publicly display or create derivative works from any part of the Site without our prior written permission.`
      ),
      p('"Otipu" and the Otipu logo are trademarks of ' + SITE.legalName + ". All other trademarks appearing on the Site are the property of their respective owners."),
    ],
  },
  {
    id: "submissions",
    title: "Inquiries and Submissions",
    blocks: [
      p(
        "When you contact us through the Site's form or by email, you grant us permission to use that information to respond to you and evaluate your inquiry. Please do not send confidential, sensitive or proprietary information through the contact form — it is transmitted through your own email client and is not encrypted or secured by Otipu in transit. Confidential information should only be exchanged once a signed agreement, such as a mutual non-disclosure agreement, is in place."
      ),
      p("You are responsible for the accuracy of information you submit and confirm you have the right to share it with us."),
    ],
  },
  {
    id: "no-professional-advice",
    title: "No Professional or Technical Advice",
    blocks: [
      p(
        "Content on the Site — including service descriptions, process explanations, and any articles or insights — is provided for general informational purposes only. It is not technical, legal, financial or professional advice, and should not be relied on as a substitute for an assessment tailored to your specific situation."
      ),
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Links and Services",
    blocks: [
      p(
        "The Site may link to third-party websites or services that are not owned or controlled by Otipu. We have no control over, and assume no responsibility for, the content, privacy policies or practices of any third-party site. Accessing linked sites is at your own risk."
      ),
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    blocks: [
      callout(
        'THE SITE AND ITS CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE OR SECURE, OR THAT ANY INFORMATION ON THE SITE IS ACCURATE, COMPLETE OR CURRENT.'
      ),
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    blocks: [
      callout(
        `TO THE FULLEST EXTENT PERMITTED BY LAW, ${SITE.legalName.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF, OR INABILITY TO USE, THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR YOUR USE OF THE SITE WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (USD $100). THIS SECTION DOES NOT APPLY TO A SEPARATE SIGNED PROJECT AGREEMENT, WHICH GOVERNS LIABILITY FOR THAT ENGAGEMENT SEPARATELY, AND DOES NOT LIMIT ANY LIABILITY THAT CANNOT BE LIMITED UNDER APPLICABLE LAW.`
      ),
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    blocks: [
      p(
        `You agree to indemnify, defend and hold harmless ${SITE.legalName}, its officers, employees and agents from and against any claims, liabilities, damages, losses and expenses (including reasonable legal fees) arising out of or related to your violation of these Terms, your misuse of the Site, or your violation of the rights of a third party.`
      ),
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Disputes",
    blocks: [
      p(
        "These Terms are governed by the laws of [Your State / Country], without regard to its conflict-of-laws principles. Any dispute arising from these Terms or your use of the Site is subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction], and you consent to that jurisdiction and venue."
      ),
    ],
  },
  {
    id: "termination",
    title: "Termination",
    blocks: [
      p(
        "We may suspend or terminate your access to the Site at any time, without notice, for conduct we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason at our discretion."
      ),
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    blocks: [
      p(
        "We may revise these Terms at any time by updating this page. The “Last updated” date below reflects the most recent revision. Continuing to use the Site after changes take effect means you accept the revised Terms."
      ),
    ],
  },
  {
    id: "severability",
    title: "Severability and Entire Agreement",
    blocks: [
      p(
        "If any provision of these Terms is found unenforceable, the remaining provisions remain in full force and effect. These Terms, together with our Privacy Policy, constitute the entire agreement between you and Otipu regarding use of the Site, and supersede any prior agreement regarding the Site — but not any separate signed project agreement."
      ),
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    blocks: [p(`Questions about these Terms can be sent to ${SITE.email}.`), p(`${SITE.legalName} — ${SITE.domain}`)],
  },
];

function LegalDocument({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-wide">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-12 pb-8 border-b border-border">
            <span className="text-xs font-mono-label uppercase tracking-widest text-muted-foreground">
              Last updated {LAST_UPDATED}
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[15rem_1fr] gap-12 xl:gap-16">
          <nav
            aria-label="Table of contents"
            className="hidden lg:block sticky top-28 self-start max-h-[calc(100dvh-8rem)] overflow-y-auto scrollbar-none"
          >
            <p className="text-[11px] font-mono-label uppercase tracking-[0.18em] text-muted-foreground/70 mb-4">
              On this page
            </p>
            <ul className="space-y-1 border-l border-border">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block -ml-px pl-4 py-1.5 border-l text-[13px] font-body text-muted-foreground hover:text-primary hover:border-primary border-transparent transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 prose-measure max-w-none">
            {sections.map((s, i) => (
              <Reveal key={s.id} delay={Math.min(i * 0.02, 0.15)}>
                <article id={s.id} className={i > 0 ? "mt-12 pt-12 border-t border-border" : ""}>
                  <h2 className="font-display text-xl sm:text-[1.4rem] font-bold tracking-tight mb-4">
                    {s.title}
                  </h2>
                  <div className="space-y-4">
                    {s.blocks.map((b, bi) => (
                      <LegalBlock key={bi} block={b} />
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal>
              <p className="mt-14 pt-8 border-t border-border text-sm text-muted-foreground font-body leading-relaxed">
                This page is a general template and is provided for informational purposes — it is not a
                substitute for advice from a licensed attorney about your specific business and
                jurisdiction. Review it (including the bracketed placeholders above) with legal counsel
                before relying on it.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalBlock({ block }: { block: Block }): ReactNode {
  if (block.kind === "h3") {
    return <h3 className="font-display font-bold text-[0.98rem] pt-1">{block.text}</h3>;
  }
  if (block.kind === "ul") {
    return (
      <ul className="space-y-2.5">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-3 text-muted-foreground font-body leading-relaxed">
            <span className="mt-2.5 h-1 w-1 rounded-full bg-primary shrink-0" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.kind === "callout") {
    return (
      <p className="rounded-2xl border border-border bg-muted/60 p-5 text-[13px] text-foreground/80 font-body leading-[1.75] tracking-wide">
        {block.text}
      </p>
    );
  }
  return <p className="text-muted-foreground font-body leading-relaxed">{block.text}</p>;
}

export function PrivacyPage() {
  useSEO({
    title: "Privacy Policy — Otipu",
    description: "How Otipu collects, uses and protects information in connection with this website.",
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        copy="How Otipu collects, uses and protects information in connection with this website."
      />
      <LegalDocument sections={PRIVACY_SECTIONS} />
    </>
  );
}

export function TermsPage() {
  useSEO({
    title: "Terms of Service — Otipu",
    description: "The rules that govern your use of this website. Actual project work is governed by a separate signed agreement.",
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        copy="The rules that govern your use of this website. Actual project work is governed by a separate signed agreement."
      />
      <LegalDocument sections={TERMS_SECTIONS} />
    </>
  );
}
