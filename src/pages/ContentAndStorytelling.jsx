import React from 'react';
import StartWithClarity from '../components/common/START_WITH_CLARITY';


export default function ContentAndStorytelling() {
  const [openIndex, setOpenIndex] = React.useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
      
   const stepsData = [
    {  title: "Startups", desc: "That need a clear brand story and launch content to build immediate market trust." },
    {  title: "Service businesses", desc: "That need stronger explanation and trust-building authority content to stand out." },
    {  title: "Active brands", desc: "Posting often but without clear direction, feeling like they are speaking to no one." },
    { title: "Growth companies", desc: "Needing a consistent, streamlined structure for monthly social media content." },
    { title: "Campaign initiators", desc: " Launching campaigns, offers, products, or services that require a unified voice." },
    {  title: "Founders & Leaders", desc: "Building executive authority and personal brand narratives through deep expertise." },
  ];
   const services = [
    { id: "s1",title: "Copywriting & Storytelling", desc: "Create persuasive copy, brand stories, campaign messages, website copy, scripts, and content language that makes the brand easier to understand and believe.", image: "/hero-bg.jpg.jpeg" },
    {id: "s2", title: "Content Strategy & Content System", desc: "Build the strategic content foundation: content pillars, audience mapping, message frameworks, content calendars, formats, and execution briefs.", image: "/path-to-image.jpg" },
    { id: "s3",title: "Social Media Content Production (Graphic)", desc: "Produce graphic social media content systems including posts, carousels, stories, campaign visuals, ad graphics, and visual content packs.", image: "/path-to-image.jpg" },
    { id: "s4",title: "Social Media Content Production (Video/Photo)", desc: "Produce video and photo content for social platforms including reels, product shoots, brand shoots, campaign content, stories, covers, and monthly content libraries.", image: "/path-to-image.jpg" }
  ];
  const servicesData = [
    {
      id: "s1",
      chapter: "CHAPTER 01 // PERSUASIVE VERBAL COPY",
      title: "Copywriting & Storytelling",
      desc: "We craft original and highly compelling sales copy, brand stories, website and landing page texts, persuasive script structures, and general communications language that make complicated service offerings easy to digest, trust, and choose over rivals.",
      img: "/hero-bg.jpg.jpeg",
      items: [
        { n: "01", t: "STRATEGIC ROLE", d: " Solves lead hesitation. Eliminates dull, predictable jargon by utilizing psychological emotional hooks, addressing actual customer friction, and organizing benefits down logical reading flows." },
        { n: "02", t: "How HEIKARO Approaches It", d: " We craft original sales copy sheets, high-persuasion campaign texts, and corporate narrative overviews. By defining precise storyboard scripts and acoustic messaging templates, we ensure your message converts across all media formats." },
        { n: "03", t: "Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li> ICP Friction Point Analysis</li>
        <li> Headline & Hook Concept Drafting</li>
        <li> Interactive Body Copy Compilation</li>
        <li>CTA Alignment Fine-tuning</li>
        </ul>
    ) },
        { n: "04", t: "Outcomes & Use Cases", d: "Powers product landing page CTR optimization. Designed for services needing clear, professional ways to explain complex solutions without boring the target prospect." }
      ]
    },
    {
    id: "s2",
    chapter: "CHAPTER 02 // COMMUNICATIONS ARCHITECTURE",

    title: "Content Strategy & Content System",
    desc: "We build bulletproof content foundations. We define strategic Content Pillars (Awareness, Authority, Trust, Proof), devise practical publishing schedules, outline target platforms, and organize templates to keep monthly assets consistent and purposeful.",
    img: "../public/identity.jpg",
    items: [
       { n: "01", t: "STRATEGIC ROLE", d: "Overcomes active feed fatigue. Sets a logical direction for monthly assets so that teams stop outputting random posts and instead build long-term, compounding brand equity." },


      { n: "02", t: " How HEIKARO Approaches It", d: "We establish core content pillar structures, long-term topic generation matrices, and unified publishing calendars. This framework ensures internal groups operate systematically under a single strategic connection model.." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Brand Communication Mapping</li>
        <li>Customer Objections Discovery</li>
        <li>Pillar Mapping & Content Formulasn</li>
        <li> Calendar Grid Lock-in</li>
       </ul>
    ) },
     { n: "04", t: " Outcomes & Use Cases", d: "Allows internal marketing groups to operate on decentralized sync frameworks. Essential for category leaders needing continuous B2B authority building on active social scales." },

    ]
  },
  {
    id: "s3",
    chapter: "CHAPTER 03 // GRAPHICS SYSTEM & LAYOUTS",
    title: "Social Media Content Production (Graphic)",
    desc: "We construct professional social layouts, educational sliding carousels, dynamic stories, campaign templates, and ad graphics designed under unified grid systems. This ensures that every visual piece of content reinforces your primary brand pedigree.",
    img: "../public/identity.jpg",
    items: [
       { n: "01", t: "STRATEGIC ROLE", d: " Averages out audience perception peaks. Prevents visual chaos or cheap-looking templated visuals on active feeds, elevating overall company status and authority during lead checks." },


      { n: "02", t: " How HEIKARO Approaches It", d: " We engineer custom multi-slide carousels, campaign storyboards, and high-persuasion ad graphics. Built inside standardized color and grid rules, every layout contributes to overall brand authority." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Brand Colors & Grids Configuration</li>
        <li> Vector Element Design Runs</li>
        <li>High-persuasion Typographic Styling</li>
        <li> Platform Sandbox File Exports</li>
       </ul>
    ) },
     { n: "04", t: " Outcomes & Use Cases", d: "Stiffens conversion paths across paid promotions. Gives real estate, wellness clinic, or advisory networks high-end graphic consistency on daily timelines." },

    ]
  },
  {
    id: "s4",
    chapter: "CHAPTER 04 // PLATFORM REELS & VIDEO ASSETS",


    title: "Social Media Content Production (Video/Photo)",

    desc: "We produce high-performing platform video assets (Reels, Shorts, Tik-Toks), professional product mock shoots, company atmospheres photography, and unified cover grids, keeping your brand feeds active and modern.",
    img: "../public/identity.jpg",
    items: [
       { n: "01", t: "STRATEGIC ROLE", d: "Feeds social mobile recommendation algorithms natively. Unlocks viral reach through clean visual transitions, paced edits, clear captions, and strong brand placement." },


      { n: "02", t: " How HEIKARO Approaches It", d: " We capture high-pacing vertical Reels and corporate atmosphere B-roll, styled with dynamic caption additions and cohesive timeline covers. We turn standard footage into algorithm-optimized media assets." },
      { n: "03", t: " Execution Flow", d: (
      <ul style={{ paddingLeft: "15px", margin: 0 }}>
        <li>Shot Script & Concept Hooking</li>
        <li>Light & Framing Capture Session</li>
        <li>  Dynamic Caption Addition & Pacing Edit</li>
        <li> Cover & Thumbnail Finalization</li>
       </ul>
    ) },
     { n: "04", t: " Outcomes & Use Cases", d: "Generates dynamic digital awareness. Ideal for founders wanting cohesive personal-brand authority, product launches needing visual action, or service clinics building trust." },

    ]
  },
    ];
    const operationalSteps = [
  {  title: "BRAND & AUDIENCE UNDERSTANDING", desc: "We study the brand, audience, offer, services, market, platforms, current content, and communication gaps." },
  {  title: "MESSAGE STRATEGY", desc: "We define what the brand must communicate, what the audience needs to understand, and what messages should lead to trust and action." },
  {  title: "CONTENT PILLAR DEVELOPMENT", desc: "We organize content into themes such as awareness, education, trust, proof, conversion, storytelling, community, and campaigns." },
  {  title: "STORYTELLING & COPY DIRECTION", desc: "We shape the brand story, hooks, captions, scripts, headlines, CTAs, and verbal rhythm." },
  { title: "CONTENT PRODUCTION PLANNING", desc: "We define what needs to be written, designed, photographed, filmed, edited, and adapted for each platform." },
  { title: "VISUAL & FORMAT EXECUTION", desc: "We produce graphic, video, photo, carousel, story, ad, and campaign content assets based on the agreed system." },
  {  title: "CALENDAR & PUBLISHING LOGIC", desc: "We organize content into a practical calendar, sequence, campaign rhythm, and platform behavior." },
  {  title: "REVIEW & OPTIMIZATION", desc: "We review clarity, consistency, engagement, content usefulness, and future improvement opportunities." },
];
 const faqData = [
  { q: "Does your content team write copy manually or use AI generators?", a: "Everything is written manually. We do not write generic, predictable AI paragraphs. We conduct thorough customer interviews, competitive research, and strategic analysis to craft original, copywriter-level brand stories and highly persuasive scripts." },
  { q: "Can you manage our ongoing social media content monthly?", a: "Yes. In addition to defining the strategy, we run a recurring Content Engine. This produces high-end graphic layout systems, vertical reels, talking-head videos, and customized carousels systematically scheduled inside a practical calendar." },
  { q: "What are Content Pillars, and why are they necessary?", a: "Content Pillars are 3 to 4 core themes that represent your brand's authority, value, and client solutions. They organize your posting schedule, preventing you from sounding random or pushing generic sales pitches, while maintaining clear educational and trust goals." },
  { q: "What social platforms do you produce content for?", a: "We tailor layouts and aspect ratios for all major business environments: LinkedIn for B2B authority building, Instagram/Facebook for lifestyle visual validation, and YouTube/Shorts/TikTok for dynamic viral campaign reach." }
];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      
      {/* 1. First section (Hero Section) */}
      <section className="relative w-full h-[80vh] flex items-center px-[8%] text-white overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/hero-bg.jpg.jpeg')" }} 
        ></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-[700px]">
          <span className="block text-[0.9rem] tracking-[4px] uppercase mb-5 border border-white px-4 py-2 w-fit">
           CONTENT OPERATING SYSTEMS
          </span>
          <h1 className="text-[5rem] leading-[0.9] text-[#0f33fe] font-extrabold mb-8">
           Content <br />  &
