import { CTASection } from "~/components/cta-section";
import SectionHeading from "~/components/section-heading";
import { site } from "~/lib/data";


export default function Experience() {
    return (
        <div className="py-12 md:py-16">
            <SectionHeading eyebrow="Experience" title="References & engagements">
                Experience across a range of organisations and delivery contexts.
            </SectionHeading>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {site.experience.highlights.map((x) => (
                    <div
                        key={x}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80"
                    >
                        {x}
                    </div>
                ))}
            </div>

            <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-white font-semibold">Subcontract & delivery support</p>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {site.experience.subcontracts.map((s) => (
                        <li key={s} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-300" />
                            <span>{s}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-12">
                <CTASection
                    title="Let’s discuss your scope"
                    body="We’ll help you define the right delivery approach and operational support—without overcomplicating it."
                    cta={site.ctas.primary}
                />
            </div>
        </div>
    );
}