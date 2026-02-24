import { NavLink, Link } from "@remix-run/react";
import { site } from "~/lib/data";

const nav = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center space-x-3">
                        <img src="/logo.svg" className="w-8" />
                        <Link to="/" className="flex flex-col leading-tight">
                            <span className="text-white font-semibold tracking-wide">
                                {site.name}
                            </span>
                            <span className="text-xs text-white/60">{site.tagline}</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        {nav.map((n) => (
                            <NavLink
                                key={n.to}
                                to={n.to}
                                end={n.end}
                                className={({ isActive }) =>
                                    `text-sm ${isActive ? "text-white" : "text-white/70 hover:text-white"
                                    } transition`
                                }
                            >
                                {n.label}
                            </NavLink>
                        ))}
                    </nav>

                    <Link
                        to={site.ctas.primary.href}
                        className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-amber-300 transition"
                    >
                        {site.ctas.primary.label}
                    </Link>
                </div>
            </div>
        </header>
    );
}