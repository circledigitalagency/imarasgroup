import type { ReactNode } from "react";
import { Container } from "./container";

export function Section({
    eyebrow,
    title,
    description,
    children,
}: {
    eyebrow?: string;
    title: string;
    description?: string;
    children?: ReactNode;
}) {
    return (
        <section className="py-14 sm:py-16">
            <Container>
                {eyebrow ? (
                    <div className="text-xs font-semibold tracking-widest text-brand-steel uppercase">{eyebrow}</div>
                ) : null}
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-brand-navy">
                    {title}
                </h2>
                {description ? <p className="mt-3 max-w-3xl text-brand-charcoal/75">{description}</p> : null}
                {children ? <div className="mt-10">{children}</div> : null}
            </Container>
        </section>
    );
}