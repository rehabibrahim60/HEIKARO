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
    <section className="w-full bg-[#0a0a0a] py-24">
      <div className="service-page-container">
        {/* ── Text + Image ── */}
        <div className="mb-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Text Side */}
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0f33fe]">
              Spatial Narratives
            </p>

            <h2
              className="mb-8 max-w-3xl font-bold leading-[1.05] text-white"
              style={{ fontSize: "clamp(28px, 4.5vw, 60px)" }}
            >
              A physical space is an active canvas. Design its narrative
              parameters.
            </h2>

            <p className="max-w-2xl text-sm leading-relaxed text-[#777777]">
              HEIKARO engineers strategic events and brand dimensions where
              spaces, stage setups, interactive booths, signage systems, and
              agendas collaborate to deliver a unified narrative. From custom
              exhibition booths and product launch programs to corporate summits
              and cultural programs, we build environments that turn physical
              spaces into highly interactive brand vehicles.
            </p>
          </div>

          {/* Image Side */}
          <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-[#111] md:min-h-[460px]">
            <img
              src="/images/event/EVENT.jpg"
              alt="Events and experiential production"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/35 p-5 backdrop-blur-sm">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#bbfe0f]">
                Live Experience Systems
              </p>
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-[#1e1e1e] bg-[#0d0d0d] p-7 flex flex-col gap-5"
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
      </div>
    </section>
  );
}
