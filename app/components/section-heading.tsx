import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-widest text-amber-300/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">
        {title}
      </h2>
      {children ? (
        <div className="mt-3 text-base leading-relaxed text-white/80">
          {children}
        </div>
      ) : null}
    </div>
  );
}