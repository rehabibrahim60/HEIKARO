import { Video, Layers, MonitorPlay, Sparkles } from "lucide-react";

const cards = [
  {
    icon: <Video size={24} strokeWidth={1.5} />,
    title: "Cinematic AI Direction",
    desc: "We integrate visual synthesis models with professional cinematic language, prompt architecture, and strict scene-to-scene continuity protocols.",
  },
  {
    icon: <Layers size={24} strokeWidth={1.5} />,
    title: "Hyper-Real CGI & 3D",
    desc: "We construct flawless 3D products, micro-materials, lighting environment maps, and complex simulations from raw CAD drafts or product specifications.",
  },
  {
    icon: <MonitorPlay size={24} strokeWidth={1.5} />,
    title: "Brand Film Commercials",
    desc: "We script and execute dynamic advertisements and campaigns that mesh narrative hooks with high-stakes visual aesthetics.",
  },
  {
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    title: "Universal VFX & Craft",
    desc: "We overlay advanced temporal motion tracking, neural upscaling, fluid transitions, and traditional editing to ensure a premium finish.",
  },
];

const FutureIntelligence = () => {
  return (
    <section className="w-full bg-[#0d0d0d] px-[6%] py-24">
      {/* ── Top content + image ── */}
      <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left text */}
        <div>
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0f33fe]">
            Future Intelligence
          </p>

          <h2
            className="mb-8 max-w-3xl font-bold uppercase leading-[1.05] text-white"
            style={{ fontSize: "clamp(28px, 4.5vw, 60px)" }}
          >
            Physical constraints are legacies. Explore synthetic dimensions.
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-[#777777]">
            Traditional marketing shoots require expensive travel, physical
            location permissions, and massive logistics budgets. At HEIKARO, we
            combine state-of-the-art Generative AI models with premium 3D CGI
            rendering. We deliver cinema-grade commercials, hyper-real product
            visualization clips, and advanced neural VFX to help luxury,
            hardware, and e-commerce category leaders command attention.
          </p>
        </div>

        {/* Right image */}
        <div className="relative h-[360px] w-full overflow-hidden border border-[#1e1e1e] lg:h-[560px]">
          <img
            src="/images/Ai/Physical-constraints-are-legacies.-Explore-synthetic-dimensions..jpg"
            alt="AI Video and CGI"
            className="h-full w-full object-cover object-center"
          />

          {/* Optional dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(13,13,13,0.05), rgba(13,13,13,0.45))",
            }}
          />
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-[#1e1e1e] p-7 flex flex-col gap-5"
          >
            <span className="text-[#bbfe0f]">{card.icon}</span>

            <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white">
              {card.title}
            </h3>

            <p className="text-[12.5px] leading-relaxed text-[#666666]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FutureIntelligence;
