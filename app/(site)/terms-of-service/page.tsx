import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms that govern your use of the My Portfolio website, digital products, and related services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

const SECTIONS = [
  {
    title: "Acceptance of terms",
    body: [
      "By accessing or using the My Portfolio website, contacting our team, or purchasing any product or service from us, you agree to be bound by these Terms of Service.",
      "If you do not agree with these terms, you should not use the website or our services.",
    ],
  },
  {
    title: "Services",
    body: [
      "My Portfolio provides portfolio-related digital products and services, which may include website templates, custom portfolio builds, design support, consultations, and related offerings.",
      "We reserve the right to modify, suspend, or discontinue any part of our offerings at any time.",
    ],
  },
  {
    title: "Orders and payments",
    body: [
      "When you place an order or engage our services, you agree to provide accurate and complete information. Pricing, deliverables, turnaround times, and payment terms may vary depending on the selected package or custom scope.",
      "Unless otherwise stated in writing, fees paid for digital products, custom work, or service retainers are non-refundable once work has started or deliverables have been shared.",
    ],
  },
  {
    title: "Client responsibilities",
    body: [
      "You are responsible for providing the materials, approvals, feedback, and information required for us to complete your project. Delays in communication or missing assets may affect timelines.",
      "You confirm that any text, images, branding, or other materials you provide do not infringe the rights of any third party.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "All content on this website, including branding, copy, graphics, layouts, code, and design elements, remains the property of My Portfolio or its licensors unless otherwise stated.",
      "For custom client work, ownership and usage rights will follow the written agreement or package terms shared with the client. Until full payment is received, we retain all rights in the work produced.",
    ],
  },
  {
    title: "Permitted use",
    body: [
      "You may use this website only for lawful purposes. You agree not to misuse the site, interfere with its operation, attempt unauthorized access, copy protected content without permission, or use our materials in ways that violate applicable laws.",
    ],
  },
  {
    title: "Third-party tools and links",
    body: [
      "Our website and services may reference or connect to third-party tools, platforms, or services such as WhatsApp, Instagram, payment providers, hosting platforms, and analytics tools.",
      "We are not responsible for the availability, content, or policies of third-party services.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, My Portfolio will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services.",
      "Our total liability for any claim related to our services will not exceed the amount you paid us for the specific product or service giving rise to the claim.",
    ],
  },
  {
    title: "No guarantees",
    body: [
      "We aim to provide high-quality work and reliable service, but we do not guarantee specific business outcomes such as increased traffic, leads, sales, interviews, or job offers unless explicitly agreed in writing.",
    ],
  },
  {
    title: "Termination",
    body: [
      "We may suspend or terminate access to the website or our services if we reasonably believe there has been a breach of these terms, non-payment, misuse, or conduct that may harm our business or others.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "We may update these Terms of Service from time to time. Continued use of the website or our services after updates are posted means you accept the revised terms.",
    ],
  },
];

export default function TermsOfServicePage() {
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
              Terms of <span className="italic text-brand">Service</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-lg">
              These terms explain the rules for using our website and working
              with My Portfolio on templates, digital products, and custom
              portfolio services.
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
                Please read these Terms of Service carefully before using the
                website or purchasing services from My Portfolio.
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
                If you have any questions about these Terms of Service, please
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
