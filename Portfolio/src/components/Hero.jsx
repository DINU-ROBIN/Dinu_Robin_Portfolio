import { useState, useEffect } from 'react';
import { Globe } from "./ui/globe";
import './Hero.css';
import { SparklesText } from "@/components/magicui/sparkles-text";
import { downloadResume } from '../services/resumeApi'; // <-- Add this import



const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to contact section
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Download resume
  const handleResumeDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadResume();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="hero-container "id="home">
      <div className="absolute inset-0 -z-10 overflow-hidden h-full w-full">
     
    </div>

      {/* SVG Background */}
      <div className="hero-background">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,42,0,0.8)" />
              <stop offset="100%" stopColor="rgba(255,42,0,0.5)" />
            </linearGradient>
          </defs>
          <path
            filter="url(#glow)"
            fill="url(#waveGradient)"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="hero-content">

        {/* Left Side - Text */}
        <div className={`text-section ${isVisible ? 'slide-in' : ''}`}>
          <SparklesText className="hello-text" style={{ fontSize: "14px" }}>Hello,</SparklesText>


          <h1 className="main-title">
            I'm{" "}
            <span className="name-dinu">DINU</span>{" "}
            <span className="name-robin">ROBIN</span>
          </h1>
          <p className="subtitle">
            Web Developer & Graphic Designer
          </p>

          {/* Buttons */}
          <div className="button-container">
            <button className="btn btn-primary" onClick={handleHireMeClick}>
              Hire Me
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleResumeDownload}
              disabled={isDownloading}
              style={{
                cursor: isDownloading ? 'not-allowed' : 'pointer',
                opacity: isDownloading ? 0.7 : 1
              }}
            >
              {isDownloading ? "Downloading..." : "Resume"}
            </button>
          </div>

          {/* Decorative line */}
          <div className="decorative-line"></div>
        </div>

        {/* Right Side - Globe */}
        <div className="globe-section">
          <div className="globe-wrapper">
            <Globe />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
