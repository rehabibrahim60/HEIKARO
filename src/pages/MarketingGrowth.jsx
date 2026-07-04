import React, { useState } from "react";
import { Link } from "react-router-dom";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import "./style/pageHero.css";
import CapabilitiesSection from "../components/capabilities/CapabilitiesSection";

export default function MarketingGrowth() {
  const marketingGrowthCapabilities = [
    {
      id: 1,
      anchorId: "social-media-strategy-management",
      chapter: "CAPABILITY 01 // SOCIAL MEDIA STRATEGY",
      title: "Social Media Strategy & Management",
      description:
        "Developing and deploying a custom organic workflow that builds community influence. We establish clear visual grids, premium message hooks, platform moderation protocols, and direct cross-track content systems that turn casual organic channels into highly leveraged brand media systems.",
      competencyText: "SOCIAL MEDIA STRATEGY",
      image: "/images/marketing-gro/SOCIALSTRATEGY.jpg",
      imageAlt: "Social Media Strategy and Management",
      imagePosition: "right",
      details: [
        {
          title: "01 // Strategic Approach",
          text: "We construct platform content blueprints and aesthetic visual grids. By aligning active community response procedures, we translate daily social feeds into structured, compounding brand equity.",
        },
        {
          title: "02 // Key Metrics",
          list: [
            "Net Organic Follower Growth",
            "Profile Interactions & CTR",
            "Audience Engagement Statistics",
          ],
        },
        {
          title: "03 // Platform Coverage",
          list: [
            "LinkedIn (Corporate influence)",
            "Instagram & TikTok (B2C)",
            "YouTube (Thought leadership)",
          ],
        },
      ],
    },
    {
      id: 2,
      anchorId: "digital-advertising",
      chapter: "CAPABILITY 02 // PAID MEDIA ACQUISITION",
      title: "Digital Advertising",
      description:
        "Surgical paid traffic programs running across major global advertising networks. We structure campaigns around rigorous testing models: finding winning hooks, optimizing dynamic bids, configuring system offline APIs (CAPI), and scaling target ad budgets globally to secure clear acquisitions.",
      competencyText: "PAID MEDIA ACQUISITION",
      image: "/images/marketing-gro/DIGITAL.jpg",
      imageAlt: "Digital Advertising",
      imagePosition: "right",
      details: [
        {
          title: "01 // Strategic Approach",
          text: "We audit ad networks surgically and configure Conversion API (CAPI) integrations. By mapping dynamic exclusion lists, we focus ad spend on net-new premium user targets.",
        },
        {
          title: "02 // Key Metrics",
          list: [
            "Return On Ad Spend (ROAS)",
            "Customer Acquisition Cost (CAC)",
            "Lead-to-Conversion Funnel Rates",
          ],
        },
        {
          title: "03 // Scale Protocols",
          list: [
            "Budget Multipliers (+20% increments)",
            "Lookalike Custom Audience Builds",
            "Retargeting Suppression Models",
          ],
        },
      ],
    },
    {
      id: 3,
      anchorId: "campaign-strategy-performance-analytics",
      chapter: "CAPABILITY 03 // DATA ATTRIBUTION",
      title: "Campaign Strategy & Performance Analytics",
      description:
        "Granular tracking and dynamic dashboards custom configured for complete visibility. We build robust systems that attribute exact multi-channel purchases, map client long-term values, track cohort margins, and run rigorous statistical tests to eliminate poor spend models.",
      competencyText: "DATA ATTRIBUTION",
      image: "/images/marketing-gro/CAMPAGIN.jpg",
      imageAlt: "Campaign Strategy and Performance Analytics",
      imagePosition: "right",
      details: [
        {
          title: "01 // Strategic Approach",
          text: "We model customer lifetime values (LTV) and build custom Google Tag Manager attribution tunnels that feed into live dashboards, enabling clear cohort margin analysis.",
        },
        {
          title: "02 // Key Metrics",
          list: [
            "Cohort Retention Rates",
            "Margin-Adjusted CAC ratios",
            "First-Party Data Attributions",
          ],
        },
        {
          title: "03 // Technology Systems",
          list: [
            "Looker Studio Custom Panels",
            "Segment and Mixpanel APIs",
            "UTM Schema Standardization Sheets",
          ],
        },
      ],
    },
    {
      id: 4,
      anchorId: "end-to-end-marketing-campaigns",
      chapter: "CAPABILITY 04 // 360° OMNICHANNEL LAUNCHES",
      title: "End-to-End Marketing Campaigns",
      description:
        "Complete multi-format campaign orchestration aligned for maximum impact. We design the launch schedule from strategy blueprint and offer design to unified asset creation, media planning, and cross-channel optimization to secure immediate market choices.",
      competencyText: "360° OMNICHANNEL LAUNCHES",
      image: "/images/marketing-gro/MARKETING.jpg",
      imageAlt: "End-to-End Marketing Campaigns",
      imagePosition: "right",
      details: [
        {
          title: "01 // Strategic Approach",
          text: "We plan multi-channel media buys and compile cohesive brand asset libraries. Hand-in-hand with conversion-optimized landing pages, we build high-momentum launch programs.",
        },
        {
          title: "02 // Key Metrics",
          list: [
            "Total Campaign Revenue",
            "New Customer Share Growth",
            "Brand Mentions & Organic Shares",
          ],
        },
        {
          title: "03 // Channels Engaged",
          list: [
            "Paid Acquisition (Meta/TikTok/Google)",
            "Public Relations & Organic Channels",
            "Strategic Email Newsletters",
          ],
        },
      ],
    },
  ];
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div
      className="service-page marketing-growth-page bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <style>
        {`
    .marketing-growth-page {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
    }

    .marketing-growth-page,
    .marketing-growth-page * {
      font-family: "Aspekta", sans-serif !important;
      box-sizing: border-box;
    }

    .marketing-growth-page img,
    .marketing-growth-page video {
      max-width: 100%;
      display: block;
    }

    .marketing-growth-page h1 {
      font-size: clamp(44px, 6vw, 78px) !important;
      line-height: 0.95 !important;
      font-weight: 900 !important;
      letter-spacing: -0.04em !important;
      text-transform: uppercase !important;
    }

    .marketing-growth-page h2 {
      font-size: clamp(34px, 4.2vw, 52px) !important;
      line-height: 1.12 !important;
      font-weight: 900 !important;
      letter-spacing: -0.035em !important;
    }

    .marketing-growth-page h3,
    .marketing-growth-page h4 {
      font-size: 21px !important;
      line-height: 1.3 !important;
      font-weight: 900 !important;
      letter-spacing: -0.02em !important;
    }

    .marketing-growth-page p {
      font-size: 18px !important;
      line-height: 1.9 !important;
      font-weight: 500 !important;
      overflow-wrap: anywhere;
    }

    .marketing-growth-page li {
      font-size: 16px !important;
      line-height: 1.8 !important;
      color: #9ca3af !important;
    }

    .marketing-growth-page a,
    .marketing-growth-page button {
      max-width: 100%;
      font-size: 14px !important;
      font-weight: 900 !important;
      letter-spacing: 1.5px !important;
    }

    .marketing-growth-page .grid {
      min-width: 0 !important;
    }

    .marketing-growth-page .unified-page-title {
      font-size: clamp(44px, 7vw, 90px) !important;
    }

    .marketing-growth-page .unified-page-desc {
      font-size: clamp(16px, 2vw, 21px) !important;
      line-height: 1.7 !important;
    }

    @media (max-width: 1024px) {
      .marketing-growth-page section:not(.unified-page-hero) {
        padding-left: 40px !important;
        padding-right: 40px !important;
      }
    }

    @media (max-width: 768px) {
      .marketing-growth-page section:not(.unified-page-hero) {
        padding-top: 70px !important;
        padding-bottom: 70px !important;
        padding-left: 18px !important;
        padding-right: 18px !important;
      }

      .marketing-growth-page .unified-page-title {
        font-size: clamp(38px, 12vw, 58px) !important;
        line-height: 0.95 !important;
      }

      .marketing-growth-page .unified-page-desc {
        font-size: 15px !important;
        line-height: 1.8 !important;
        max-width: 100% !important;
      }

      .marketing-growth-page h1 {
        font-size: clamp(34px, 10vw, 48px) !important;
        line-height: 1.05 !important;
      }

      .marketing-growth-page h2 {
        font-size: clamp(28px, 9vw, 36px) !important;
        line-height: 1.12 !important;
      }

      .marketing-growth-page h3,
      .marketing-growth-page h4 {
        font-size: 18px !important;
        line-height: 1.35 !important;
      }

      .marketing-growth-page p {
        font-size: 15px !important;
        line-height: 1.8 !important;
      }

      .marketing-growth-page li {
        font-size: 14px !important;
      }

      .marketing-growth-page .text-lg,
      .marketing-growth-page [class*="text-lg"],
      .marketing-growth-page .text-xl,
      .marketing-growth-page [class*="text-xl"] {
        font-size: 15px !important;
        line-height: 1.8 !important;
      }

      .marketing-growth-page .text-sm,
      .marketing-growth-page [class*="text-sm"] {
        font-size: 14px !important;
        line-height: 1.75 !important;
      }

      .marketing-growth-page .text-xs,
      .marketing-growth-page [class*="text-xs"] {
        font-size: 11px !important;
        line-height: 1.5 !important;
        letter-spacing: 1.2px !important;
      }

      .marketing-growth-page .text-3xl,
      .marketing-growth-page [class*="text-3xl"] {
        font-size: 24px !important;
        line-height: 1.25 !important;
      }

      .marketing-growth-page .tracking-\\[4px\\],
      .marketing-growth-page .tracking-\\[3px\\],
      .marketing-growth-page .tracking-widest {
        letter-spacing: 1.3px !important;
      }

      .marketing-growth-page .min-h-\\[360px\\] {
        min-height: auto !important;
      }

      .marketing-growth-page .p-8 {
        padding: 24px !important;
      }

      .marketing-growth-page .p-10 {
        padding: 24px !important;
      }

      .marketing-growth-page .mb-16 {
        margin-bottom: 42px !important;
      }

      .marketing-growth-page .gap-16 {
        gap: 36px !important;
      }

      .marketing-growth-page .gap-12 {
        gap: 34px !important;
      }

      .marketing-growth-page a.bg-\\[\\#0f33fe\\],
      .marketing-growth-page a.bg-transparent.border {
        width: 100% !important;
        min-height: 58px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        padding: 16px 18px !important;
        font-size: 12px !important;
        line-height: 1.4 !important;
      }

      .marketing-growth-page .flex.flex-col.sm\\:flex-row {
        width: 100%;
      }
    }

    @media (max-width: 420px) {
      .marketing-growth-page section:not(.unified-page-hero) {
        padding-left: 16px !important;
        padding-right: 16px !important;
      }

      .marketing-growth-page .unified-page-title {
        font-size: 40px !important;
      }

      .marketing-growth-page h1 {
        font-size: 34px !important;
      }

      .marketing-growth-page h2 {
        font-size: 30px !important;
      }

      .marketing-growth-page h3,
      .marketing-growth-page h4 {
        font-size: 17px !important;
      }

      .marketing-growth-page p {
        font-size: 14px !important;
      }

      .marketing-growth-page .p-8,
      .marketing-growth-page .p-10 {
        padding: 20px !important;
      }
    }
  `}
      </style>

      {/* HERO زي Services */}
      <section
        className="unified-page-hero"
        style={{ "--hero-bg": "url('/images/marketing-gro/COVER.jpg')" }}
      >
        <div className="unified-page-hero-content">
          <h1 className="unified-page-title">
            MARKETING &<br /> GROWTH
          </h1>

          <p className="unified-page-desc">
            — Unifying performance media buying, platform organic strategy,
            high-end content, and transparent data visualization to scale
            revenue without compromising brand equity.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Left Content */}
          <div>
            <p className="text-[#0f33fe] font-black tracking-[3px] text-xs uppercase mb-6">
              STRATEGIC POSITIONING
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-3xl mb-8 uppercase">
              Marketing is not a line item. It is a mathematical model for human
              choices.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              Most growth agencies operate on separation: buyers optimize click
              metrics while creative studios make pretty designs. At HEIKARO, we
              eliminate the divide. We pair heavy statistical media-buying
              execution with elite creative asset production. Every hook, visual
              angle, and copywriting style is crafted based on clean attribution
              loops to turn visitor attention into solid balance-sheet value.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto h-[260px] w-full max-w-[460px] overflow-hidden border border-[#1e1e1e] sm:h-[340px] lg:mx-0 lg:h-[430px] lg:justify-self-end">
            <img
              src="/images/marketing-gro/Marketing-is-not-a-line-item.jpg"
              alt="Strategic Positioning"
              className="h-full w-full object-cover object-center"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(10,10,10,0.05), rgba(10,10,10,0.35))",
              }}
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
        <p className="text-[#ff3b30] font-black tracking-[3px] text-xs uppercase mb-4">
          PLATFORM LEAKAGE
        </p>

        <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
          Why Modern Campaigns Dissolve Budgets
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-16">
          Standard marketing approaches are broken in post-privacy, AI-saturated
          platform spaces. Traditional setups fail in critical spots:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              num: "01",
              title: "High Ad Spend, No Attribution",
              desc: "Sinking thousands into Google and Meta without knowing which channel is genuinely driving checkout cart value.",
            },
            {
              num: "02",
              title: "Fragmented Agency Mess",
              desc: "Hiring one agency for copy, one for media buying, and another for analytics. Nothing aligns, and everyone blames the other.",
            },
            {
              num: "03",
              title: "Stagnant Organic Reach",
              desc: "Posting daily on social media channels without a community strategy, leading to zero organic audience growth or engagement.",
            },
            {
              num: "04",
              title: "Shallow, Non-converting Creatives",
              desc: "Using boring template graphics that fail to capture scroll attention or match the premium positioning of your product.",
            },
          ].map((item, index) => (
            <div key={index} className="border border-[#222] p-8">
              <p className="text-[#ff3b30] font-mono text-xs font-black mb-6">
                {item.num}
              </p>

              <h3 className="text-white font-black text-sm mb-4">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Included Capabilities */}
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
        <div className="text-center mb-16">
          <p className="text-[#bbfe0f] font-black tracking-[3px] text-xs uppercase mb-4">
            CAPABILITIES SPECTRUM
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Included Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
{[
  {
    num: "01",
    title: "Social Media Strategy & Management",
    desc: "Architecting brand presence across global platforms to build community, influence, and compound organic attention.",
    footer: "Average +120% organic engagement rate",
  },
  {
    num: "02",
    title: "Digital Advertising (Paid Acquisition)",
    desc: "Hyper-targeted paid campaigns across Meta, Google, LinkedIn, and TikTok engineered for surgical cost-per-acquisition scaling.",
    footer: "Average 4.1x ROAS on active ad spend",
  },
  {
    num: "03",
    title: "Campaign Strategy & Performance Analytics",
    desc: "Granular conversion attributions, data visualization, and predictive user modeling to eliminate ad-waste and maximize LTV.",
    footer: "100% transparent attribution boards",
  },
  {
    num: "04",
    title: "End-to-End Marketing Campaigns",
    desc: "Cohesive multi-channel campaign architectures designed around specific brand product drops, market expansion, or seasonal growth.",
    footer: "Integrated media plan in under 14 days",
  },
].map((item, index) => (
  <div
    key={index}
    onClick={() =>
      document
        .getElementById(marketingGrowthCapabilities[index].anchorId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    className="border border-[#222] p-8 flex flex-col justify-between min-h-[360px] hover:border-[#0f33fe] transition-colors duration-300 group cursor-pointer"
  >
              <div>
                <div className="flex items-center justify-between mb-10">
                  <span className="text-gray-500 font-mono text-xs">
                    {item.num}
                  </span>

                  <span className="text-gray-500 group-hover:text-[#0f33fe] transition-colors text-lg">
                    ↗
                  </span>
                </div>

                <h3 className="text-white font-black text-sm mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <p className="text-[#bbfe0f] text-xs font-mono mt-8 pt-6 border-t border-[#222]">
                {item.footer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - Who This Is For */}
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-[#0f33fe] font-black tracking-[3px] text-xs uppercase mb-6">
              SURGICAL SEGMENTS
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              Who This Growth Engine Is Built For
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              We design and manage strategic campaigns for ambitious enterprises
              that demand clear bottom-line scalability over hollow lifestyle
              views.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "DIRECT-TO-CONSUMER BRANDS",
                desc: "DTC founders looking to scale monthly recurring revenue while guarding product gross margins and increasing initial cart average booking sizes.",
              },
              {
                title: "PREMIUM B2B & SAAS CLUBS",
                desc: "High-contract enterprise firms needing systematic LinkedIn account pipelines and custom newsletter setups that target key corporate directors.",
              },
              {
                title: "VENTURE-BACKED EXPANSIONS",
                desc: "Fast-moving brands ready to scale capital-backed products with cohesive, multi-format paid spend models on a strict timeline.",
              },
              {
                title: "LIFESTYLE WELLNESS SUITES",
                desc: "High-end aesthetic centers, wellness operations, and retreats looking to establish reliable local patient registration channels.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#222] p-8 hover:border-[#333] transition-colors"
              >
                <h3 className="text-white font-black text-sm uppercase tracking-[1px] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Details */}
      <CapabilitiesSection
        id="capabilities-section"
        eyebrow="MARKETING & GROWTH"
        title="Capabilities In Detail"
        cards={marketingGrowthCapabilities}
      />

      {/* Section 6 - 4-Phase Framework */}
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
        <div className="text-center mb-16">
          <p className="text-[#bbfe0f] font-black tracking-[3px] text-xs uppercase mb-4">
            OPERATIONAL METHODOLOGY
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Our 4-Phase Growth Framework
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We deploy marketing systems according to a structured, predictive
            operational process designed to eliminate guesswork and maximize ad
            spend return.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              phase: "PHASE 01",
              title: "FUNNEL & SDK AUDIT",
              desc: "Surgical auditing of current pixel settings, attributions, custom parameters, funnels, and performance bottlenecks to isolate where your ad budget is leaking.",
            },
            {
              phase: "PHASE 02",
              title: "CREATIVE & COPY DESIGN",
              desc: "Drafting conversion-focused hooks, copywriting, static graphics, and high-fidelity social video briefs mapped directly to targeted buyer psychologies.",
            },
            {
              phase: "PHASE 03",
              title: "LAUNCH & API BINDING",
              desc: "Setting up campaign architecture, landing pages, attribution tables, and custom Offline Conversion API triggers before initiating media spend scaling.",
            },
            {
              phase: "PHASE 04",
              title: "DATA-LED SCALE CHECKS",
              desc: "Running statistical audience checks, removing losing ad sets weekly, and doubling down on winning assets to aggressively compound ROAS.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative border border-[#222] p-8 overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#0f33fe] transition-all duration-500 group-hover:w-full z-10" />

              <div className="absolute inset-0 bg-[#bbfe0f] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0 opacity-0 group-hover:opacity-5" />

              <div className="relative z-10">
                <p className="text-[#0f33fe] font-mono text-xs font-black uppercase tracking-[2px] mb-6">
                  {item.phase}
                </p>

                <h3 className="text-white font-black text-sm uppercase leading-tight mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 */}
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="text-[#bbfe0f] font-black tracking-[3px] text-xs uppercase mb-6">
              AESTHETIC AND PERFORMANCE ALIGNMENT
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              Elite Creative Meets Heavy Statistical Scaling
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Most agencies fail because they represent single sides. Elite
              creative directors hate analyzing spreadsheets, while
              mathematically rigorous ad-buyers lack taste, loading ugly
              templates that damage premium brand reputation.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              HEIKARO solves the core discrepancy. We are a unified Creative
              Growth Operating System. Our ad-buyers work side-by-side with our
              cinematic directors, copywriting specialists, and full-stack React
              engineers to deliver elite brand assets wrapped inside
              hyper-optimized attribution architectures.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "DIRECT API INTEGRITY",
                desc: "Connecting directly to database schemas via custom Conversions API integration to guarantee clean purchase attributions without pixel leakage.",
              },
              {
                title: "CONSOLIDATED WORKFLOWS",
                desc: "Consolidating all target paid ads, media production, conversion UX, and analytics inside a single accountable engineering team.",
              },
              {
                title: "AESTHETIC DEFENSE",
                desc: "Ensuring every click, ad set, and layout operates with pristine typography, clean spacing, and brand-consistent design standards.",
              },
              {
                title: "RESULT GUARANTEE",
                desc: "No vanity reporting. We build, analyze, and optimize around genuine client EBITDA growth metrics and cohort values.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#222] p-8 hover:border-[#333] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#bbfe0f] text-lg">⊙</span>

                  <h3 className="text-white font-black text-sm uppercase tracking-[1px]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 - Case Studies */}
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
        <p className="text-[#0f33fe] font-black tracking-[3px] text-xs uppercase mb-4">
          EBITDA IMPACT
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-16">
          Active Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              loop: "Scale Loop 01",
              category: "AESTHETIC WELLNESS BRAND",
              title: "Scale to $2.4M ARR",
              challenge:
                "High customer acquisition costs using stock banner ads and broken Google Search attribution.",
              solution:
                "Deployed cinematic UGC video creatives with custom-built high-converting landing pages and configured offline conversion API tracking.",
              result:
                "CAC dropped by 44% within sixty days, scaling baseline ROAS to 4.8x.",
            },
            {
              loop: "Scale Loop 02",
              category: "MODERN DESIGN CLUB",
              title: "Global Membership Expansion",
              challenge:
                "Reaching premium overseas corporate decision makers across Europe and North America.",
              solution:
                "Engineered a systematic LinkedIn custom newsletter campaign paired with executive target programmatic account ads.",
              result:
                "Acquired 360+ highly values institutional members in ninety days.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-[#222] p-10 group hover:border-[#bbfe0f] transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-500 text-xs uppercase tracking-[2px]">
                  {item.category}
                </span>

                <span className="text-[#0f33fe] text-xs font-mono group-hover:text-[#bbfe0f] transition-colors duration-300">
                  {item.loop}
                </span>
              </div>

              <h3 className="text-3xl font-black mb-8 group-hover:text-[#bbfe0f] transition-colors duration-300">
                {item.title}
              </h3>

              <div className="space-y-4">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <span className="text-white font-black">Challenge:</span>{" "}
                  {item.challenge}
                </p>

                <p className="text-sm text-gray-400 leading-relaxed">
                  <span className="text-white font-black">Solution:</span>{" "}
                  {item.solution}
                </p>

                <p className="text-sm text-gray-400 leading-relaxed">
                  <span className="text-white font-black">Result:</span>{" "}
                  <span className="text-[#bbfe0f]">{item.result}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9 - FAQ */}
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%] border-t border-[#111]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="w-12 h-12 border border-[#0f33fe] flex items-center justify-center mb-6">
              <span className="text-[#0f33fe] text-xl">?</span>
            </div>

            <p className="text-[#0f33fe] font-black tracking-[3px] text-xs uppercase mb-4">
              FAQS
            </p>

            <h2 className="text-4xl font-black mb-6 leading-tight">
              Got Questions? We Have Answers.
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Got a question about attribution, technical setup integration, or
              monthly rhythms? Explore the items or reach out for custom
              scoping.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#222]">
            {[
              {
                q: "How does HEIKARO handle performance attribution?",
                a: "We utilize multi-touch attribution tracking systems connected directly to your core database rather than relying purely on Meta or Google Pixel default reporting. This provides a clean, single source of truth for every purchase decision.",
              },
              {
                q: "Is there a minimum monthly ad budget you work with?",
                a: "While we scale with enterprise budgets up to $250k/month, we typically work with brands starting at $5,000 to $10,000/month in paid media spend to ensure sufficient data is generated.",
              },
              {
                q: "Do you create the ad creatives in-house?",
                a: "Yes. Because we integrate our Media Production and Content & Storytelling services directly with Marketing & Growth, we design, write, produce, and edit all paid social creatives in-house.",
              },
              {
                q: "What is your typical turnaround time for a launch campaign?",
                a: "An integrated campaign with asset production, audience research, copy engineering, tracking dashboard setups, and launch readiness takes between 4 to 6 weeks from kick-off.",
              },
              {
                q: "Do you offer organic community moderation alongside strategy?",
                a: "Yes, our social media strategy covers active community response and platform moderation to build active engagement loops and protect brand equity.",
              },
            ].map((item, i) => (
              <div key={i} className="group">
                <div
                  className="flex items-center justify-between py-6 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <h3 className="text-white text-sm font-black pr-8">
                    {item.q}
                  </h3>

                  <span className="text-gray-500 group-hover:text-[#0f33fe] transition-colors text-xl flex-shrink-0">
                    {openFaq === i ? "−" : "∨"}
                  </span>
                </div>

                {openFaq === i && (
                  <div className="pb-6">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-24 px-[8%] text-center">
        <div className="text-[#0f33fe] font-black tracking-[4px] text-xs uppercase mb-6">
          Acquisition Alignment
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
          Unify Your Marketing Operating System
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Book an acquisition architecture audit. Our team will map your spend
          leakage points and design a custom cross-channel creative scale
          strategy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-[#0f33fe] text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            START YOUR EXPERIENCE BRIEF →
          </Link>

          <Link
            to="/services"
            className="bg-transparent border border-[#333] text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            BROWSE ALL SERVICES
          </Link>
        </div>
      </section>

      <StartWithClarity />
    </div>
  );
}
