import { Link } from "react-router-dom";
import React from "react";
import { ArrowRight } from "lucide-react";


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
                    <Link
                            to="/contact"
                            className="flex items-center gap-2 bg-[#0f33fe] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
                            >
                            REQUEST EVENT FORMULATION
                            <ArrowRight size={14} />
                            </Link>

                            <Link
                            to="/services"
                            className="border border-[#2a2a2a] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[#444]"
                            >
                            Browse All Services
                            </Link>
                </div>

            </div>
        </section>
    );
};

export default EventsCTA;
