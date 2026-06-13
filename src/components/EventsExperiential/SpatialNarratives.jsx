import { Target, Lightbulb, Users, Zap } from "lucide-react";

// ─────────────────────────────────────────────
//  SPATIAL NARRATIVES
// ─────────────────────────────────────────────
const cards = [
    {
        icon: <Target size={22} strokeWidth={1.5} />,
        title: "Experience Strategy",
        desc: "We define what the event must make people understand, feel, remember, and do.",
    },
    {
        icon: <Lightbulb size={22} strokeWidth={1.5} />,
        title: "Creative Event Concept",
        desc: "We create a central idea that shapes the event narrative, space, visuals, program, and audience interaction.",
    },
    {
        icon: <Users size={22} strokeWidth={1.5} />,
        title: "Audience Journey Design",
        desc: "We map the guest experience from invitation and arrival to interaction, participation, content moments, and follow-up.",
    },
    {
        icon: <Zap size={22} strokeWidth={1.5} />,
        title: "Production & Activation Logic",
        desc: "We connect space, stage, booths, screens, content, signage, media, technology, and operational flow into one event system.",
    },
];

export default function SpatialNarratives() {
    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">

            {/* ── Top text ── */}
            <div className="mb-16">
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#1a5fff]">
                    Spatial Narratives
                </p>
                <h2
                    className="mb-8 max-w-3xl font-bold leading-[1.05] text-white"
                    style={{ fontSize: "clamp(28px, 4.5vw, 60px)" }}
                >
                    A physical space is an active canvas. Design its narrative parameters.
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-[#777777]">
                    HEIKARO engineers strategic events and brand dimensions where spaces, stage setups,
                    interactive booths, signage systems, and agendas collaborate to deliver a unified
                    narrative. From custom exhibition booths and product launch programs to corporate
                    summits and cultural programs, we build environments that turn physical spaces into
                    highly interactive brand vehicles.
                </p>
            </div>

            {/* ── Cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="border border-[#1e1e1e] p-7 flex flex-col gap-5"
                    >
                        <span className="text-[#c8ff00]">{card.icon}</span>
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