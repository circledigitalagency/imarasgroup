export function Steps({
    items,
}: {
    items: { title: string; desc: string }[];
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((s, idx) => (
                <div
                    key={s.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                    <p className="text-sm text-amber-300/90">Step {idx + 1}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.desc}</p>
                </div>
            ))}
        </div>
    );
}