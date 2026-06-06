import Tracks from "./Tracks";

export default function CapabilitiesSection() {
    return (
        <section className="bg-[#050505] px-6 py-24 text-white lg:px-20">
            <div className="mx-auto max-w-[1240px]">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-white/35">
                    Our Capabilities
                </p>

                <h2 className="max-w-[720px] text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white lg:text-[44px]">
                    Unified Brand Architecture.
                    <br />
                    <span className="text-[#065BFF]">8 Strategic Tracks.</span>
                </h2>

                <div className="mt-24">
                    <Tracks />
                </div>
            </div>
        </section>
    );
}