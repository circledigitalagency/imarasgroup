import { MetaFunction } from "@remix-run/react";
import SectionHeading from "~/components/section-heading";
import { site } from "~/lib/data";

export const meta: MetaFunction = () => {
    return [{ title: "About IMARA Project Services | Infrastructure & Project Delivery Specialists" },
    {
        name: "description",
        content:
            "Learn about IMARA Project Services, a project services company delivering infrastructure support, construction oversight, and asset lifecycle solutions.",
    },];
};

export default function About() {
    return (
        <div className="space-y-14">
            <section className="relative overflow-hidden glass p-8 md:p-12 mt-8">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/about-site.jpg')] bg-cover bg-center opacity-25" />
                </div>

                <div className="relative max-w-2xl">
                    <div>
                        <SectionHeading eyebrow="About" title="Built on strength and structure">
                            {site.description}
                        </SectionHeading>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80">
                                Structured Delivery
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80">
                                Execution Oversight
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80">
                                Long-term Performance
                            </span>
                        </div>
                    </div>
                </div>
            </section>


            {/* Vision & Mission */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gold-500/60" />
                    <p className="text-xs uppercase tracking-wide text-gold-400">Vision</p>
                    <p className="mt-4 text-lg font-medium text-white leading-snug">
                        {site.vision}
                    </p>
                </div>

                <div className="glass p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gold-500/60" />
                    <p className="text-xs uppercase tracking-wide text-gold-400">Mission</p>
                    <p className="mt-4 text-lg font-medium text-white leading-snug">
                        {site.mission}
                    </p>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="glass p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-transparent to-transparent" />
                <p className="text-xs uppercase tracking-wide text-gold-400">
                    Value Proposition
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    What clients can expect when working with IMARA Project Services
                </h3>

                <p className="mt-4 max-w-3xl text-white/80 leading-relaxed">
                    {site.valueProposition}
                </p>
            </section>

            {/* Values */}
            <section className="space-y-8">
                <SectionHeading eyebrow="Values" title="How we show up">
                    These principles guide how we plan, execute, and take responsibility.
                </SectionHeading>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {site.values.map((v) => {
                        const Icon = v.icon;

                        return (
                            <div
                                key={v.title}
                                className="group glass p-6 transition hover:-translate-y-1 hover:bg-white/10"
                            >
                                {/* Icon */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400">
                                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <p className="mt-4 text-lg font-semibold tracking-tight text-white">
                                    {v.title}
                                </p>

                                {/* Description */}
                                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                                    {v.desc}
                                </p>

                                {/* Subtle divider */}
                                <div className="mt-4 h-px w-10 bg-gold-500/50 opacity-60 group-hover:opacity-100 transition" />
                            </div>
                        );
                    })}
                </div>
            </section>
        </div >
    );
}