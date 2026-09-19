import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="container nav-container">
        {/* Monogram Logo */}
        <a href="#home" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="gradient-text">AC</span>
          <span className="logo-slash">/</span>
          <span className="logo-bracket">&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className={`nav-links ${menuOpen ? 'nav-links-mobile-open' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a></li>
          <li>
            <a 
              href="#contact" 
              className="btn btn-primary nav-contact-btn" 
              onClick={() => setMenuOpen(false)}
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`menu-bar ${menuOpen ? 'bar-top' : ''}`}></span>
          <span className={`menu-bar ${menuOpen ? 'bar-mid' : ''}`}></span>
          <span className={`menu-bar ${menuOpen ? 'bar-bot' : ''}`}></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
