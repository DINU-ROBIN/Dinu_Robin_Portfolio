import React, { useState } from "react";
import { FaDownload, FaSpinner } from 'react-icons/fa';
import "./navbar.css"; // Import custom CSS
import { downloadResume } from '../services/resumeApi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home"); // Track active menu item
  const [isDownloading, setIsDownloading] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsOpen(false); // Close mobile menu when item is clicked
  };

  const handleResumeDownload = async (e) => {
    e.preventDefault();

    if (isDownloading) return; // Prevent multiple clicks

    setIsDownloading(true);
    setActiveItem("resume");
    setIsOpen(false); // Close mobile menu if open

    try {
      const result = await downloadResume();
      if (result.success) {
        console.log('Resume downloaded successfully');
        // Optional: Show success toast/notification
      } else {
        console.error('Failed to download resume:', result.error);
        alert('Failed to download resume. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while downloading the resume.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      {isOpen && <div className="navbar-overlay" onClick={toggleNavbar}></div>}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          {/* Left side navigation - Desktop only */}
          <div className="navbar-nav me-auto d-none d-lg-flex flex-row">
            <a
              className={`nav-link me-3 ${activeItem === "home" ? "active" : ""}`}
              href="#home"
              onClick={() => handleNavClick("home")}
            >
              Home
            </a>
            <a
              className={`nav-link me-3 ${activeItem === "about" ? "active" : ""}`}
              href="#about"
              onClick={() => handleNavClick("about")}
            >
              About Me
            </a>
            <a
              className={`nav-link ms-3 ${activeItem === "services" ? "active" : ""}`}
              href="#services"
              onClick={() => handleNavClick("services")}
            >
              Services
            </a>
          </div>

          {/* Center brand name */}
          <a className="navbar-brand mx-auto fw-bold fs-3" href="#home">
            DINU <span style={{ color: 'rgba(255, 100, 60, 1)' }}>ROBIN</span>
          </a>

          {/* Right side navigation - Desktop only */}
          <div className="navbar-nav ms-auto d-none d-lg-flex flex-row">
            <a
              className={`nav-link ms-3 ${activeItem === "resume" ? "active" : ""}`}
              href="#resume"
              onClick={handleResumeDownload}
              style={{
                cursor: isDownloading ? 'not-allowed' : 'pointer',
                opacity: isDownloading ? 0.7 : 1
              }}
            >
              {isDownloading ? "Downloading..." : "Resume"}
            </a>
            <a
              className={`nav-link ms-3 ${activeItem === "projects" ? "active" : ""}`}
              href="#projects"
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </a>
            <a
              className={`nav-link ms-3 ${activeItem === "contact" ? "active" : ""}`}
              href="#contact"
              onClick={() => handleNavClick("contact")}
            >
              Contact Me
            </a>
          </div>

          {/* Mobile toggle button - Mobile only */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu - slides from right - Mobile only */}
      <div
        className={`mobile-menu d-lg-none ${isOpen ? "mobile-menu-open" : ""}`}
        id="navbarNav"
      >
        <div className="mobile-menu-header">
          <h5 className="text-white mb-0">Menu</h5>
          <button
            className="btn-close btn-close-white"
            onClick={toggleNavbar}
            aria-label="Close menu"
          ></button>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className={`nav-link ${activeItem === "home" ? "active" : ""}`}
              href="#home"
              onClick={() => handleNavClick("home")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeItem === "about" ? "active" : ""}`}
              href="#about"
              onClick={() => handleNavClick("about")}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeItem === "services" ? "active" : ""}`}
              href="#services"
              onClick={() => handleNavClick("services")}
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeItem === "resume" ? "active" : ""}`}
              href="#resume"
              onClick={handleResumeDownload}
              style={{
                cursor: isDownloading ? 'not-allowed' : 'pointer',
                opacity: isDownloading ? 0.7 : 1
              }}
            >
              {isDownloading ? "Downloading..." : "Resume"}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeItem === "projects" ? "active" : ""}`}
              href="#projects"
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeItem === "contact" ? "active" : ""}`}
              href="#contact"
              onClick={() => handleNavClick("contact")}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
