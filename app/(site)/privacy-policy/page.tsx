import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how My Portfolio collects, uses, and protects personal information when you browse the site or contact our team.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const SECTIONS = [
  {
    title: "Information we collect",
    body: [
      "We may collect personal details you choose to share with us, such as your name, email address, phone number, and project information when you submit a contact form, send us an email, or reach out on WhatsApp.",
      "We may also collect basic technical information like browser type, device information, pages visited, and referring source to help us understand site usage and improve performance.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use the information you provide to respond to enquiries, discuss projects, deliver services, send important updates, and improve the quality of our website and customer experience.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "Our website may use cookies, analytics tools, and similar technologies to understand visitor behavior, measure marketing performance, and improve site functionality.",
      "You can control or disable cookies through your browser settings, though some parts of the site may not work as expected afterward.",
    ],
  },
  {
    title: "Sharing your information",
    body: [
      "We may share information with trusted service providers who help us operate the website, process enquiries, host content, or support business operations. These providers are only given access when reasonably necessary.",
      "We may also disclose information if required by law or when necessary to protect our rights, users, or business.",
    ],
  },
  {
    title: "Data retention",
    body: [
      "We keep personal information only for as long as it is reasonably necessary to fulfil the purpose it was collected for, including responding to enquiries, providing services, maintaining records, and meeting legal obligations.",
    ],
  },
  {
    title: "Data security",
    body: [
      "We take reasonable administrative, technical, and organizational measures to protect your information. However, no internet transmission or storage method can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Depending on your location, you may have rights to request access to, correction of, or deletion of your personal data. To make a request, contact us using the details below.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "Our website may link to third-party platforms such as Instagram or WhatsApp. We are not responsible for the privacy practices or content of those external services.",
    ],
  },
  {
    title: "Policy updates",
    body: [
      "We may update this Privacy Policy from time to time to reflect business, legal, or website changes. The latest version will always be posted on this page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-canvas-bg">
        <section className="relative overflow-hidden border-b border-ink/8 px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-36 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-brand/8 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-brand/50" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand sm:text-xs">
                Legal
              </p>
              <span className="h-px w-6 bg-brand/50" aria-hidden="true" />
            </div>

            <h1 className="mb-4 font-serif text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-[3.5rem]">
              Privacy <span className="italic text-brand">Policy</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-lg">
              This page explains what information we collect, how we use it, and
              the choices you have when interacting with My Portfolio.
            </p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft/80">
              Last updated: June 11, 2026
            </p>
          </div>
        </section>

        <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-ink/8 bg-white p-6 shadow-[0_20px_70px_-40px_rgba(0,119,181,0.35)] sm:p-8 lg:p-10">
            <div className="prose-article max-w-none">
              <p>
                My Portfolio respects your privacy and is committed to
                protecting the personal information you share with us through
                this website and related communication channels.
              </p>

              {SECTIONS.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <h2>Contact us</h2>
              <p>
                If you have questions about this Privacy Policy or would like to
                request an update or deletion of your information, please
                contact us at{" "}
                <a
                  href="mailto:info@myportfoliowebsite.com"
                  className="font-semibold text-brand underline decoration-brand/30 underline-offset-4"
                >
                  info@myportfoliowebsite.com
                </a>{" "}
                or via{" "}
                <a
                  href="https://wa.me/971568450406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand underline decoration-brand/30 underline-offset-4"
                >
                  WhatsApp
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
