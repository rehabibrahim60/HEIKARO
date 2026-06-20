import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../pages/style/portfolio.css";



const StartWithClarity = () => {
    // --- ضيفي المنطق ده هنا (جوه الكومبوننت وقبل الـ return) ---
    const [activeFilter, setActiveFilter] = useState("ALL SYSTEMS");


    // -----------------------------------------------------------

    return (
        <div className="portfolio-page">

            <section className="clarity-banner-root">
                <div className="clarity-banner-container">

                    <div className="clarity-banner-left">
                        <h2 className="clarity-banner-title">
                            START WITH CLARITY.<br />
                            BUILD WITH STRUCTURE.
                        </h2>
                        <p className="clarity-banner-desc">
                            We map the right service system for your growth before a single asset is produced.
                        </p>
                    </div>

                    <div className="clarity-banner-right">
                        <Link to={"/contact"}>
                            <button className="clarity-banner-btn">
                                START YOUR GROWTH
                            </button>
                        </Link>
                    </div>

                </div>
            </section>
        </div>

    );
};

export default StartWithClarity;