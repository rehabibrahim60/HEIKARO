import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaBehance, FaYoutube } from "react-icons/fa6";
import "./Navbar.css";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const timeoutRef = React.useRef(null);  // ← أضفناها هنا

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowServices(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 150);
  };

  return (
    <nav className="navbar">
      <div className="logo">HEIKARO</div>

      <div className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>

        <div
          className="nav-item-services"
          onMouseEnter={handleMouseEnter}   // ← بدّلناها
          onMouseLeave={handleMouseLeave}   // ← بدّلناها
        >
          <span className="nav-link services-trigger">
            SERVICES {showServices ? "∧" : "∨"}
          </span>
        </div>

        <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
        <NavLink to="/blog" className="nav-link">Blog</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>

      {showServices && (
        <div
          className="mega-menu-wrapper"
          onMouseEnter={handleMouseEnter}   // ← بدّلناها
          onMouseLeave={handleMouseLeave}   // ← بدّلناها
        >
          <MegaMenu />
        </div>
      )}

      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="https://www.behance.net/heikaroagancy" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
    </nav>
  );
};

export default Navbar;