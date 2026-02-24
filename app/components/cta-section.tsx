import { Link } from "@remix-run/react";

export function CTASection({
    title,
    body,
    cta,
}: {
    title: string;
    body: string;
    cta: { label: string; href: string };
}) {
    return (
        <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 md:p-10">
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-3 max-w-2xl text-white/75">{body}</p>
            <div className="mt-6">
                <Link
                    to={cta.href}
                    className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-6 py-3 font-medium text-slate-950 hover:bg-amber-300 transition"
                >
                    {cta.label}
                </Link>
            </div>
        </section>
    );
}