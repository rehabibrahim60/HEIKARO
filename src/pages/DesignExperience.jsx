import React, { useState } from "react";
import { Link } from "react-router-dom";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import "./style/pageHero.css";
import CapabilitiesSection from "../components/capabilities/CapabilitiesSection";

export default function DesignExperience() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      id: "s1",
      title: "UX & UI Service",
      desc: "Design user journeys, interfaces, screens, flows, and product structures that make digital experiences clearer, easier, and more trusted.",
    },
    {
      id: "s2",
      title: "Website Design & Development",
      desc: "Create premium responsive websites that combine clear structure, strong visual hierarchy, fast performance, and conversion-ready pages.",
    },
    {
      id: "s3",
      title: "App Design & Development",
      desc: "Design mobile and web application flows with clear screens, interaction logic, reusable components, and smooth user behavior.",
    },
    {
      id: "s4",
      title: "Landing Pages / Conversion UX",
      desc: "Build focused landing pages designed around one clear campaign goal, one strong message, and one measurable user action.",
    },
  ];

  const servicesData = [
    {
      id: "s1",
      chapter: "CHAPTER 01 // VALUE PROPOSITION",
      title: "UX & UI Service",
      desc: "We map precise user journey loops, organize information architectures, build low-fidelity interactive wireframes for performance testing, and design gorgeous, high-contrast, brand-aligned interfaces that make digital products clear and confidence-inspiring.",
      img: "/hero-bg.jpg.jpeg",
      items: [
        {
          n: "01",
          t: "STRATEGIC ROLE",
          d: "Minimizes onboarding friction and drops abandonment rates by aligning visual weights natively with user-retention targets. Brings aesthetic order to convoluted application data dashboards.",
        },
        {
          n: "02",
          t: "HOW HEIKARO APPROACHES IT",
          d: "We create interactive interface layouts and fully detailed user flow maps inside Figma. By designing comprehensive component systems and testing mobile-responsive scales, we deliver clear, developer-ready structures.",
        },
        {
          n: "03",
          t: "EXECUTION FLOW",
          d: (
            <ul className="list-disc pl-5 m-0 space-y-2">
              <li>Target Audience Exploration</li>
              <li>Navigation Blueprint Outline</li>
              <li>Interactive Greyscale Prototype Run</li>
              <li>Elite Visual Element Styling</li>
            </ul>
          ),
        },
        {
          n: "04",
          t: "OUTCOMES & USE CASES",
          d: "Creates bulletproof SaaS layouts ready for dev handoff. Critical for tech founders needing to pitch clear product flows or traditional firms modernizing customer portals.",
        },
      ],
    },
    {
      id: "s2",
      chapter: "CHAPTER 02 // WEB DEVELOPMENT SYSTEMS",
      title: "Website Design & Development",
      desc: "We construct ultra-fast responsive corporate sites. By combining beautiful SEO structure with lightweight components, we make sure your primary digital window ranks quickly while keeping the experience friction-free and conversion-centric.",
      img: "/hero-bg.jpg.jpeg",
      items: [
        {
          n: "01",
          t: "STRATEGIC ROLE",
          d: "Functions as the central anchor of your digital marketing setup. Establishes commercial status, highlights authority case studies, and drives corporate lead generation.",
        },
        {
          n: "02",
          t: "HOW HEIKARO APPROACHES IT",
          d: "We build lightweight React and Tailwind web deployments with clean structure, analytics logic, responsive layouts, and fast-load optimization for elite performance.",
        },
        {
          n: "03",
          t: "EXECUTION FLOW",
          d: (
            <ul className="list-disc pl-5 m-0 space-y-2">
              <li>Site-Map Content Outlining</li>
              <li>Widescreen & Tablet UI Proofing</li>
              <li>Semantic Code Compilation</li>
              <li>Performance Optimization Checks</li>
            </ul>
          ),
        },
        {
          n: "04",
          t: "OUTCOMES & USE CASES",
          d: "Maintains high-speed load profiles to support paid traffic runs. Designed for scale-ups re-engineering outdated web designs to capture credibility.",
        },
      ],
    },
    {
      id: "s3",
      chapter: "CHAPTER 03 // MOBILE & WEB-APP SYSTEMS",
      title: "App Design & Development",
      desc: "Structuring native and cross-platform application matrices. We guide user experiences through micro-interaction designs, secure form frameworks, system grids, and database sync processes.",
      img: "/hero-bg.jpg.jpeg",
      items: [
        {
          n: "01",
          t: "STRATEGIC ROLE",
          d: "Drives persistent product utility. Keeps customers loyal by packaging interactive features, operations flows, and account management in a secure, intuitive mobile environment.",
        },
        {
          n: "02",
          t: "HOW HEIKARO APPROACHES IT",
          d: "We prototype app interactions using touch-target guidelines and structured inputs. By styling mobile form behaviors and coding device-ready layouts, we build stable systems.",
        },
        {
          n: "03",
          t: "EXECUTION FLOW",
          d: (
            <ul className="list-disc pl-5 m-0 space-y-2">
              <li>Experience Roadmap Setup</li>
              <li>Standard Touch-Target Mapping</li>
              <li>Micro-Interaction Modeling</li>
              <li>Device Sandbox Compilation</li>
            </ul>
          ),
        },
        {
          n: "04",
          t: "OUTCOMES & USE CASES",
          d: "Standardizes user flows to limit customer support inquiries. Suited for premium services, logistics agencies, and product startups launching active betas.",
        },
      ],
    },
    {
      id: "s4",
      chapter: "CHAPTER 04 // TARGET CONVERSION ENGINES",
      title: "Landing Pages / Conversion UX",
      desc: "We engineer hyper-focused campaign landing environments. By stripping unnecessary options, amplifying value hierarchies, and structuring clear lead captures, we turn traffic into action.",
      img: "/hero-bg.jpg.jpeg",
      items: [
        {
          n: "01",
          t: "STRATEGIC ROLE",
          d: "Improves advertising return on investment. Isolates target offerings to eliminate user choice overload and direct attention down the conversion funnel.",
        },
        {
          n: "02",
          t: "HOW HEIKARO APPROACHES IT",
          d: "We design high-converting single-pages with multi-step conversion forms and robust lead intake processes, creating clear CTA paths that translate traffic into bookings.",
        },
        {
          n: "03",
          t: "EXECUTION FLOW",
          d: (
            <ul className="list-disc pl-5 m-0 space-y-2">
              <li>Campaign Goal Alignment</li>
              <li>Distraction Stripping Run</li>
              <li>Conversion Copy Drafting</li>
              <li>Fast-load Build Packaging</li>
            </ul>
          ),
        },
        {
          n: "04",
          t: "OUTCOMES & USE CASES",
          d: "Maximizes cost-per-acquisition performance. Crucial for teams running Google Search ads, social media campaigns, or limited product pre-sales.",
        },
      ],
    },
  ];

  const stepsData = [
    {
      num: "01",
      title: "DISCOVERY & AUDIT",
      desc: "Understanding the business goals, current assets, user challenges, and target audience behavior.",
    },
    {
      num: "02",
      title: "EXPERIENCE STRATEGY",
      desc: "Defining user personas, mapping user journeys, choosing key flows, and establishing conversion targets.",
    },
    {
      num: "03",
      title: "INFORMATION ARCHITECTURE",
      desc: "Creating the site map, defining page structures, naming navigation items, and outlining content flow.",
    },
    {
      num: "04",
      title: "STRUCTURAL WIREFRAMING",
      desc: "Building black-and-white layouts to test navigation usability, reading hierarchy, and element weight without styling.",
    },
    {
      num: "05",
      title: "INTERFACE DESIGN",
      desc: "Designing premium visual layouts, selecting custom colors and fonts, and styling elements around HEIKARO's high-contrast style.",
    },
    {
      num: "06",
      title: "DESIGN SYSTEM CREATION",
      desc: "Standardizing components, buttons, fields, icons, and sections into a reusable visual system for scale.",
    },
    {
      num: "07",
      title: "TECHNICAL DEVELOPMENT",
      desc: "Coding experiences with clean, responsive, fast-loading, SEO-structured, and motion-interactive systems.",
    },
    {
      num: "08",
      title: "QUALITY ASSURANCE & LAUNCH",
      desc: "Testing across screen sizes, validating form integrations, analyzing speed optimization, and going live.",
    },
  ];

  const faqData = [
    {
      q: "Do you build custom websites or use general templates?",
      a: "Everything is built from scratch. We do not use generic templates. We construct tailor-made digital designs in Figma and compile them into fast-loading, SEO-optimized React/Vite interfaces or custom clean codebases.",
    },
    {
      q: "What is a Design System, and why is it included?",
      a: "A Design System is a single-source-of-truth library of digital assets, color variables, typography scales, buttons, form fields, and layout cards. It helps developers move faster while maintaining brand consistency.",
    },
    {
      q: "Do you design for both mobile devices and desktop monitors?",
      a: "Yes. Every experience is engineered with responsive fluidity, adapting layout densities, font dimensions, and interactive button sizes for mobile touch targets and desktop hover states.",
    },
    {
      q: "How do you optimize digital page loading speeds?",
      a: "We avoid bulky plugins, optimize images, lazy load assets, structure clean HTML tags, and use lightweight CSS frameworks to keep pages fast and searchable.",
    },
  ];

  const uxUiCapabilities = [
    {
      id: 1,
      anchorId: "ux-ui-service",
      chapter: "CHAPTER 01 // VALUE PROPOSITION",
      title: "UX & UI SERVICE",
      description:
        "We map precise user journey loops, organize information architectures, build low-fidelity interactive wireframes for performance testing, and design gorgeous, high-contrast, brand-aligned interfaces that make digital products clear and confidence-inspiring.",
      competencyText: "USER EXPERIENCE & INTERFACE SYSTEMS",
      image: "/images/design-exp/UIUX.jpg",
      imageAlt: "UX and UI Service",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Minimizes onboarding friction and drops abandonment rates by aligning visual weights natively with user-retention targets. Brings aesthetic order to convoluted application data dashboards.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We create interactive interface layouts and fully detailed user flow maps inside Figma. By designing comprehensive component systems and testing mobile-responsive modules, we deliver clear, developer-ready structures.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Target Audience Exploration",
            "Navigation Blueprint Outline",
            "Interactive Greyscale Prototype Run",
            "Elite Visual Element Styling",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Creates bulletproof SaaS layouts ready for dev handoff. Critical for tech founders needing to pitch clear product flows or traditional firms modernizing customer portals.",
        },
      ],
    },
    {
      id: 2,
      anchorId: "website-design-development",
      chapter: "CHAPTER 02 // WEB DEVELOPMENT SYSTEMS",
      title: "WEBSITE DESIGN & DEVELOPMENT",
      description:
        "We construct ultra-fast responsive corporate sites. By combining beautiful SEO structure with lightweight components, we make sure your primary digital window ranks quickly while keeping the experience friction-free and conversion-centric.",
      competencyText: "RESPONSIVE WEBSITE SYSTEMS",
      image: "/images/design-exp/WEBSITE.jpg",
      imageAlt: "Website Design and Development",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Functions as the central anchor of your digital marketing setup. Establishes commercial status, highlights authority case studies, and drives corporate lead generation.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We build lightweight React and Tailwind web deployments with clean structure, analytics logic, responsive layouts, and fast-load optimization for elite performance.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Site-Map Content Outlining",
            "Widescreen & Tablet UI Proofing",
            "Semantic Code Compilation",
            "Performance Optimization Checks",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Maintains high-speed lead profiles to support paid traffic runs. Designed for scale-ups re-engineering outdated web designs to capture credibility.",
        },
      ],
    },
    {
      id: 3,
      anchorId: "app-design-development",
      chapter: "CHAPTER 03 // MOBILE & WEB-APP SYSTEMS",
      title: "APP DESIGN & DEVELOPMENT",
      description:
        "Structuring native and cross-platform application matrices. We guide user experiences through micro-interaction designs, secure form frameworks, system grids, and database sync processes.",
      competencyText: "MOBILE & WEB-APP SYSTEMS",
      image: "/images/design-exp/APPDESIGN.jpg",
      imageAlt: "App Design and Development",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Drives persistent product utility. Keeps customers loyal by packaging interactive features, operations flows, and account management in a secure, intuitive mobile environment.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We prototype app interactions using touch-target guidelines and structured inputs. By styling mobile form behaviors and coding device-ready layouts, we build stable systems.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Experience Roadmap Setup",
            "Standard Touch-Target Mapping",
            "Micro-Interaction Modeling",
            "Device Sandbox Compilation",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Standardizes user flows to limit customer support inquiries. Suited for premium services, logistics agencies, and product startups launching active betas.",
        },
      ],
    },
    {
      id: 4,
      anchorId: "landing-pages-conversion-ux",
      chapter: "CHAPTER 04 // TARGET CONVERSION ENGINES",
      title: "LANDING PAGES / CONVERSION UX",
      description:
        "We engineer hyper-focused campaign landing environments. By stripping unnecessary options, amplifying value hierarchies, and structuring clear lead captures, we turn traffic into action.",
      competencyText: "CONVERSION-FOCUSED LANDING PAGES",
      image: "/images/design-exp/LANDINGPAGE.jpg",
      imageAlt: "Landing Pages and Conversion UX",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Improves advertising return on investment. Isolates target offerings to eliminate user choice overload and direct attention down the conversion funnel.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We design high-converting single-pages with multi-step conversion forms and robust lead intake processes, creating clear CTA paths that translate traffic into bookings.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Campaign Goal Alignment",
            "Distraction Stripping Run",
            "Conversion Copy Drafting",
            "Fast-Load Build Packaging",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Maximizes cost-per-acquisition performance. Crucial for teams running Google Search ads, social media campaigns, or limited product pre-sales.",
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
        style={{ "--hero-bg": "url('/images/design-exp/COVER.jpg')" }}
      >
        <div className="unified-page-hero-content">
          <h1 className="unified-page-title">
            DESIGN &<br /> EXPERIENCE
          </h1>

          <p className="unified-page-desc">
            — Digital experience systems designed to turn websites, apps,
            interfaces, and landing pages into clear, usable, and
            conversion-ready brand touchpoints.
          </p>
        </div>
      </section>

      {/* What it means */}
      <section className="bg-[#0a0a0a] text-white py-[90px] px-[8%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-7">
            <p className="text-[#0f33fe] font-black tracking-[3px] mb-4 text-[12px] uppercase">
              CLARITY & ACTION
            </p>

            <h2 className="text-[32px] md:text-[46px] font-black mb-7 leading-[1.12] tracking-[-0.03em] uppercase">
              What Design & Experience Means
            </h2>

            <p className="text-gray-400 mb-14 text-[16px] leading-[1.85] max-w-2xl">
              Digital design is not just the surface of a screen. It is the way
              users move, understand, decide, and act. HEIKARO builds digital
              experiences that combine UX strategy, interface design, website
              structure, app flows, landing page conversion, content hierarchy,
              and responsive execution into one clear experience system.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>

              {[
                {
                  icon: "🎯",
                  title: "USER EXPERIENCE STRATEGY",
                  desc: "We define how users move through the experience, what they need to understand, and what should happen next.",
                },
                {
                  icon: "🖼️",
                  title: "INTERFACE & VISUAL DESIGN",
                  desc: "We design clean, premium, brand-aligned interfaces that make digital products easier to use and trust.",
                },
                {
                  icon: "🧭",
                  title: "WEBSITE & APP SYSTEMS",
                  desc: "We structure websites and apps around navigation, content, responsiveness, performance, and real user behavior.",
                },
                {
                  icon: "↗️",
                  title: "CONVERSION EXPERIENCE",
                  desc: "We design landing pages, CTAs, forms, trust sections, and decision flows that support measurable action.",
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
              src="/images/design-exp/What-Design.jpg"
              alt="Design and Experience"
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
            Why Most Digital Experiences Do Not Convert
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-[16px] leading-[1.85]">
            When a website or app is built as simple screen layouts without
            structured conversion logic, user behavior suffers. Friction and
            lack of clarity drive visitors away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "The website or app looks outdated, weak, or does not match the company's real value.",
            "Users arrive on the website or app but get confused about what the company actually offers.",
            "Navigation is complicated, requiring too many clicks or thinking to find basic details.",
            "Key messages are lost in large blocks of text without visual hierarchy or clear reading flow.",
            "The interface is difficult to use, with buttons, forms, and elements that look broken on mobile devices.",
            "Visitors do not know what actions to take because calls-to-action are weak, hidden, or confusing.",
            "Users start registration, purchase, or booking systems but drop off before finishing.",
            "The digital product has no design system, leading to inconsistent panels, pages, or components.",
            "The interface has no trust indicators, making potential clients hesitate to submit inquiries.",
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

        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-[#bbfe0f] font-black tracking-[2px] uppercase text-[14px] leading-[1.8]">
            WHEN DIGITAL DESIGN HAS NO EXPERIENCE LOGIC, ATTENTION DISAPPEARS.
            HEIKARO BUILDS DIGITAL EXPERIENCES THAT TURN CLARITY, TRUST, AND
            USABILITY INTO ACTION.
          </p>
        </div>
      </section>

      {/* Included Capabilities - بدون صور */}
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
        eyebrow="DESIGN & EXPERIENCE"
        title="Capabilities In Detail"
        cards={uxUiCapabilities}
      />

      {/* Complete system includes */}
      <section className="bg-[#0a0a0a] text-white py-[90px] px-[8%] border-t border-[#111]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-4">
            <p className="text-[#0f33fe] font-black tracking-[3px] text-[12px] uppercase mb-4">
              OPERATIONAL ARCHITECTURE
            </p>

            <h2 className="text-[32px] md:text-[46px] font-black leading-[1.12] tracking-[-0.03em] uppercase mb-7">
              What A Complete Experience System Includes
            </h2>

            <p className="text-gray-400 text-[16px] leading-[1.85]">
              We handle every detail of the interface matrix, designing and
              building elements to perform synchronously. A complete system
              aligns strategy, usability, conversion, structure, and code.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Business Objective Setup",
              "User Persona Modeling",
              "User Journey Flowmapping",
              "Information Architecture",
              "Navigation System Mapping",
              "Responsive Wireframing",
              "Interface Styleboards",
              "Dynamic Component Design",
              "Design System Creation",
              "Responsive Testing",
              "Desktop Grid Mapping",
              "Micro-Interactions Design",
              "Lead Capture Funnel Design",
              "Trust Section Layout",
              "SEO Structure Verification",
              "Performance Checks",
              "Developer Package Hand-off",
              "Conversion Optimization Monitoring",
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

      {/* 8-step section */}
      <section className="bg-[#0a0a0a] text-white py-[90px] px-[8%]">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#0f33fe] font-black tracking-[3px] text-[12px] uppercase mb-4">
            SYSTEMATIC ENGINEERING
          </p>

          <h2 className="text-[32px] md:text-[46px] font-black mb-6 leading-[1.12] tracking-[-0.03em] uppercase">
            How We Build Digital Experiences
          </h2>

          <p className="text-gray-400 text-[16px] leading-[1.85]">
            Our 8-step operating process ensures strategic alignment from visual
            blueprint to final developer sign-off and site launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="relative p-7 border border-[#222] bg-[#0a0a0a] overflow-hidden group cursor-pointer transition-colors hover:border-[#333]"
            >
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0f33fe] transition-all duration-500 group-hover:w-full"></div>

              <div className="text-[#0f33fe] font-mono text-[13px] mb-4">
                {step.num}
              </div>

              <h4 className="text-white font-black text-[17px] leading-[1.35] mb-4 uppercase">
                {step.title}
              </h4>

              <p className="text-gray-500 text-[15px] leading-[1.8]">
                {step.desc}
              </p>
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
              Got questions on Figma design templates, mobile scaling setups, or
              fast load optimizations? Explore answers here.
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
          STRUCTURED USABILITY
        </div>

        <h1 className="text-[34px] md:text-[56px] font-black text-white mb-7 leading-[1.12] tracking-[-0.04em] uppercase">
          CREATE FLUID DIGITAL <br /> EXPERIENCES
        </h1>

        <p className="text-gray-400 text-[16px] md:text-[18px] max-w-2xl mx-auto mb-11 leading-[1.85]">
          Transform outdated platforms. HEIKARO helps you design and build web
          experiences structured purely for high speed, absolute clarity, and
          maximum action rates.
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