Storytelling
          </h1>
          <p className="text-[1.25rem] leading-relaxed text-gray-300">
           Narrative and visual content assets designed to turn brand ideas, services, and audience insights into a clear, active, and persuasive communication system.
          </p>
        </div>
      </section>
      <section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left column: text and services (7 columns) */}
        <div className="lg:col-span-7">
          <p className="text-[#0f33fe] font-bold tracking-[3px] mb-4 text-sm">Narrative Systems
</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1]">What Content & Storytelling Means</h2>
          <p className="text-gray-400 mb-16 text-lg leading-relaxed max-w-2xl">
            Content is not just text on a screen or visual clutter on social media. It is the persistent, cumulative voice of your company. HEIKARO creates complete content environments that combine copywriting, editorial storytelling, custom graphic systems, and strategic photography and video into a single powerful narrative ecosystem.
          </p>

          {/* Services grid (4 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Grid line background effect */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
            
            {[
              { icon: "🎯", title: "Content Strategy", desc: "We define what the brand should say, why it should say it, and how content should support business goals." },
              { icon: "🖼️", title: "Storytelling & Copywriting", desc: " We turn brand value, offers, ideas, and expertise into words, stories, hooks, scripts, and messages that move people." },
              { icon: "🧭", title: "Graphic Content Systems", desc: "We create visual social media content that makes the brand look consistent, recognizable, and campaign-ready." },
              { icon: "↗️", title: "Video & Photo Content", desc: "We produce social video and photo assets that help the brand look active, credible, human, and ready for every platform." }
            ].map((item, index) => (
              <div key={index} className="relative z-10 bg-[#0a0a0a] border border-[#222] p-8 hover:border-[#333] transition-all duration-300 group">
                <div className="mb-6 text-2xl text-[#bbfe0f]">{item.icon}</div>
                <h4 className="text-white font-bold text-sm mb-3 tracking-[1.5px] uppercase group-hover:text-[#0f33fe] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: image (5 columns) */}
        <div className="lg:col-span-5 bg-[#111] border border-[#222] h-[600px] sticky top-24 flex flex-col items-center justify-center p-10 text-center">
          
         <img src="/hero-bg.jpg.jpeg" /> 
        </div>

      </div>
    </section>
     <section className="bg-[#0a0a0a] text-white py-24 px-[8%] border-t border-[#111]">
  {/* Top heading */}
  <div className="text-center mb-16">
    <p className="text-[#ff3b30] font-bold tracking-[3px] text-xs uppercase mb-4">Erosion of Conversion</p>
    <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
      Why Most Corporate Content Fails to Engage
    </h2>
    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
      When brand content is deployed as random generic updates without central positioning logic, attention is destroyed. Visitors do not understand what makes you different:
    </p>
  </div>

  {/* Problems grid (3 columns) */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { num: "01", text: "Content is posted without a clear strategy or underlying customer journey purpose." },
      { num: "02", text: "The brand does not know what to say consistently, falling into random posting patterns." },
      { num: "03", text: "Posts look active but do not build brand value, client authority, or pricing power." },
      { num: "04", text: "Captions and headlines feel generic, sounding like generic AI outputs." },
      { num: "05", text: "Social media visuals are inconsistent and lack aligned layout grids." },
      { num: "06", text: "Videos and photos feel random, disconnected from commercial campaigns and product positioning." },
      { num: "07", text: "Content ideas run out quickly, putting stress on internal marketing departments." },
      { num: "08", text: "Campaign content lacks a central message, confusing buyers stepping through the funnel." },
    ].map((item, index) => (
      <div key={index} className="border border-[#222] p-8 hover:border-[#333] transition-colors bg-[#0f0f0f]">
        <div className="text-[#ff3b30] font-mono text-lg mb-4">[{item.num}]</div>
        <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>

  {/* Closing statement at the bottom */}
  <div className="mt-20 text-center max-w-3xl mx-auto">
    <p className="text-[#bbfe0f] font-bold tracking-[2px] uppercase text-sm leading-relaxed">
      Without message systems, your active feeds look like visual noise. Connection comes purely from strategic storytelling guidelines.
    </p>
  </div>
</section>
 <section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
  {/* Heading */}
<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
    <p className="text-[#0f33fe] font-bold tracking-[3px] text-xs uppercase mb-4">
      Target Partners
    </p>
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Who This Service Is For
    </h2>
    <p className="text-gray-400 text-lg leading-relaxed">
      Formulating structured verbal and artistic patterns to help expanding teams project authority and drive campaign conversions.
    </p>
  </div>

  {/* Grid - make sure stepsData is defined above */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {stepsData.map((step, index) => (
      <div 
        key={index} 
        className="relative p-8 border border-[#222] bg-[#0a0a0a] overflow-hidden group cursor-pointer transition-colors hover:border-[#333]"
      >
        {/* Blue line that moves on hover */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0f33fe] transition-all duration-500 group-hover:w-full"></div>
        
        <div className="text-[#0f33fe] font-mono text-xs mb-4">{step.num}</div>
        <h4 className="text-white font-bold text-lg mb-4">{step.title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
      </div>
    ))}
  </div>
</section>
<section className="bg-[#0a0a0a] text-white py-24 px-[8%]">
      {/* Heading */}
    <div className="mb-16 text-center flex flex-col items-center">
    <p className="text-[#0f33fe] font-bold tracking-[3px] text-xs uppercase mb-4">
      Unified Capabilities
    </p>
    <h2 className="text-4xl md:text-5xl font-bold">
      Included Capabilities
    </h2>
  </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((item, index) => (
          <div 
            key={index} 
            className="group border border-[#222] bg-[#111] transition-all duration-300 hover:border-[#0f33fe] cursor-pointer"
          >
            {/* Image */}
            <div className="h-[300px] w-full bg-[#1a1a1a] overflow-hidden">
              <img 
                src="/path-to-your-image.jpg" 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{item.desc}</p>
              
              {/* Interactive button */}
              {/* Replace the button div with this code */}
                <a 
                href={`#${item.id}`} // will navigate to the matching ID
                className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#0f33fe] transition-colors cursor-pointer"
                >
                Explore Capabilities <span className="ml-2">→</span>
                </a>
            </div>
          </div>
        ))}
      </div>
    </section>
     <div className="flex flex-col gap-24 py-20 px-[8%] bg-[#0a0a0a]">
        <div className="px-[8%] mb-16">
  <p className="text-[#0f33fe] font-bold tracking-[3px] text-xs uppercase mb-4">
    FUNCTIONAL EXPERIENCE ARCHITECTURE
  </p>
  <h2 className="text-4xl md:text-5xl font-bold text-white">
    Capabilities In Detail
  </h2>
</div>
  {servicesData.map((service) => (
    /* Added border and hover to the main section */
    <section 
    key={service.id} 
    id={service.id}
         className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border border-[#222] p-10 transition-all duration-300 hover:border-[#0f33fe] group"
    >
      
      {/* Left side (text) */}
      <div className="lg:col-span-7">
        <p className="text-[#bbfe0f] text-xs font-bold uppercase tracking-[2px] mb-4">{service.chapter}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">{service.title}</h2>
        <p className="text-gray-400 mb-12 text-lg leading-relaxed">{service.desc}</p>

        {/* Inner grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.items.map((item, idx) => (
            <div key={idx} className="border-l border-[#222] pl-6">
              <div className="text-white font-mono text-sm mb-2">{item.n} // {item.t}</div>
              <div className="text-gray-500 text-sm leading-relaxed">{item.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side (image) */}
      <div className="lg:col-span-5 h-[500px] sticky top-24">
        <img 
          src={service.img} 
          alt={service.title} 
          className="w-full h-full object-cover border border-[#222] transition-colors duration-300 group-hover:border-[#0f33fe]" 
        />
      </div>

    </section>
  ))}
</div>
<section className="bg-[#0a0a0a] text-white py-24 px-[8%] border-t border-[#111]">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
    
    {/* Left side: text */}
    <div className="lg:col-span-4">
      <p className="text-[#0f33fe] font-bold tracking-[3px] text-xs uppercase mb-4">
        OPERATIONAL ARCHITECTURE
      </p>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
       What A Complete Content System Includes
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed">
        We handle every detail of the message matrix, designing and building elements to perform synchronously. A complete system aligns strategy, usability, conversion, structure, and code.
      </p>
    </div>

    {/* Right side: services grid (3 columns × 5 rows) */}
    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        "Brand Story Framework", "Target Segment Psychological Insights", "Message Architecture Map",
        "Content Pillars Strategy", "Tone of Voice Playbooks", "Core Content Formats Design",
        "Copywriting Execution Guidelines", "Storytelling Angle Directories", "Campaign Messaging Systems",
        "Consolidated Content Calendars", "Graphic Layout Assets System", "Video / Photo Production Briefs",
        "Social Platform Layout Adaptations", "CTA Funnel Logic Rules", "Sales-Support Copy Templates",
        "Authority Educational Modules", "Audit & Analytics Reviews"
      ].map((item, index) => (
        <div 
          key={index} 
          className="border border-[#222] p-6 bg-[#0f0f0f] hover:border-[#333] transition-colors"
        >
          <p className="text-white text-sm font-medium">{item}</p>
        </div>
      ))}
    </div>
    
  </div>
</section>
<section className="bg-[#0a0a0a] text-white py-24 px-[8%] border-t border-[#111]">
  {/* Heading */}
  <div className="text-center mb-16">
    <p className="text-[#bbfe0f] font-bold tracking-[3px] text-xs uppercase mb-4">
      SYSTEMATIC STORYTELLING
    </p>
    <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
      How We Produce Copy & Social Assets
    </h2>
    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
      Our 8-step operating process ensures strategic alignment from visual blueprint to final developer sign-off and site launch.
    </p>
  </div>

  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-[#222]">
    {operationalSteps.map((step, index) => (
      <div
        key={index}
        className="relative border-r border-b border-[#222] p-8 overflow-hidden group cursor-pointer"
      >
        {/* Hover overlay moves from left to right */}
        <div className="absolute inset-0 bg-[#bbfe0f] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

        {/* Content */}
        <div className="relative z-10">
          <p className="text-[#0f33fe] group-hover:text-black font-mono text-xs font-bold uppercase tracking-[2px] mb-6 transition-colors duration-300">
            STEP {step.step}
          </p>
          <h3 className="text-white group-hover:text-black font-bold text-sm uppercase leading-tight mb-4 transition-colors duration-300">
            {step.title}
          </h3>
          <p className="text-gray-500 group-hover:text-black/70 text-sm leading-relaxed transition-colors duration-300">
            {step.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="bg-[#0a0a0a] text-white py-24 px-[8%] border-t border-[#111]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Title on the left */}
        <div className="lg:col-span-4">
          <div className="w-12 h-12 border border-[#0f33fe] flex items-center justify-center mb-6">
        <span className="text-[#0f33fe] text-xl">?</span>
      </div>
          <p className="text-[#0f33fe] font-bold tracking-[3px] text-xs uppercase mb-4">FAQS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Got questions on Figma design templates, mobile scaling setups, or fast load optimizations? Explore answers here.</p>
        </div>

        {/* Questions on the right */}
        <div className="lg:col-span-8">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#222]">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-8 text-left hover:text-[#0f33fe] transition-colors"
              >
                <span className="font-bold text-lg">{item.q}</span>
                <span className="ml-4 text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              
              {/* Answer details */}
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
      <section className="bg-[#0a0a0a] py-24 px-[8%] text-center">
  {/* Small top title */}
  <div className="text-[#0f33fe] font-bold tracking-[4px] text-xs uppercase mb-6">
   Content Performance
  </div>

  {/* Main title */}
  <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
    Build An Effective Content System
  </h1>

  {/* Description text */}
  <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
    Stop publishing disconnected visual noise. Partner with HEIKARO to design and execute a highly strategic, compounding storytelling environment for your audience.
  </p>

  {/* Buttons container */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    {/* First button - blue */}
    <a 
      href="/contact" 
      className="bg-[#0f33fe] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
    >
      START YOUR EXPERIENCE BRIEF →
    </a>

    {/* Second button - transparent with border */}
    <a 
      href="/services" 
      className="bg-transparent border border-[#333] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
    >
      BROWSE ALL SERVICES
    </a>
  </div>
</section>
      <StartWithClarity />

      {/* You can add upcoming sections here at the bottom */}

    </div>
  );
}
