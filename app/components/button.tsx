import { Link } from "@remix-run/react";

type Props = {
    to: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    prefetch?: "intent" | "render" | "none";
};

export function Button({ to, children, variant = "primary", prefetch = "intent" }: Props) {
    const base =
        "inline-flex items-center justify-center px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-gold/50";
    const styles =
        variant === "primary"
            ? "bg-brand-navy text-white hover:opacity-95 shadow-soft"
            : "border border-brand-navy/25 bg-white text-brand-navy hover:border-brand-navy/45";
    return (
        <Link to={to} prefetch={prefetch} className={`${base} ${styles}`}>
            {children}
        </Link>
    );
}