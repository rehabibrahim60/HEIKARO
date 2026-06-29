import WhyEventsFallFlat from "../components/EventsExperiential/WhyEventsFallFlat";
import SpatialNarratives from "../components/EventsExperiential/SpatialNarratives";
import CapabilitiesSection from "../components/capabilities/CapabilitiesSection";
import IncludedCapabilities from "../components/common/IncludedCapabilities";
import StartWithClarity from "../components/common/START_WITH_CLARITY";
import EventPackIncludes from "../components/EventsExperiential/EventPackIncludes";
import EventsFAQ from "../components/EventsExperiential/Eventsfaq";
import EventsCTA from "../components/EventsExperiential/Eventscta";
import "./style/pageHero.css";

export default function EventsExperiential() {
  const eventsCapabilities = [
    {
      id: "01",
      title: "Event Strategy & Concept",
      desc: "Define the event objective, creative idea, audience journey, experience structure, and strategic direction.",
      tag: "Strategic event blueprints",

      anchor: "event-strategy-concept",
    },
    {
      id: "02",
      title: "Corporate Events",
      desc: "Design professional corporate experiences for teams, partners, clients, leadership, launches, and internal culture.",
      tag: "Enterprise event systems",

      anchor: "corporate-events",
    },
    {
      id: "03",
      title: "Exhibitions & Booths",
      desc: "Create exhibition and booth experiences that attract visitors, explain value, guide interaction, and support sales.",
      tag: "Trade show & expo builds",

      anchor: "exhibitions-booths",
    },
    {
      id: "04",
      title: "Experiential Activations",
      desc: "Build live brand activations that turn audience participation into memorable brand moments.",
      tag: "Live brand experiences",
      anchor: "experiential-activations",
    },
    {
      id: "05",
      title: "Conferences",
      desc: "Develop conference experiences with strong agendas, stage logic, content flow, and participant journeys.",
      tag: "Summit & speaker programs",

      anchor: "conferences",
    },
    {
      id: "06",
      title: "Product Launch Events",
      desc: "Create launch experiences that introduce products, build anticipation, explain value, and generate market attention.",
      tag: "Launch event productions",

      anchor: "product-launch-events",
    },
    {
      id: "07",
      title: "Cultural & Development Events",
      desc: "Design cultural, social, public, community, NGO, institutional, and development-focused events with meaningful narratives.",
      tag: "Community & cultural programs",

      anchor: "cultural-development-events",
    },
    {
      id: "08",
      title: "Hybrid & Digital Events",
      desc: "Create digital and hybrid event experiences that connect physical and remote audiences through content and interaction.",
      tag: "Digital event platforms",

      anchor: "hybrid-digital-events",
    },
  ];

  const eventManagementCapabilities = [
    {
      id: 1,
      anchorId: "event-strategy-concept",
      chapter: "CHAPTER 01 // STRATEGIC PROGRAMMING",
      title: "Event Strategy & Concept",
      description:
        "Defining high-value targets, brand narratives, spatial configurations, and visual concept blueprints before physical setups begin. We build concrete plans to make sure every event touches its commercial target.",
      competencyText: "EXPERIENTIAL MASTER PLANS",
      image: "/images/event/EVENTSTRATEGY.jpg",

      imageAlt: "Event Strategy & Concept",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Anchors all event decisions to key objectives, brand mandates, and operational KPI causing downstream improvements to attendance conversion paths.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We map interactive guest journeys, storyboard and messaging guidelines, and balance guest placement guidelines. We complete an operational KPI scoring directive.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Commercial Objectives Review",
            "Attention & Report Drafting",
            "Scenic Special Personas",
            "Operational Control Handover",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Creates clarity that aligns all production decisions across multiple production centers. Applied when launching new event ranges, flagship locations, or expanding product-brand formats.",
        },
      ],
    },
    {
      id: 2,
      anchorId: "corporate-events",
      chapter: "CHAPTER 02 // ENTERPRISE SOLUTION FRAMEWORKS",
      title: "Corporate Events",
      description:
        "Designing and orchestrating professional corporate summits, culture galas, board summits, and partner networking networks. We weave corporate brand standards seamlessly into fluid, high-engagement room agendas.",
      competencyText: "PREMIUM EVENTS & GALAS",
      image: "/images/event/CORPRATEEVENTS.jpg",
      imageAlt: "Corporate Events",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Powers and amplifies. Positions motivational pride, builds trusted relations, and showcases optimal event scales clearly.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We design, format, communicate, flow motion slides to budget promotional, and structure room leadership design. Every event is designed with integrated high-performance.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Internal Mission Flow planning",
            "Executive Logistics Location",
            "Agenda Panel Setup",
            "Stage Control Preparation",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Develops higher conversion partnership success. Ideal when executing annual board meetings, leadership workshops, or financial annual summits.",
        },
      ],
    },
    {
      id: 3,
      anchorId: "exhibitions-booths",
      chapter: "CHAPTER 03 // TRADE HALL SHOWCASE",
      title: "Exhibitions & Booths",
      description:
        "Building premium, structurally optimized exhibition stands, booth architecture, wayfinding systems, and interactive panels that stand out from adjacent trade-hall noise.",
      competencyText: "BESPOKE EXHIBITION STANDS",
      image: "/images/event/BOOTHS.jpg",
      imageAlt: "Exhibitions & Booths",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "All-in-event pushing high-visitor foot traffic. Frees real marketing exhibition outputs by actively drawing inbound conversion paths.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We render detailed outputs for 3D CAD blueprints, wayfinding system designing guidelines, and signage conversion graphs.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Booth Footprint Analysis",
            "3D Spatial & Signage Mapping",
            "Lighting & Storytelling Mapping",
            "Setup Guidance Documentation",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Increases booth foot traffic leads and audience retention. Vital for manufacturers, pharmaceutical companies, and product agencies at key trade shows.",
        },
      ],
    },
    {
      id: 4,
      anchorId: "experiential-activations",
      chapter: "CHAPTER 04 // ACTIVE AUDIENCE INTERACTION",
      title: "Experiential Activations",
      description:
        "We code and deploy physical interactive experiences that compel visitors to touch, configure, and share elements. We create memorable physical brand loops designed to foster audience participation.",
      competencyText: "UNIVERSAL BRAND ACTIVATIONS",
      image: "/images/event/ACTIVATIONS.jpg",
      imageAlt: "Experiential Activations",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Triggers and boosts. Maximizes audience positivity, transforming audience members into active live contributors and promoters of the brand.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We offer comprehensive activation playbooks, responsive engagement layouts, and interactive participation systems.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Brand Meeting Loop Setup",
            "Physical Outcome Prototyping",
            "Gate-to-Venue Integration",
            "Operational Floor Validation",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Generates significant social media reach. Applied for brand launching activation stories, flagship exhibitions, or high-media discovery campaigns.",
        },
      ],
    },
    {
      id: 5,
      anchorId: "conferences",
      chapter: "CHAPTER 05 // MULTI-DAY AGENDA PACING",
      title: "Conferences",
      description:
        "Developing multi-day summit experiences. We set key panel segments, construct speaker slide guidelines, map stage visual sequences, and schedule networking blocks.",
      competencyText: "STRUCTURED PANEL ORCHESTRATION",
      image: "/images/event/CONFERENCES.jpg",
      imageAlt: "Conferences",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Expands and sustains. Positions regional leadership and drives scaled venue outcomes towards multi-category leadership.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We plan stage agendas, multi-room content flows, speaker structures, and conference pacing systems.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Plenary Directions Formulator",
            "Speakers Agenda Tabulation Plans",
            "Multi-room Television Collections",
            "Operational Control Rigging",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Drives meaningful on-session attendee outcomes. Ideal for tech road-ins, industrial association presentations, or financial and consulting services.",
        },
      ],
    },
    {
      id: 6,
      anchorId: "product-launch-events",
      chapter: "CHAPTER 06 // PRODUCT DROPS REVELATION",
      title: "Product Launch Events",
      description:
        "Creating a product launch reveal that introduces investors, builds immersive anticipation, highlights key product benefits, and commands market attention.",
      competencyText: "HIGH-IMPACT REVEALS",
      image: "/images/event/PRODUCTLANCH.jpg",
      imageAlt: "Product Launch Events",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Captures conversion precision for launch moments through measurable outcomes, media channels, and commercial reveal systems.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We stage and optimize launch contexts for media, product storytelling, audience segmentation, and press distribution.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Theatrical Launch Flow Boarding",
            "Cinematic Runway Mapping",
            "Multi-zone Television Collections",
            "Digital Press Distribution",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Applied where every audience needs a live preview, strong visual retention, and press coverage for new commercial product launches.",
        },
      ],
    },
    {
      id: 7,
      anchorId: "cultural-development-events",
      chapter: "CHAPTER 07 // INSTITUTIONAL STORYTELLING",
      title: "Cultural & Development Events",
      description:
        "Designing public social forums, community, NGO, and cause-focused programs combining impactful storytelling with smooth logistics.",
      competencyText: "NARRATIVE SOCIAL SPACES",
      image: "/images/event/CULTURAL.jpg",
      imageAlt: "Cultural and Development Events",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Connects with institutional values and community goals. Positions marketable narratives within community spaces and drives name mentions.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We design multi-cultural interactive formats, backdrop layouts, audio logistics, and partner-focused community themes.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Social Target Presentations",
            "Backstage Agenda Blueprints",
            "Ambient Team Lighting Configuration",
            "Partner Integration Logs",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Boosts public support and donor funding targets. Powerful for cultural associations and global institutions in social initiatives.",
        },
      ],
    },
    {
      id: 8,
      anchorId: "hybrid-digital-events",
      chapter: "CHAPTER 08 // DISTRIBUTED NEXT STREAMS",
      title: "Hybrid & Digital Events",
      description:
        "Developing seamless virtual portals, interactive keynote streams, dynamic spatial Q&A lobbies, and real-time remote voting interfaces.",
      competencyText: "EPIC VIRTUAL PLATFORMS",
      image: "/images/event/HYBRID.jpg",
      imageAlt: "Hybrid and Digital Events",
      imagePosition: "right",
      details: [
        {
          title: "01 // STRATEGIC ROLE",
          text: "Reaches and multiplies. Enables spatial broadcasts and bridges global places with remote groups for seamless cross-country streaming.",
        },
        {
          title: "02 // HOW HEIKARO APPROACHES IT",
          text: "We build digital agenda pages, synchronized streaming outputs, multi-channel visualizations, and interactive toolbar features.",
        },
        {
          title: "03 // EXECUTION FLOW",
          list: [
            "Virtual Channel References",
            "Tandem Audio & Vision Balancing",
            "Live Chat & Poll Systems Setup",
            "Performance Log Stats",
          ],
        },
        {
          title: "04 // OUTCOMES & USE CASES",
          text: "Raises live-virtual simultaneous capacity. Effective for strategy seminars, medical multi-location events, or international commercial ventures.",
        },
      ],
    },
  ];

  return (
    <div
      className="service-page events-experiential-page bg-[#0a0a0a] min-h-screen text-white"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <style>
        {`
          .events-experiential-page,
          .events-experiential-page * {
            font-family: "Aspekta", sans-serif !important;
          }

          .events-experiential-page h1 {
            font-size: clamp(44px, 6vw, 78px) !important;
            line-height: 0.95 !important;
            font-weight: 900 !important;
            letter-spacing: -0.04em !important;
            text-transform: uppercase !important;
          }

          .events-experiential-page h2 {
            font-size: clamp(34px, 4.2vw, 52px) !important;
            line-height: 1.12 !important;
            font-weight: 900 !important;
            letter-spacing: -0.035em !important;
            text-transform: uppercase !important;
          }

          .events-experiential-page h3,
          .events-experiential-page h4 {
            font-size: 21px !important;
            line-height: 1.3 !important;
            font-weight: 900 !important;
            letter-spacing: -0.02em !important;
            text-transform: uppercase !important;
          }

          .events-experiential-page p {
            font-size: 18px !important;
            line-height: 1.9 !important;
            font-weight: 500 !important;
          }

          .events-experiential-page li {
            font-size: 16px !important;
            line-height: 1.8 !important;
          }

          .events-experiential-page .text-sm,
          .events-experiential-page [class*="text-sm"] {
            font-size: 16px !important;
            line-height: 1.85 !important;
          }

          .events-experiential-page .text-xs,
          .events-experiential-page [class*="text-xs"] {
            font-size: 13px !important;
            line-height: 1.5 !important;
            font-weight: 900 !important;
          }

          .events-experiential-page .text-lg,
          .events-experiential-page [class*="text-lg"] {
            font-size: 18px !important;
            line-height: 1.9 !important;
          }

          .events-experiential-page a p {
            font-size: 16px !important;
            line-height: 1.85 !important;
          }

          .events-experiential-page a h3 {
            font-size: 20px !important;
            line-height: 1.3 !important;
          }

          .events-experiential-page a,
          .events-experiential-page button {
            font-size: 14px !important;
            font-weight: 900 !important;
            letter-spacing: 1.5px !important;
          }

          @media (max-width: 768px) {
            .events-experiential-page h1 {
              font-size: clamp(38px, 11vw, 56px) !important;
            }

            .events-experiential-page h2 {
              font-size: 31px !important;
            }

            .events-experiential-page h3,
            .events-experiential-page h4 {
              font-size: 19px !important;
            }

            .events-experiential-page p {
              font-size: 16px !important;
              line-height: 1.8 !important;
            }

            .events-experiential-page .text-sm,
            .events-experiential-page [class*="text-sm"] {
              font-size: 15px !important;
            }
          }
        `}
      </style>

      {/* HERO زي Services */}
      <section
        className="unified-page-hero"
        style={{ "--hero-bg": "url('/images/event/COVER.jpg')" }}
      >
        <div className="unified-page-hero-content">
          <h1 className="unified-page-title">
            EVENTS &<br /> EXPERIENTIAL
          </h1>

          <p className="unified-page-desc">
            — Live experience systems designed to transform events, activations,
            exhibitions, and launches into strategic audience moments.
          </p>
        </div>
      </section>

      <SpatialNarratives />
      <WhyEventsFallFlat />

      {/* Included Capabilities - بدون صور */}
      {/* <section className="bg-[#0a0a0a] text-white py-[95px] px-[8%] border-t border-[#111]">
        <div className="text-center mb-16">
          <p className="text-[#bbfe0f] font-black tracking-[4px] text-[12px] uppercase mb-5">
            CAPABILITIES SPECTRUM
          </p>

          <h2 className="text-[36px] md:text-[58px] font-black leading-[1.05] tracking-[-0.04em] text-white">
            Included Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {eventsCapabilities.map((item) => (
            <a
              key={item.id}
              href={`#${item.anchor}`}
              className="group min-h-[360px] border border-[#222] bg-[#080808] p-8 flex flex-col justify-between hover:border-[#0f33fe] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <span className="text-[#8da2c0] text-[13px] font-mono">
                    {item.id}
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
                  {item.tag}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section> */}

      <IncludedCapabilities
        label="CAPABILITIES SPECTRUM"
        title="Included Capabilities"
        capabilities={eventsCapabilities}
      />

      <CapabilitiesSection
        id="event-capabilities-section"
        eyebrow="TACTICAL EVENTS"
        title="Capabilities In Detail"
        cards={eventManagementCapabilities}
      />

      <EventPackIncludes />
      <EventsFAQ />
      <EventsCTA />
      <StartWithClarity />
    </div>
  );
}
