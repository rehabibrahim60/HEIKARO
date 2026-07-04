import { Link } from "react-router-dom";

export default function StartWithClarity() {
  return (
    <section className="clarity-banner-root">
      <div className="clarity-banner-container">
        <div className="clarity-banner-left">
          <h2 className="clarity-banner-title">
            START WITH CLARITY.
            <br />
            BUILD WITH STRUCTURE.
          </h2>

          <p className="clarity-banner-desc">
            We map the right service system for your growth before a single
            asset is produced.
          </p>
        </div>

        <div className="clarity-banner-right">
          <Link to="/contact" className="clarity-banner-btn">
            START YOUR GROWTH
          </Link>
        </div>
      </div>
    </section>
  );
}
