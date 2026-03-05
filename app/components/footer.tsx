import { Link } from "@remix-run/react";
import { site } from "~/lib/data";

export function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-base-950">
            {/* subtle top glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

            <div className="mx-auto container px-6 py-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img src="/logo.svg" className="w-9" alt="IMARA Project Services logo" />
                            <div>
                                <p className="text-sm font-semibold tracking-wide">
                                    {site.name}
                                </p>
                                <p className="text-xs text-white/60">
                                    {site.tagline}
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-xs">
                            Structured infrastructure, project delivery, and asset support
                            built on accountability and disciplined execution.
                        </p>

                        <a
                            href="/contact"
                            className="mt-6 inline-flex text-sm text-gold-400 hover:text-gold-200 transition"
                        >
                            Discuss Your Project →
                        </a>
                    </div>

                    {/* Company */}
                    <div>
                        <p className="text-xs uppercase tracking-wide text-gold-400">
                            Company
                        </p>

                        <ul className="mt-5 space-y-3 text-sm text-white/70">
                            <li>
                                <Link className="hover:text-white transition" to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition" to="/services">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition" to="/experience">
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-white transition" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-xs uppercase tracking-wide text-gold-400">
                            Contact
                        </p>

                        <ul className="mt-5 space-y-3 text-sm text-white/70">
                            <li>
                                <a
                                    className="hover:text-white transition"
                                    href={`mailto:${site.contact.email}`}
                                >
                                    {site.contact.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-white transition"
                                    href={`tel:${site.contact.phone}`}
                                >
                                    {site.contact.phone}
                                </a>
                            </li>
                            {site.contact.addressLine && (
                                <>
                                    <li>{site.contact.addressLine[0]}</li>
                                    <li>{site.contact.addressLine[site.contact.addressLine.length - 1]}</li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Credentials */}
                    <div>
                        <p className="text-xs uppercase tracking-wide text-gold-400">
                            Registration
                        </p>

                        <p className="mt-5 text-sm text-white/70 leading-relaxed">
                            {site.contact.regNumber}
                        </p>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="mt-4 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/50">
                        © {new Date().getFullYear()} {site.name}. All rights reserved.
                    </p>

                    <p className="text-xs text-white/40">
                        Built with structure and accountability.
                    </p>
                </div>
            </div>
        </footer>
    );
}