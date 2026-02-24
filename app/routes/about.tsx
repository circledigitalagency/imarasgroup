import SectionHeading from "~/components/section-heading";
import { site } from "~/lib/data";

export default function About() {
    return (
        <div className="py-12 md:py-16">
            <SectionHeading eyebrow="About" title="Built on strength and structure">
                {site.description}
            </SectionHeading>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                    <p className="text-white font-semibold">Vision</p>
                    <p className="mt-3 text-white/75 leading-relaxed">{site.vision}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                    <p className="text-white font-semibold">Mission</p>
                    <p className="mt-3 text-white/75 leading-relaxed">{site.mission}</p>
                </div>
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-white font-semibold">Value Proposition</p>
                <p className="mt-3 text-white/75 leading-relaxed">{site.valueProposition}</p>
            </div>

            <section className="mt-14">
                <SectionHeading eyebrow="Values" title="How we show up">
                    These are the principles that guide decisions, quality, and delivery.
                </SectionHeading>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {site.values.map((v) => (
                        <div
                            key={v.title}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6"
                        >
                            <p className="text-white font-semibold">{v.title}</p>
                            <p className="mt-2 text-sm text-white/75">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}