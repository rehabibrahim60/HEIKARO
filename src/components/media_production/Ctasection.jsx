import {Link} from "react-router-dom";
const CTASection = () => {
    return (
        <section
            className="relative w-full overflow-hidden py-24 md:py-32"
            style={{ backgroundColor: "#0a0a0a" }}
        >
            <div className="relative z-10 px-[6%] max-w-[1400px] mx-auto flex flex-col items-center text-center">

                <p className="text-[#c8f135] text-[10.5px] font-bold tracking-[0.22em] uppercase mb-6">
                    Aesthetic Standing
                </p>

                <h2
                    className="text-white font-black uppercase leading-[1.05] tracking-[-0.01em] mb-6"
                    style={{ fontSize: "clamp(38px, 4vw, 88px)" }}
                >
                    Deploy Cinema-Grade<br />Visual Assets
                </h2>

                <p className="text-[#666] text-[13px] leading-[1.85] max-w-[420px] mb-12">
                    Book a production scoping conversation. Our project directors will audit
                    your campaign requirements and outline a targeted pre-production shot plan.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact">
                        <button className="group flex items-center gap-3 bg-[#c8f135] px-8 py-4 text-[11px] font-bold tracking-[0.18em] uppercase text-[#0a0a0a] hover:bg-[#d4f94e] transition-colors duration-200 cursor-pointer">
                            Request Production Scoping
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </button>
                    </Link>

                    <Link to="/services">
                        <button className="flex items-center justify-center px-8 py-4 text-[11px] font-bold tracking-[0.18em] uppercase text-white border border-[#2a2a2a] hover:border-[#444] hover:bg-[#111] transition-colors duration-200 cursor-pointer">
                            Browse All Services
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default CTASection;