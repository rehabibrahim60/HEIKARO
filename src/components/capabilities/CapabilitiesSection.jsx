import CapabilityCard from "./CapabilityCard";

export default function CapabilitiesSection({
  eyebrow,
  title,
  cards = [],
  id,
}) {
  return (
    <section className="relative bg-[#0a0a0a] py-24 text-white" id={id}>
      <div className="hidden pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="service-page-container relative mx-auto">
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
          {cards.map((card, index) => (
            <div
              key={card.id || index}
              id={card.anchorId}
              className="scroll-mt-[130px]"
            >
              <CapabilityCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}