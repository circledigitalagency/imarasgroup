import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { site } from "~/lib/data";

export const meta: MetaFunction = () => {
  return [
    { title: "Infrastructure & Project Delivery Services | IMARA Project Services South Africa" },
    {
      name: "description",
      content:
        "IMARA Project Services provides infrastructure project delivery, construction supervision, and asset lifecycle services across South Africa, supporting renovations, housing development, and long-term facilities management.",
    }
  ];
};

export default function Index() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden glass p-8 md:p-12 md:mt-8 h-[80vh] md:h-[60vh]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/public/hero-test.jpg')] bg-cover bg-center opacity-30" />
        </div>

        <div className="relative flex flex-col justify-center items-center w-full h-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-base text-white/80">
            Premium Infrastructure & Delivery
            <span className="h-1 w-1 rounded-full bg-brand-primary" />
            South Africa
          </div>

          <h1 className="mt-5 text-4xl md:text-7xl font-semibold leading-[0.98] tracking-[-0.02em] text-center">
            Strength. Structure.
            <span className="text-brand-primary"> Sustainability.</span>
          </h1>

          <p className="mt-5 text-white/75 text-base md:text-xl max-w-3xl text-center">
            A multidisciplinary infrastructure, project delivery, and asset support partner focused on structured execution
            and long-term performance.
          </p>

          <div className="mt-8 flex md:flex-row flex-col gap-3">
            <Link to="/contact" className="btn-primary">Request a Call</Link>
            <Link to="/services" className="btn-ghost">View Services</Link>
          </div>
        </div>
      </section>
      <section className="space-y-6 py-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Our Approach</h2>
          <div className="hidden md:block text-sm text-white/60">Clear planning → disciplined execution → sustainable support</div>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {site.approach.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group glass p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="mt-4 text-lg font-semibold tracking-tight">
                  {p.title}
                </div>

                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {p.desc}
                </p>

                {/* subtle divider */}
                <div className="mt-4 h-px w-10 bg-gold-500/50 opacity-60 group-hover:opacity-100 transition" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-6 py-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Services</h2>
          <Link to="/services" className="text-sm text-gold-400 hover:text-gold-200">
            View all →
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {site.services.map((s) => {
            const Icon = s.icon;

            return (
              <Link
                key={s.title}
                to="/services"
                className="group glass overflow-hidden transition hover:-translate-y-1 hover:bg-white/10"
              >
                {/* Image header */}
                <div className="relative h-40 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-gold-400">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="text-lg font-semibold tracking-tight">{s.title}</div>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed mt-4">{s.summary}</p>

                  {/* Chips */}
                  {s.bestFor?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.bestFor.slice(0, 3).map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-gold-400">
                    Explore <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Trusted Experience</h2>
            <p className="mt-2 text-white/70 text-sm max-w-xl">
              A track record across corporate, philanthropic, and infrastructure environments.
            </p>
          </div>
          <Link to="/experience" className="btn-ghost">View All Experiences</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-12">
          {site.experience.highlightsContext.slice(0, 3).map((context, index) => (
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
        <div className="relative grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold"> Let’s structure your next project for success.</h3>
            <p className="mt-1 text-sm text-white/70">
              Whether it’s renovations, subsidised housing delivery, or long-term asset management,
              we bring disciplined execution, oversight, and accountability from planning to handover.
            </p>
          </div>

          <div className="mt-8 flex gap-4 justify-end h-fit">
            <a href="/contact" className="btn-primary">
              Request a Consultation
            </a>

            <a
              href="/experience"
              className="btn-ghost"
            >
              View Our Experience
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
