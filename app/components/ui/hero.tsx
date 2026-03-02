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
        <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
            {/* <img src="/hero.jpg" className="object-cover" /> */}
            <div className="absolute inset-0 bg-slate-950/20" />

            <div className="absolute z-10 mx-auto px-6 text-center">
                <p className="text-base font-semibold uppercase text-amber-300/90">
                    {tagline}
                </p>
                <h1 className="mt-4 text-6xl font-semibold text-white">
                    Building Infrastructure That Endures
                </h1>
                <p className="mt-5 max-w-5xl text-base md:text-xl text-white/80 text-center">
                    {description}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <Link
                        to={primaryCta.href}
                        className="inline-flex items-center justify-center bg-amber-400 px-6 py-3 font-medium text-slate-950 hover:bg-amber-300 transition"
                    >
                        {primaryCta.label}
                    </Link>
                    <Link
                        to={secondaryCta.href}
                        className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10 transition"
                    >
                        {secondaryCta.label}
                    </Link>
                </div>

                {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
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
                </div> */}
            </div>
        </section>
    );
}