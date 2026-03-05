import { MetaFunction } from "@remix-run/react";
import { CTASection } from "~/components/cta-section";
import SectionHeading from "~/components/section-heading";
import { ServiceCard } from "~/components/ui/service-card";
import { site } from "~/lib/data";

export const meta: MetaFunction = () => {
    return [{ title: "Infrastructure, Facilities & Property Management Services | IMARA Project Services" },
    {
        name: "description",
        content:
            "Explore IMARA project services including infrastructure delivery, facilities maintenance, property management, and asset lifecycle solutions.",
    },];
};

export default function Services() {
    return (
        <div>
            <SectionHeading eyebrow="Services" title="Structured solutions across delivery and operations">
                Four core service lines designed to support planning, execution, and long-term performance.
            </SectionHeading>

            {/* Service Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-14">
                {site.services.map((s) => {
                    const Icon = s.icon;
                    return (
                        <div
                            key={s.title}
                            className="group glass overflow-hidden transition hover:-translate-y-1 hover:bg-white/10"
                        >
                            {/* image header */}
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${s.image})` }}
                                />

                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-gold-400">
                                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-semibold">{s.title}</h3>
                                </div>

                                {s.bestFor?.length ? (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {s.bestFor.map((chip) => (
                                            <span
                                                key={chip}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                                            >
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}

                                <ul className="mt-5 space-y-2 text-sm text-white/75">
                                    {s.bullets.map((b) => (
                                        <li key={b} className="flex gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500/80" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-5 h-px w-12 bg-gold-500/50 opacity-60 group-hover:opacity-100 transition" />
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* CTA (your existing one is good) */}
            <section className="glass p-8 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/images/experience.jpg')] bg-cover bg-center opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-base-900/85 via-base-900/55 to-transparent" />
                </div>

                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-semibold">Need project details?</h3>
                        <p className="mt-1 text-sm text-white/70">
                            We’ll share relevant references aligned to your scope.
                        </p>
                    </div>
                    <a href="/contact" className="btn-primary w-fit">Request a Call</a>
                </div>
            </section>
        </div>
    );
}