import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <nav aria-label="Global" className="nav-container">
        {/* Logo Section */}
        <div className="logo-container">
          <a href="/" className="logo-link">
            <span className="sr-only">Hoshino Media</span>
            <img
              alt="Hoshino Media Logo"
              src="/img/logo_white.png"
              className="logo-img"
            />
          </a>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="menu-container">
          <button
            className="hamburger-button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="hamburger-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Apply Button for Desktop */}
        <div className="apply-container lg:flex">
          <a href="/apply" className="apply-button">
            Apply Now
          </a>
        </div>

        {/* Mobile Sidebar */}
        <div className={`mobile-sidebar ${isMenuOpen ? "open" : ""}`}>
          <button
            className="close-sidebar"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <nav className="mobile-nav">
            <a href="/apply" className="mobile-nav-link">
              Apply
            </a>
            {/* Add more navigation links if needed */}
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
