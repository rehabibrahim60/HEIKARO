import React from "react";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <main
      className="min-h-screen bg-[#080808] px-[6%] py-24 text-white"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <section className="mx-auto max-w-[1180px]">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#0f33fe]">
          Legal & Trust Center
        </p>

        <h1
          className="mb-5 font-black uppercase leading-none tracking-[-0.03em]"
          style={{ fontSize: "clamp(42px, 6vw, 92px)" }}
        >
          Privacy Policy
        </h1>

        <p className="mb-10 text-[11px] font-semibold tracking-[0.12em] text-[#4f5f7a]">
          Last Updated: May 09, 2026
        </p>

        <div className="mb-10 h-px w-full bg-white/10" />

        <div className="max-w-4xl space-y-6 text-[13.5px] leading-[1.85] text-[#c7c7c7]">
          <div>
            <h2 className="mb-2 text-sm font-black text-white">1. Overview</h2>
            <p>
              HEIKARO is a creative growth operating system and digital services
              agency. This Privacy Policy outlines how we may handle information
              in connection with our website and general services. To the extent
              permitted by applicable law, we may update this policy
              periodically without prior notice.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-black text-white">
              2. Information Handling
            </h2>
            <p>
              We may collect general information that you voluntarily provide
              through our website forms or communication channels. This may
              include basic identity and contact details where applicable.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-black text-white">
              3. Data Protection
            </h2>
            <p>
              We implement reasonable measures designed to protect information
              from unauthorized access. However, no digital environment is
              absolutely secure, and we do not guarantee absolute data security.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-black text-white">
              4. Third-Party Services
            </h2>
            <p>
              Our operations may involve third-party tools for hosting,
              analytics, CRM, or communication. These third parties operate
              under their own independent policies.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-black text-white">
              5. Automated & AI Tools
            </h2>
            <p>
              We may utilize AI-assisted tools or automated systems as part of
              our internal workflows or service delivery where appropriate.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-black text-white">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, HEIKARO shall not be
              liable for indirect, incidental, or consequential damages arising
              from the use of this website or handling of information.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-sm font-black text-white">
              7. Governing Law
            </h2>
            <p>
              This policy is governed by the laws of Egypt. For inquiries,
              please contact us at{" "}
              <a
                href="mailto:hallo@heikaro.com"
                className="font-bold text-white hover:text-[#0f33fe]"
              >
                hallo@heikaro.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-[11px] text-[#4f5f7a]">
            If you have any questions regarding this document, please contact us
            at{" "}
            <a
              href="mailto:hallo@heikaro.com"
              className="font-bold text-white hover:text-[#0f33fe]"
            >
              hallo@heikaro.com
            </a>
          </p>
        </div>
      </section>
      <StartWithClarity />
    </main>
  );
};

export default PrivacyPolicy;
