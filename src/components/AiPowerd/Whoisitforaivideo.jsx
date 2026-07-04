import { Globe, ShoppingBag, Clapperboard, Cpu } from "lucide-react";

const audiences = [
    {
        icon: <Globe size={22} />,
        title: "Global Enterprise Brands",
        description:
            "Marketing segments requiring futuristic, highly customized brand anthems, TVC concept films, and campaign videos.",
    },
    {
        icon: <ShoppingBag size={22} />,
        title: "Luxury & Consumer Goods",
        description:
            "Brands demanding unmatched studio perfection, glass-like product visual rendering, and pristine packaging showcase.",
    },
    {
        icon: <Clapperboard size={22} />,
        title: "Entertainment & Studios",
        description:
            "Production teams seeking quick high-end concept art, digital environments, and complex VFX simulations.",
    },
    {
        icon: <Cpu size={22} />,
        title: "Technology Startups",
        description:
            "Companies wanting futuristic visual language, hardware renders, and cinematic launches to stand out instantly.",
    },
];

const WhoIsItFor = () => {
    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-24">

            {/* ── Centered header ── */}
            <div className="mb-16 flex flex-col items-center text-center">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0f33fe]">
                    Operational Target
                </p>
                <h2
                    className="max-w-2xl font-bold leading-[1.1] text-white"
                    style={{ fontSize: "clamp(28px, 4vw, 54px)" }}
                >
                    Who This Service Is For
                </h2>
            </div>

            {/* ── Cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {audiences.map((item, index) => (
                    <div
                        key={index}
                        className="border border-[#1e1e1e] p-7 flex flex-col gap-5"
                    >
                        {/* Icon */}
                        <span className="flex h-10 w-10 items-center justify-center bg-[#0d1a3a] text-[#0f33fe]">
                            {item.icon}
                        </span>

                        {/* Title */}
                        <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-white">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="flex-1 text-sm leading-relaxed text-[#666666]">
                            {item.description}
                        </p>

                        {/* Dot */}
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#bbfe0f]" />
                    </div>
                ))}
            </div>

        </section>
    );
};

export default WhoIsItFor;
