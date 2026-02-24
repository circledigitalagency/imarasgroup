import { Link } from "@remix-run/react";
import { site } from "~/lib/data";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-950">
            <div className="mx-auto max-w-6xl px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <p className="text-white font-semibold">{site.name}</p>
                        <p className="mt-2 text-sm text-white/70">{site.description}</p>
                    </div>

                    <div>
                        <p className="text-white font-semibold">Company</p>
                        <ul className="mt-3 space-y-2 text-sm text-white/70">
                            <li><Link className="hover:text-white" to="/about">About</Link></li>
                            <li><Link className="hover:text-white" to="/services">Services</Link></li>
                            <li><Link className="hover:text-white" to="/experience">Experience</Link></li>
                            <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-white font-semibold">Contact</p>
                        <ul className="mt-3 space-y-2 text-sm text-white/70">
                            <li>Email: <a className="hover:text-white" href={`mailto:${site.contact.email}`}>{site.contact.email}</a></li>
                            <li>Phone: <a className="hover:text-white" href={`tel:${site.contact.phone}`}>{site.contact.phone}</a></li>
                            <li>{site.contact.addressLine}</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-white font-semibold">Website</p>
                        <p className="mt-3 text-sm text-white/70">{site.contact.website}</p>
                        {site.contact.regNumber ? (
                            <p className="mt-2 text-sm text-white/50">
                                Reg: {site.contact.regNumber}
                            </p>
                        ) : null}
                    </div>
                </div>

                <div className="mt-10 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
                    <p className="text-xs text-white/50">
                        © {new Date().getFullYear()} {site.name}. All rights reserved.
                    </p>
                    <p className="text-xs text-white/50">
                        Strength • Structure • Sustainability
                    </p>
                </div>
            </div>
        </footer>
    );
}