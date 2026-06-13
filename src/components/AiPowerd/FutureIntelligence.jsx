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

            {/* ── Top text ── */}
            <div className="mb-16">
                {/* Label */}
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1a5fff]">
                    Future Intelligence
                </p>

                {/* Heading */}
                <h2
                    className="mb-8 max-w-3xl font-bold leading-[1.05] text-white"
                    style={{ fontSize: "clamp(28px, 4.5vw, 60px)" }}
                >
                    Physical constraints are legacies. Explore synthetic dimensions.
                </h2>

                {/* Description */}
                <p className="max-w-2xl text-sm leading-relaxed text-[#777777]">
                    Traditional marketing shoots require expensive travel, physical location permissions, and
                    massive logistics budgets. At HEIKARO, we combine state-of-the-art Generative AI models
                    with premium 3D CGI rendering. We deliver cinema-grade commercials, hyper-real product
                    visualization clips, and advanced neural VFX to help luxury, hardware, and e-commerce
                    category leaders command attention.
                </p>
            </div>

            {/* ── Cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="border border-[#1e1e1e] p-7 flex flex-col gap-5"
                    >
                        {/* Icon */}
                        <span className="text-[#c8ff00]">{card.icon}</span>

                        {/* Title */}
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white">
                            {card.title}
                        </h3>

                        {/* Description */}
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