import React, { useState } from "react";
import "../../pages/style/portfolio.css";
import { Link } from "react-router-dom";



const EngineerYourMarket = () => {
    // --- ضيفي المنطق ده هنا (جوه الكومبوننت وقبل الـ return) ---
    const [activeFilter, setActiveFilter] = useState("ALL SYSTEMS");




    // -----------------------------------------------------------

    return (
        <div className="portfolio-page">

            <section className="value-section">
                <div className="value-content">
                    <span className="mini-tag">
                        <span className="icon">⬡</span> INTEGRATED GROWTH OS
                    </span>
                    <h2>ENGINEER YOUR MARKET AUTHORITY.</h2>
                    <p>
                        We connect strategic diagnosis, high-fidelity design, and performance
                        media under one unified growth operating system. Build your brand architecture today.
                    </p>

                    <div className="value-buttons">
                        <Link to={"/contact"}> <button className="primary-btn text-black">ENGAGE HEIKARO <span>→</span></button> </Link>
                        <Link to={"/portfolio"}><button className="secondary-btn">REVIEW PROOF SYSTEM</button> </Link>
                    </div>

                    <div className="process-steps">
                        <span>01 DIAGNOSE</span>
                        <span>02 STRATEGIZE</span>
                        <span>03 EXECUTE</span>
                        <span>04 OPTIMIZE</span>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default EngineerYourMarket;