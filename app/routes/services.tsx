import { CTASection } from "~/components/cta-section";
import SectionHeading from "~/components/section-heading";
import { ServiceCard } from "~/components/ui/service-card";
import { site } from "~/lib/data";


export default function Services() {
    return (
        <div className="py-12 md:py-16">
            <SectionHeading eyebrow="Services" title="Structured solutions across delivery and operations">
                Four core service lines designed to support planning, execution, and long-term performance.
            </SectionHeading>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {site.services.map((s) => (
                    <ServiceCard
                        key={s.title}
                        title={s.title}
                        summary={s.summary}
                        bullets={s.bullets}
                    />
                ))}
            </div>

            <div className="mt-12">
                <CTASection
                    title="Request a call"
                    body="Share your requirements and timelines, and we’ll respond with a clear next step."
                    cta={site.ctas.primary}
                />
            </div>
        </div>
    );
}