const EventsCTA = () => {
    return (
        <section className="w-full bg-[#0d0d0d] px-[6%] py-28">
            <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">

                {/* Eyebrow */}
                <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0f33fe]">
                    NARRATIVE PRESENCE
                </p>

                {/* Heading */}
                <h2
                    className="mb-7 font-black uppercase leading-none text-white"
                    style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.01em" }}
                >
                    HOST STRATEGIC
                    <br />
                    EXPERIENTIAL EVENTS
                </h2>

                {/* Description */}
                <p className="mb-12 max-w-md text-[13px] leading-relaxed text-[#666666]">
                    Contact our experience directors today to audit your upcoming
                    exhibitions, campaigns, or corporate milestones, and map out a tailored
                    spatial narrative concept plan.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#"
                        className="flex items-center gap-3 bg-[#0f33fe] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90"
                    >
                        REQUEST EVENT FORMULATION
                        <span className="text-base leading-none">→</span>
                    </a>

                    <a
                        href="#"
                        className="flex items-center border border-[#2e2e2e] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white"
                    >
                        BROWSE ALL SERVICES
                    </a>
                </div>

            </div>
        </section>
    );
};

export default EventsCTA;
