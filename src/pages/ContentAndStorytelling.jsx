import React, { useState } from "react";
import { Link } from "react-router-dom";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import "./style/pageHero.css";
import CapabilitiesSection from "../components/capabilities/CapabilitiesSection";

export default function ContentAndStorytelling() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const stepsData = [
    {
      num: "01",
      title: "Startups",
      desc: "That need a clear brand story and launch content to build immediate market trust.",
    },
    {
      num: "02",
      title: "Service businesses",
      desc: "That need stronger explanation and trust-building authority content to stand out.",
    },
    {
      num: "03",
      title: "Active brands",
      desc: "Posting often but without clear direction, feeling like they are speaking to no one.",
    },
    {
      num: "04",
      title: "Growth companies",
      desc: "Needing a consistent, streamlined structure for monthly social media content.",
    },
    {
      num: "05",
      title: "Campaign initiators",
      desc: "Launching campaigns, offers, products, or services that require a unified voice.",
    },
    {
      num: "06",
      title: "Founders & Leaders",
      desc: "Building executive authority and personal brand narratives through deep expertise.",
    },
  ];

  const services = [
    {
      id: "s1",
      title: "Copywriting & Storytelling",
      desc: "Create persuasive copy, brand stories, campaign messages, website copy, scripts, and content language that makes the brand easier to understand and believe.",
      image: "/hero-bg.jpg.jpeg",
    },
    {
      id: "s2",
      title: "Content Strategy & Content System",
      desc: "Build the strategic content foundation: content pillars, audience mapping, message frameworks, content calendars, formats, and execution briefs.",
      image: "/hero-bg.jpg.jpeg",
    },
    {
      id: "s3",
      title: "Social Media Content Production (Graphic)",
      desc: "Produce graphic social media content systems including posts, carousels, stories, campaign visuals, ad graphics, and visual content packs.",
      image: "/hero-bg.jpg.jpeg",
    },
    {
      id: "s4",
      title: "Social Media Content Production (Video/Photo)",
      desc: "Produce video and photo content for social platforms including reels, product shoots, brand shoots, campaign content, stories, covers, and monthly content libraries.",
      image: "/hero-bg.jpg.jpeg",
    },
  ];

  const operationalSteps = [
    {
      step: "01",
      title: "BRAND & AUDIENCE UNDERSTANDING",
      desc: "We study the brand, audience, offer, services, market, platforms, current content, and communication gaps.",
    },
    {
      step: "02",
      title: "MESSAGE STRATEGY",
      desc: "We define what the brand must communicate, what the audience needs to understand, and what messages should lead to trust and action.",
    },
    {
      step: "03",
      title: "CONTENT PILLAR DEVELOPMENT",
      desc: "We organize content into themes such as awareness, education, trust, proof, conversion, storytelling, community, and campaigns.",
    },
    {
      step: "04",
      title: "STORYTELLING & COPY DIRECTION",
      desc: "We shape the brand story, hooks, captions, scripts, headlines, CTAs, and verbal rhythm.",
    },
    {
      step: "05",
      title: "CONTENT PRODUCTION PLANNING",
      desc: "We define what needs to be written, designed, photographed, filmed, edited, and adapted for each platform.",
    },
    {
      step: "06",
      title: "VISUAL & FORMAT EXECUTION",
      desc: "We produce graphic, video, photo, carousel, story, ad, and campaign content assets based on the agreed system.",
    },
    {
      step: "07",
      title: "CALENDAR & PUBLISHING LOGIC",
      desc: "We organize content into a practical calendar, sequence, campaign rhythm, and platform behavior.",
    },
    {
      step: "08",
      title: "REVIEW & OPTIMIZATION",
      desc: "We review clarity, consistency, engagement, content usefulness, and future improvement opportunities.",
    },
  ];

  const faqData = [
    {
      q: "Does your content team write copy manually or use AI generators?",
      a: "Everything is written manually. We do not write generic, predictable AI paragraphs. We conduct thorough customer interviews, competitive research, and strategic analysis to craft original, copywriter-level brand stories and highly persuasive scripts.",
    },
    {
      q: "Can you manage our ongoing social media content monthly?",
      a: "Yes. In addition to defining the strategy, we run a recurring Content Engine. This produces high-end graphic layout systems, vertical reels, talking-head videos, and customized carousels systematically scheduled inside a practical calendar.",
    },
    {
      q: "What are Content Pillars, and why are they necessary?",
      a: "Content Pillars are 3 to 4 core themes that represent your brand's authority, value, and client solutions. They organize your posting schedule, preventing you from sounding random or pushing generic sales pitches.",
    },
    {
      q: "What social platforms do you produce content for?",
      a: "We tailor layouts and aspect ratios for LinkedIn, Instagram, Facebook, YouTube, Shorts, and TikTok based on the campaign goal and the audience behavior.",
    },
  ];

  const contentStorytellingCapabilities = [
    {
      id: 1,
      anchorId: "copywriting-storytelling",
      chapter: "CHAPTER 01 // PERSUASIVE VERBAL COPY",
      title: "COPYWRITING & STORYTELLING",
      description:
        "We craft original and highly compelling sales copy, brand stories, website and landing page texts, persuasive script structures, and general communications language that make complicated service offerings easy to digest, trust, and choose over rivals.",
      competencyText: "PERSUASIVE VERBAL COPY",
      image: "/images/contant-story/COPYWRITING.jpg",
      imageAlt: "Copywriting and Storytelling",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Solves lead hesitation. Eliminates dull, predictable jargon by utilizing psychological emotional hooks, addressing actual customer friction, and organizing benefits down logical reading flows.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We craft original sales copy sheets, high-persuasion campaign texts, and corporate narrative overviews. By defining precise storyboard scripts and acoustic messaging templates, we ensure your message converts across all media formats.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "ICP Friction Point Analysis",
            "Headline & Hook Concept Drafting",
            "Interactive Body Copy Compilation",
            "CTA Alignment Fine-tuning",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Powers product landing page CTR optimization. Designed for services needing clear, professional ways to explain complex solutions without boring the target prospect.",
        },
      ],
    },
    {
      id: 2,
      anchorId: "content-strategy-content-system",
      chapter: "CHAPTER 02 // COMMUNICATIONS ARCHITECTURE",
      title: "CONTENT STRATEGY & CONTENT SYSTEM",
      description:
        "We build bulletproof content foundations. We define strategic Content Pillars, devise practical publishing schedules, outline target platforms, and organize templates to keep monthly assets consistent and purposeful.",
      competencyText: "COMMUNICATIONS ARCHITECTURE",
      image: "/images/contant-story/CONTENTSTRATEGY.jpg",
      imageAlt: "Content Strategy and Content System",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Overcomes active feed fatigue. Sets a logical direction for monthly assets so that teams stop outputting random posts and instead build long-term, compounding brand equity.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We establish core content pillar structures, long-term topic generation matrices, and unified publishing calendars. This framework ensures internal groups operate systematically under a single strategic connection model.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Brand Communication Mapping",
            "Customer Objections Discovery",
            "Pillar Mapping & Content Formulas",
            "Calendar Grid Lock-in",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Allows internal marketing groups to operate on decentralized sync frameworks. Essential for category leaders needing continuous B2B authority building on active social scales.",
        },
      ],
    },
    {
      id: 3,
      anchorId: "social-media-content-production-graphic",
      chapter: "CHAPTER 03 // GRAPHICS SYSTEM & LAYOUTS",
      title: "SOCIAL MEDIA CONTENT PRODUCTION (GRAPHIC)",
      description:
        "We construct professional social layouts, educational sliding carousels, dynamic stories, campaign templates, and ad graphics designed under unified grid systems.",
      competencyText: "GRAPHICS SYSTEM & LAYOUTS",
      image: "/images/contant-story/SOCIALGRAPHIC.jpg",
      imageAlt: "Social Media Content Production Graphic",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Prevents visual chaos or cheap-looking templated visuals on active feeds, elevating overall company status and authority during lead checks.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We engineer custom multi-slide carousels, campaign storyboards, and high-persuasion ad graphics. Built inside standardized color and grid rules, every layout contributes to overall brand authority.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Brand Colors & Grids Configuration",
            "Vector Element Design Runs",
            "High-persuasion Typographic Styling",
            "Platform Sandbox File Exports",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Gives real estate, wellness clinic, or advisory networks high-end graphic consistency on daily timelines.",
        },
      ],
    },
    {
      id: 4,
      anchorId: "social-media-content-production-video-photo",
      chapter: "CHAPTER 04 // PLATFORM REELS & VIDEO ASSETS",
      title: "SOCIAL MEDIA CONTENT PRODUCTION (VIDEO/PHOTO)",
      description:
        "We produce high-performing platform video assets, professional product shoots, company atmosphere photography, and unified cover grids.",
      competencyText: "PLATFORM REELS & VIDEO ASSETS",
      image: "/images/contant-story/SOCIALVIDEOPHOTO.jpg",
      imageAlt: "Social Media Content Production Video and Photo",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Feeds social mobile recommendation algorithms natively through clear visual transitions, paced edits, clear captions, and strong brand placement.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We capture high-pacing vertical Reels and corporate atmosphere B-roll, styled with dynamic captions and cohesive timeline covers.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Shot Script & Concept Hooking",
            "Light & Framing Capture Session",
            "Dynamic Caption Addition & Pacing Edit",
            "Cover & Thumbnail Finalization",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Ideal for founders wanting cohesive personal-brand authority, product launches needing visual action, or service clinics building trust.",
        },
      ],
    },
  ];

  return (
    <div
      className="service-page bg-[#0a0a0a] min-h-screen text-white"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      {/* HERO زي Services */}
      <section
        className="unified-page-hero"
        style={{ "--hero-bg": "url('/images/contant-story/cover.png')" }}
      >
        <div className="unified-page-hero-content">
          <h1 className="unified-page-title">
            CONTENT &<br /> STORYTELLING
          </h1>

          <p className="unified-page-desc">
            — Narrative and visual content assets designed to turn brand ideas,
            services, and audience insights into a clear, active, and persuasive
            communication system.
          </p>
        </div>
      </section>

      {/* What it means */}
      <section className="bg-[#0a0a0a] text-white py-[90px] px-[8%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-7">
            <p className="text-[#0f33fe] font-black tracking-[3px] mb-4 text-[12px] uppercase">
              Narrative Systems
            </p>

            <h2 className="text-[32px] md:text-[46px] font-black mb-7 leading-[1.12] tracking-[-0.03em] uppercase">
              What Content & Storytelling Means
            </h2>

            <p className="text-gray-400 mb-14 text-[16px] leading-[1.85] max-w-2xl">
              Content is not just text on a screen or visual clutter on social
              media. It is the persistent, cumulative voice of your company.
              HEIKARO creates complete content environments that combine
              copywriting, editorial storytelling, custom graphic systems, and
              strategic photography and video into a single powerful narrative
              ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>

              {[
                {
                  icon: "🎯",
                  title: "Content Strategy",
                  desc: "We define what the brand should say, why it should say it, and how content should support business goals.",
                },
                {
                  icon: "🖼️",
                  title: "Storytelling & Copywriting",
                  desc: "We turn brand value, offers, ideas, and expertise into words, stories, hooks, scripts, and messages that move people.",
                },
                {
                  icon: "🧭",
                  title: "Graphic Content Systems",
                  desc: "We create visual social media content that makes the brand look consistent, recognizable, and campaign-ready.",
                },
                {
                  icon: "↗️",
                  title: "Video & Photo Content",
                  desc: "We produce social video and photo assets that help the brand look active, credible, human, and ready for every platform.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative z-10 bg-[#0a0a0a] border border-[#222] p-7 hover:border-[#0f33fe] transition-all duration-300 group"
                >
                  <div className="mb-5 text-2xl text-[#bbfe0f]">
                    {item.icon}
                  </div>

                  <h4 className="text-white font-black text-[17px] mb-3 tracking-[-0.02em] uppercase group-hover:text-[#0f33fe] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-[15px] leading-[1.8]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#111] border border-[#222] h-[560px] sticky top-24 flex flex-col items-center justify-center p-8 text-center">
            <img
              src="/images/contant-story/What-Content.jpg"
              alt="Content and Storytelling"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-[#0a0a0a] text-white py-[90px] px-[8%] border-t border-[#111]">
        <div className="text-center mb-14">
          <p className="text-[#ff3b30] font-black tracking-[3px] text-[12px] uppercase mb-4">
            Erosion of Conversion
          </p>

          <h2 className="text-[32px] md:text-[46px] font-black max-w-3xl mx-auto leading-[1.12] tracking-[-0.03em] uppercase">
            Why Most Corporate Content Fails to Engage
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-[16px] leading-[1.85]">
            When brand content is deployed as random generic updates without
            central positioning logic, attention is destroyed. Visitors do not
            understand what makes you different:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Content is posted without a clear strategy or underlying customer journey purpose.",
            "The brand does not know what to say consistently, falling into random posting patterns.",
            "Posts look active but do not build brand value, client authority, or pricing power.",
            "Captions and headlines feel generic, sounding like generic AI outputs.",
            "Social media visuals are inconsistent and lack aligned layout grids.",
            "Videos and photos feel random, disconnected from commercial campaigns and product positioning.",
            "Content ideas run out quickly, putting stress on internal marketing departments.",
            "Campaign content lacks a central message, confusing buyers stepping through the funnel.",
          ].map((text, index) => (
            <div
              key={index}
              className="border border-[#222] p-7 hover:border-[#333] transition-colors bg-[#0f0f0f]"
            >
              <div className="text-[#ff3b30] font-mono text-[15px] mb-4">
                [{String(index + 1).padStart(2, "0")}]
              </div>

              <p className="text-gray-400 text-[15px] leading-[1.8]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-18 text-center max-w-3xl mx-auto">
          <p className="text-[#bbfe0f] font-black tracking-[2px] uppercase text-[14px] leading-[1.8]">
            Without message systems, your active feeds look like visual noise.
            Connection comes purely from strategic storytelling guidelines.
          </p>
        </div>
      </section>

      {/* Target Partners */}
      <section className="bg-[#0a0a0a] text-white py-[90px] px-[8%]">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#0f33fe] font-black tracking-[3px] text-[12px] uppercase mb-4">
            Target Partners
          </p>

          <h2 className="text-[32px] md:text-[46px] font-black mb-6 leading-[1.12] tracking-[-0.03em] uppercase">
            Who This Service Is For
          </h2>

          <p className="text-gray-400 text-[16px] leading-[1.85]">
            Formulating structured verbal and artistic patterns to help
            expanding teams project authority and drive campaign conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="relative p-7 border border-[#222] bg-[#0a0a0a] overflow-hidden group cursor-pointer transition-colors hover:border-[#333]"
            >
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0f33fe] transition-all duration-500 group-hover:w-full"></div>

              <div className="text-[#0f33fe] font-mono text-[13px] mb-4">
                {step.num}
              </div>

              <h4 className="text-white font-black text-[19px] mb-4 uppercase tracking-[-0.02em]">
                {step.title}
              </h4>

              <p className="text-gray-500 text-[15px] leading-[1.8]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Included Capabilities */}
      <section className="bg-[#0a0a0a] text-white py-[95px] px-[8%] border-t border-[#111]">
        <div className="text-center mb-16">
          <p className="text-[#bbfe0f] font-black tracking-[4px] text-[12px] uppercase mb-5">
            CAPABILITIES SPECTRUM
          </p>

          <h2 className="text-[36px] md:text-[58px] font-black leading-[1.05] tracking-[-0.04em] text-white">
            Included Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group min-h-[360px] border border-[#222] bg-[#080808] p-8 flex flex-col justify-between hover:border-[#0f33fe] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="text-[#8da2c0] text-[13px] font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[#8da2c0] text-2xl group-hover:text-[#0f33fe] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    ↗
                  </span>
                </div>

                <h3 className="text-white text-[18px] leading-[1.3] font-black mb-5 tracking-[-0.02em] group-hover:text-[#0f33fe] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#8b9bb3] text-[15px] leading-[1.75]">
                  {item.desc}
                </p>
              </div>

              <div className="pt-7 mt-8 border-t border-[#222]">
                <p className="text-[#bbfe0f] text-[13px] leading-[1.5] font-black">
                  Explore this capability in detail
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Details */}
      <CapabilitiesSection
        id="capabilities-section"
        eyebrow="CONTENT & STORYTELLING"
        title="Capabilities In Detail"
        cards={contentStorytellingCapabilities}
      />

      {/* Complete system includes */}
      <section className="bg-[#0a0a0a] text-white py-[90px] px-[8%] border-t border-[#111]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-4">
            <p className="text-[#0f33fe] font-black tracking-[3px] text-[12px] uppercase mb-4">
              OPERATIONAL ARCHITECTURE
            </p>

            <h2 className="text-[32px] md:text-[46px] font-black leading-[1.12] tracking-[-0.03em] uppercase mb-7">
              What A Complete Content System Includes
            </h2>

            <p className="text-gray-400 text-[16px] leading-[1.85]">
              We handle every detail of the message matrix, designing and
              building elements to perform synchronously. A complete system
              aligns strategy, usability, conversion, structure, and code.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Brand Story Framework",
              "Target Segment Psychological Insights",
              "Message Architecture Map",
              "Content Pillars Strategy",
              "Tone of Voice Playbooks",
              "Core Content Formats Design",
              "Copywriting Execution Guidelines",
              "Storytelling Angle Directories",
              "Campaign Messaging Systems",
              "Consolidated Content Calendars",
              "Graphic Layout Assets System",
              "Video / Photo Production Briefs",
              "Social Platform Layout Adaptations",
              "CTA Funnel Logic Rules",
              "Sales-Support Copy Templates",
              "Authority Educational Modules",
              "Audit & Analytics Reviews",
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#222] p-5 bg-[#0f0f0f] hover:border-[#333] transition-colors"
              >
                <p className="text-white text-[15px] leading-[1.65] font-semibold">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0a0a0a] text-white py-[90px] px-[8%] border-t border-[#111]">
        <div className="text-center mb-14">
          <p className="text-[#bbfe0f] font-black tracking-[3px] text-[12px] uppercase mb-4">
            SYSTEMATIC STORYTELLING
          </p>

          <h2 className="text-[32px] md:text-[46px] font-black max-w-3xl mx-auto leading-[1.12] tracking-[-0.03em] uppercase">
            How We Produce Copy & Social Assets
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-[16px] leading-[1.85]">
            Our 8-step operating process ensures strategic alignment from visual
            blueprint to final developer sign-off and site launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-[#222]">
          {operationalSteps.map((step, index) => (
            <div
              key={index}
              className="relative border-r border-b border-[#222] p-7 overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#bbfe0f] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

              <div className="relative z-10">
                <p className="text-[#0f33fe] group-hover:text-black font-mono text-[12px] font-black uppercase tracking-[2px] mb-5 transition-colors duration-300">
                  STEP {step.step}
                </p>

                <h3 className="text-white group-hover:text-black font-black text-[16px] uppercase leading-[1.35] mb-4 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-500 group-hover:text-black/70 text-[15px] leading-[1.75] transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0a0a0a] text-white py-[90px] px-[8%] border-t border-[#111]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <div className="w-12 h-12 border border-[#0f33fe] flex items-center justify-center mb-6">
              <span className="text-[#0f33fe] text-xl">?</span>
            </div>

            <p className="text-[#0f33fe] font-black tracking-[3px] text-[12px] uppercase mb-4">
              FAQS
            </p>

            <h2 className="text-[32px] md:text-[46px] font-black mb-6 leading-[1.12] tracking-[-0.03em] uppercase">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-400 text-[16px] leading-[1.85]">
              Got questions on content systems, social media production, or
              storytelling strategy? Explore answers here.
            </p>
          </div>

          <div className="lg:col-span-8">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-[#222]">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-7 text-left hover:text-[#0f33fe] transition-colors"
                >
                  <span className="font-black text-[18px] leading-[1.5]">
                    {item.q}
                  </span>

                  <span className="ml-4 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-48 opacity-100 pb-7"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 text-[16px] leading-[1.85]">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-[90px] px-[8%] text-center">
        <div className="text-[#0f33fe] font-black tracking-[4px] text-[12px] uppercase mb-6">
          Content Performance
        </div>

        <h1 className="text-[34px] md:text-[56px] font-black text-white mb-7 leading-[1.12] tracking-[-0.04em] uppercase">
          Build An Effective Content System
        </h1>

        <p className="text-gray-400 text-[16px] md:text-[18px] max-w-2xl mx-auto mb-11 leading-[1.85]">
          Stop publishing disconnected visual noise. Partner with HEIKARO to
          design and execute a highly strategic, compounding storytelling
          environment for your audience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-[#0f33fe] text-white px-8 py-4 font-black uppercase tracking-[1.8px] text-[13px] hover:bg-white hover:text-black transition-all duration-300"
          >
            START YOUR EXPERIENCE BRIEF →
          </Link>

          <Link
            to="/services"
            className="bg-transparent border border-[#333] text-white px-8 py-4 font-black uppercase tracking-[1.8px] text-[13px] hover:bg-white hover:text-black transition-all duration-300"
          >
            BROWSE ALL SERVICES
          </Link>
        </div>
      </section>

      <StartWithClarity />
    </div>
  );
}
