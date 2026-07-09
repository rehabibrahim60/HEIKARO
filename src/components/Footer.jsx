import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa6";
import logo from "../assets/Logo.png";

const socialLinks = [
  { href: "https://www.facebook.com/heikaro.agency/", icon: <FaFacebookF /> },
  { href: "https://www.instagram.com/heikaro.agancy/", icon: <FaInstagram /> },
  { href: "https://x.com/heikaro_agancy", icon: <FaXTwitter /> },
  { href: "https://www.youtube.com/@Heikaro.Agancy", icon: <FaYoutube /> },
  { href: "https://www.linkedin.com/company/heikaro/", icon: <FaLinkedinIn /> },
  { href: "https://www.behance.net/heikaroagancy", icon: <FaBehance /> },
];

const families = [
  { href: "/services/brand-identity", item: "Brand & Identity" },
  { href: "/services/design-experience", item: "Design & Experience" },
  { href: "/services/content-storytelling", item: "Content & Storytelling" },
  { href: "/services/marketing-growth", item: "Marketing & Growth" },
  { href: "/services/media-production", item: "Media & Production" },
  {
    href: "/services/digital-learning-experience",
    item: "Digital Learning Experience",
  },
  { href: "/services/ai-video-cgi", item: "AI-Powered Video & CGI" },
  { href: "/services/events-experiential", item: "Events & Experiential" },
];

const pages = [
  { href: "/", item: "Home" },
  { href: "/about", item: "About" },
  { href: "/portfolio", item: "Portfolio" },
  { href: "/blogs", item: "Journal (Blog)" },
  { href: "/contact", item: "Contact" },
];

const legalLinks = [{ href: "/privacy-policy", item: "Privacy Policy" }];

const Footer = () => {
  return (
    <footer
      className="site-footer mt-0 bg-[#0a0a0a] px-[5%] pt-12 pb-7 text-white border-t border-white/10"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_1.5fr] lg:gap-16">
          {/* Logo and description */}
          <div className="flex flex-col gap-4">
            <img
              src={logo}
              alt="Heikaro"
              className="mb-4 h-9 w-auto object-contain self-start"
            />

            <p className="max-w-[430px] text-[16px] font-medium leading-[1.85] text-[#a0a0a0]">
              HEIKARO is a premium creative agency connecting brand strategy,
              visual identity, UX/UI design, media production, and AI-powered
              storytelling into one unified growth operating system for global
              brands.
            </p>

            <div className="mt-2 flex gap-5">
              {socialLinks.map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] text-[#a0a0a0] transition-colors duration-300 hover:text-[#0f33fe]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-[14px] font-black uppercase tracking-[2px] text-white">
              Company
            </h3>

            <ul className="flex list-none flex-col gap-4 p-0 m-0">
              {pages.map(({ item, href }) => (
                <li key={item}>
                  <Link
                    to={href}
                    className="text-[15px] font-medium text-[#a0a0a0] transition-colors duration-300 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-[14px] font-black uppercase tracking-[2px] text-white">
              Services
            </h3>

            <ul className="flex list-none flex-col gap-4 p-0 m-0">
              {families.map(({ item, href }) => (
                <li key={item}>
                  <Link
                    to={href}
                    className="text-[15px] font-medium text-[#a0a0a0] transition-colors duration-300 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="mb-6 text-[14px] font-black uppercase tracking-[2px] text-white">
              Contact
            </h3>

            <p className="mb-5 text-[15px] font-medium leading-[1.8] text-[#a0a0a0]">
              EMAIL:
              <br />
              <strong className="text-[15px] font-black text-white">
                HALLO@HEIKARO.COM
              </strong>
            </p>

            <p className="text-[15px] font-medium leading-[1.8] text-[#a0a0a0]">
              LOCATION:
              <br />
              <strong className="text-[15px] font-black text-white">
                CAIRO, EGYPT
              </strong>
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left quote */}
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#4f5f7a]">
              "We don't sell tasks. We build systems."
            </p>

            {/* Legal links + copyright */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {legalLinks.map(({ href, item }) => (
                  <Link
                    key={item}
                    to={href}
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f5f7a] transition-colors duration-300 hover:text-white"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4f5f7a]">
                © 2026 HEIKARO
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
