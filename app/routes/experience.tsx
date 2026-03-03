import { MetaFunction } from "@remix-run/react";
import SectionHeading from "~/components/section-heading";
import { site } from "~/lib/data";

export const meta: MetaFunction = () => {
    return [{ title: "Experience | IMARA PROJECT SERVICES" }];
};

export default function Experience() {
    return (
        <div>
            <SectionHeading eyebrow="Experience" title="A credible track record across corporate, philanthropic, and infrastructure environments.">

            </SectionHeading>

            <section className="py-14">
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {site.experience.highlightsContext.map((context, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-soft transition hover:-translate-y-1 hover:bg-white/10"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={context.image}
                                    alt={context.name}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                {/* Overlay */}

                                {context.tag && (
                                    <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1 text-xs text-white/80">
                                        {context.tag}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="relative p-6">
                                <h3 className="text-lg font-semibold tracking-tight">
                                    {context.name}
                                </h3>

                                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                                    {context.description}
                                </p>

                                <div className="mt-4 h-px w-12 bg-brand-primary" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="glass p-8 relative overflow-hidden py-14">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/images/experience.jpg')] bg-cover bg-center" />

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