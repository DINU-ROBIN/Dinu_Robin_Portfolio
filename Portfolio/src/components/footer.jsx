import React, { useState } from 'react';
import {
    FaArrowRight,
    FaPhone,
    FaEnvelope,
    FaLinkedinIn,
    FaBriefcase,
    FaGithub,
    FaTwitter,
    FaDownload,
    FaSpinner
} from 'react-icons/fa';
import './footer.css';
import { downloadResume } from '../services/resumeApi';

export default function Footer() {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleResumeDownload = async (e) => {
        e.preventDefault();

        if (isDownloading) return; // Prevent multiple clicks

        setIsDownloading(true);

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
        <footer className="footer bg-dark text-white">
            {/* Top Section */}
            <div className="footer-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h2 className="footer-heading">Let's Connect There</h2>
                        </div>
                        <div className="col-md-4 text-md-end">
                            <button className="hire-btn">
                                <span>Hire Me</span>
                                <FaArrowRight className="hire-btn-arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="footer-divider">
                <div className="container">
                    <hr className="divider-line" />
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="footer-main">
                <div className="container">
                    <div className="row">
                        {/* First Section - About Me */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <h4 className="footer-section-title">
                                <span className="gray-text">DINU</span> ROBIN
                            </h4>
                            <p className="footer-description">
                               I'm a highly motivated IT professional with a solid foundation in front-end development using React.js and Vue.js. I bring strong technical skills in Python, MySQL, and problem-solving, with a passion for building innovative and efficient technology solutions. Adaptable and detail-oriented, I strive to contribute to impactful projects that drive organizational success.
                            </p>
                        </div>

                        {/* Second Section - Navigation */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <h4 className="footer-section-title">Navigation</h4>
                            <ul className="footer-nav-list">
                                <li><a href="#home" className="footer-nav-link">Home</a></li>
                                <li><a href="#about" className="footer-nav-link">About Me</a></li>
                                <li><a href="#services" className="footer-nav-link">Services</a></li>
                                <li>
                                    <a
                                        href="#resume"
                                        className="footer-nav-link"
                                        onClick={handleResumeDownload}
                                        style={{
                                            cursor: isDownloading ? 'not-allowed' : 'pointer',
                                            opacity: isDownloading ? 0.7 : 1
                                        }}
                                    >
                                        {isDownloading ? 'Downloading...' : 'Resume'}
                                    </a>
                                </li>
                                <li><a href="#projects" className="footer-nav-link">Projects</a></li>
                                <li><a href="#contact" className="footer-nav-link">Contact me</a></li>
                            </ul>
                        </div>

                        {/* Third Section - Contact */}
                        <div className="col-lg-4 col-md-12 mb-4">
                            <h4 className="footer-section-title">Contact</h4>
                            <div className="contact-info">
                                <div className="contact-item">
                                    <FaPhone className="contact-icon" style={{ color: '#6b7280' }} />
                                    <a href="tel:+918310693481" className="contact-link">+91 83106 93481</a>
                                </div>
                                <div className="contact-item">
                                    <FaEnvelope className="contact-icon" style={{ color: '#6b7280' }} />
                                    <a href="mailto:dinurobin21@gmail.com" className="contact-link">dinurobin21@gmail.com</a>
                                </div>
                                <div className="contact-item">
                                    <FaLinkedinIn className="contact-icon" style={{ color: '#6b7280' }} />
                                    <a href="https://linkedin.com/in/dinu-robin" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Divider Line */}
            <div className="footer-divider">
                <div className="container">
                    <hr className="divider-line" />
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="copyright-text">
                                © 2024 Dinu Robin. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div className="social-links">
                                <a href="https://linkedin.com/in/dinu-robin" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://github.com/DINU-ROBIN" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
