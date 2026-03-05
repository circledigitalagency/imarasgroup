import { Link, NavLink, useLocation } from "@remix-run/react";
import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // close on route change
    useEffect(() => setOpen(false), [location.pathname]);

    // lock body scroll while open + ESC to close
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        if (open) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", onKeyDown);
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50 backdrop-blur">
            <div className="mx-auto container pt-6">
                <div className="px-4 py-3">
                    <div className="px-4 py-3">
                        <div className="flex items-center justify-between gap-4">
                            <Link to="/" className="flex items-center gap-3">
                                <img src="/logo.svg" className="w-8" alt="IMARA Project Services logo" />
                                <div className="leading-tight">
                                    <div className="text-base font-semibold tracking-wide">IMARA</div>
                                    <div className="text-sm text-white/70">Project Services</div>
                                </div>
                            </Link>

                            {/* Desktop nav */}
                            <nav className="hidden md:flex items-center gap-1">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        className={({ isActive }) =>
                                            [
                                                "rounded-xl px-4 py-2 text-sm transition",
                                                isActive
                                                    ? "bg-white/10 border border-white/10"
                                                    : "text-white/80 hover:bg-white/5",
                                            ].join(" ")
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </nav>

                            <div className="flex items-center gap-2">
                                <Link to="/contact" className="btn-primary hidden md:inline-flex">
                                    Request a Call
                                </Link>

                                {/* Mobile button */}
                                <button
                                    type="button"
                                    className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                                    aria-label="Open menu"
                                    aria-expanded={open}
                                    onClick={() => setOpen(true)}
                                >
                                    <Menu className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div
                className={[
                    "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                ].join(" ")}
                onClick={() => setOpen(false)}
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
            </div>

            {/* Drawer */}
            <aside
                className={[
                    "fixed right-0 top-0 z-50 h-screen w-[85vw] max-w-sm md:hidden",
                    "transform transition-transform duration-300",
                    open ? "translate-x-0" : "translate-x-full",
                ].join(" ")}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                <div className="h-full bg-gradient-to-b from-base-900 via-base-850 to-base-950  rounded-none border-l border-white/10">
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <img src="/logo.svg" className="w-7" alt="IMARA Project Services logo" />
                            <div className="leading-tight">
                                <div className="text-sm font-semibold tracking-wide">IMARA Project Services</div>
                                <div className="text-xs text-white/60">Navigation</div>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="p-4">
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        [
                                            "rounded-2xl px-4 py-3 text-sm transition border",
                                            isActive
                                                ? "bg-white/10 border-white/15 text-white"
                                                : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10",
                                        ].join(" ")
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="mt-4">
                            <Link
                                to="/contact"
                                className="btn-primary w-full justify-center"
                                onClick={() => setOpen(false)}
                            >
                                Request a Call
                            </Link>
                        </div>

                        {/* Optional quick contact */}
                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-xs uppercase tracking-wide text-gold-400">Direct contact</p>
                            <div className="mt-3 space-y-2 text-sm text-white/75">
                                <a className="block hover:text-white" href="mailto:info@imaraps.co.za">
                                    info@imaraps.co.za
                                </a>
                                <a className="block hover:text-white" href="tel:0837848001">
                                    083 784 8001
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </header>
    );
}