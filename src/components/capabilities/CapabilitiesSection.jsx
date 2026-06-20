
import CapabilityCard from "./CapabilityCard";

export default function CapabilitiesSection({
    eyebrow,
    title,
    cards = [],
    id,
}) {
    return (
        <section className="relative bg-[#050505] px-5 py-20 text-white md:px-10 lg:px-16" id={id}>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

            <div className="relative mx-auto max-w-[1280px]">
                <div className="mb-16">
                    {eyebrow && (
                        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#0f33fe]">
                            {eyebrow}
                        </p>
                    )}

                    {title && (
                        <h2 className="text-3xl font-semibold tracking-tight text-neutral-400 md:text-4xl">
                            {title}
                        </h2>
                    )}
                </div>

                <div className="flex flex-col gap-12">
                    {cards.map((card) => (
                        <CapabilityCard key={card.id} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
