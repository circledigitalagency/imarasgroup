import { Link } from "@remix-run/react";

export function Hero({
    title,
    tagline,
    description,
    primaryCta,
    secondaryCta,
}: {
    title: string;
    tagline: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
}) {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_50%),radial-gradient(circle_at_bottom,rgba(245,158,11,0.12),transparent_55%)]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
                <p className="text-sm uppercase tracking-widest text-amber-300/90">
                    {tagline}
                </p>
                <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-white">
                    {title}
                </h1>
                <p className="mt-5 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
                    {description}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                        to={primaryCta.href}
                        className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-6 py-3 font-medium text-slate-950 hover:bg-amber-300 transition"
                    >
                        {primaryCta.label}
                    </Link>
                    <Link
                        to={secondaryCta.href}
                        className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10 transition"
                    >
                        {secondaryCta.label}
                    </Link>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-white font-medium">Structured Delivery</p>
                        <p className="mt-1 text-white/70 text-sm">
                            Precision planning, disciplined execution.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-white font-medium">Operational Excellence</p>
                        <p className="mt-1 text-white/70 text-sm">
                            Reliable oversight across facilities and assets.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-white font-medium">Sustainable Value</p>
                        <p className="mt-1 text-white/70 text-sm">
                            Lifecycle thinking that protects long-term performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}