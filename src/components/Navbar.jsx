import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaBehance,
  FaYoutube,
} from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Navbar.css";
import MegaMenu from "./MegaMenu";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (showServices || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showServices, mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth <= 768) return;

    clearTimeout(timeoutRef.current);
    setShowServices(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth <= 768) return;

    timeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 150);
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Heikaro" className="logo" />
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <div
            className="nav-item-services"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/services" className="nav-link services-trigger">
              SERVICES{" "}
              {showServices ? (
                <FaChevronUp size={10} />
              ) : (
                <FaChevronDown size={10} />
              )}
            </NavLink>
          </div>

          <NavLink to="/portfolio" className="nav-link">
            Portfolio
          </NavLink>

          <NavLink to="/blogs" className="nav-link">
            Blog
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>

        {showServices && (
          <div
            className="mega-menu-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <MegaMenu />
          </div>
        )}

        <div className="social-icons">
          <a
            href="https://www.facebook.com/heikaro.agency/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/heikaro.agancy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/heikaro_agancy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.behance.net/heikaroagancy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>

          <a
            href="https://www.youtube.com/@Heikaro.Agancy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.linkedin.com/company/heikaro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <button
          type="button"
          className={`hamburger-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "show" : ""}`}
        onClick={closeMobileMenu}
      />

      <aside className={`mobile-side-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <NavLink to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Heikaro" className="mobile-logo" />
          </NavLink>

          <button
            type="button"
            className="mobile-close-btn"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="mobile-nav-links">
          <NavLink to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            About
          </NavLink>

          <button
            type="button"
            className="mobile-nav-link mobile-services-btn"
            onClick={() => setMobileServicesOpen((prev) => !prev)}
          >
            <span>Services</span>
            {mobileServicesOpen ? (
              <FaChevronUp size={12} />
            ) : (
              <FaChevronDown size={12} />
            )}
          </button>

          {mobileServicesOpen && (
            <div className="mobile-services-box">
              <MegaMenu />
            </div>
          )}

          <NavLink
            to="/portfolio"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/blogs"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className="mobile-nav-link"
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </div>

        <div className="mobile-social-icons">
          <a
            href="https://www.facebook.com/heikaro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/heikaro.agancy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/heikaro_agancy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.behance.net/heikaroagancy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>

          <a
            href="https://www.youtube.com/@Heikaro.Agancy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.linkedin.com/company/heikaro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
