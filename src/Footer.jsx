import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaLinkedinIn, FaBehance } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* العمود الأول: اللوجو والوصف */}
        <div className="footer-col logo-col">
          <h1 className="footer-logo">HEIKARO</h1>
          <p>HEIKARO is a premium creative agency connecting brand strategy, visual identity, UX/UI design, media production, and AI-powered storytelling into one unified growth operating system for global brands.</p>
          <div className="footer-social">
            <FaFacebookF /><FaInstagram /><FaXTwitter /><FaYoutube /><FaLinkedinIn /><FaBehance />
          </div>
        </div>

        {/* العمود الثاني: الروابط */}
        <div className="footer-col">
          <h3>COMPANY</h3>
          <ul>
            <li>Home</li><li>About</li><li>Portfolio</li><li>Journal (Blog)</li><li>Contact</li>
          </ul>
        </div>

        {/* العمود الثالث: الخدمات */}
       <div className="footer-col">
        <h3>FAMILIES</h3>
        <ul>
            {[
            "Brand & Identity",
            "Design & Experience",
            "Content & Storytelling",
            "Marketing & Growth",
            "Media & Production",
            "Digital Learning Experience",
            "AI-Powered Video & CGI",
            "Events & Experiential"
            ].map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        </div>

        {/* العمود الرابع: معلومات الاتصال */}
        <div className="footer-col">
          <h3>CONTACT</h3>
          <p>EMAIL:<br/><strong>HALLO@HEIKARO.COM</strong></p>
          <p>LOCATION:<br/><strong>CAIRO, EGYPT</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;