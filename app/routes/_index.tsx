import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { CTASection } from "~/components/cta-section";
import { Footer } from "~/components/footer";
import MainLayout from "~/components/main-layout";
import SectionHeading from "~/components/section-heading";
import { Hero } from "~/components/ui/hero";
import { ServiceCard } from "~/components/ui/service-card";
import { Steps } from "~/components/ui/steps";
import { site } from "~/lib/data";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="py-10 md:py-14">
      <Hero
        title={site.name}
        tagline={site.tagline}
        description={site.description}
        primaryCta={site.ctas.primary}
        secondaryCta={site.ctas.secondary}
      />

      <section className="py-16">
        <SectionHeading eyebrow="Services" title="What we do">
          We provide structured delivery across infrastructure, facilities, property,
          and asset lifecycle support—built for reliability and long-term value.
        </SectionHeading>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {site.services.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              summary={s.summary}
              bullets={s.bullets}
            />
          ))}
        </div>
      </section>

      <section className="py-16">
        <SectionHeading eyebrow="Value" title="Why IMARAS">
          {site.valueProposition}
        </SectionHeading>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white font-semibold">Vision</p>
              <p className="mt-2 text-white/75">{site.vision}</p>
            </div>
            <div>
              <p className="text-white font-semibold">Mission</p>
              <p className="mt-2 text-white/75">{site.mission}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <SectionHeading eyebrow="Approach" title="How we work">
          A structured workflow that supports precision delivery and sustainable outcomes.
        </SectionHeading>
        <div className="mt-8">
          <Steps items={site.approach} />
        </div>
      </section>

      <section className="py-16">
        <SectionHeading eyebrow="Experience" title="Trusted by organisations">
          A selection of references and engagements.
        </SectionHeading>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {site.experience.highlights.map((x) => (
            <div
              key={x}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80"
            >
              {x}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <CTASection
            title="Need structured delivery support?"
            body="Tell us what you’re building or managing, and we’ll propose a practical way forward."
            cta={site.ctas.primary}
          />
        </div>
      </section>
    </div>
  );
}
