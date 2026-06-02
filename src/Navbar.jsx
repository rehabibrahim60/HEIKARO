import React from "react";
import { NavLink } from "react-router-dom"; 
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaBehance, FaYoutube } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">HEIKARO</div>
      
      <div className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
        <NavLink to="/blog" className="nav-link">Blog</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>

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