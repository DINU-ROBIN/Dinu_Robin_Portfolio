import React from 'react';
import { TextReveal } from "@/components/magicui/text-reveal";
import { FaArrowRight } from 'react-icons/fa';
import './WhyShouldYou.css'; // Assuming you have a CSS file for styles

const WhyShouldYou = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-orange-50">
            {/* Beautiful Heading */}
            <div className="mb-2 text-center relative">
                <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800">
                        Why Should You{' '}
                    </span>
                    <span
                        className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-500"
                        style={{
                            filter: 'drop-shadow(0 4px 20px rgba(255, 42, 0, 0.4))',
                        }}
                    >
                        Hire Me
                        <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full transform scale-x-110 animate-pulse"></div>
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800">
                        ?
                    </span>
                </h1>

                {/* Decorative line */}
                <div className="flex justify-center items-center space-x-4 mt-2">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-gray-400"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
                    <div className="w-32 h-0.5 bg-gradient-to-r from-red-500 to-orange-500"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse delay-500"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-gray-400"></div>
                </div>
            </div>

            {/* Text Reveal */}
            <div className="mb-8">
                <TextReveal className="text-xl md:text-2xl leading-relaxed text-center">
                    If you're looking for someone who blends design and development
                    to create clean, functional, and visually compelling experiences
                </TextReveal>
            </div>

            {/* Hire Me Button */}
            <div className="text-center">
                <button
                    className="hire-btn"
                    onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    <span>Hire Me</span>
                    <FaArrowRight className="hire-btn-arrow" />
                </button>
            </div>
        </div>
    );
};

export default WhyShouldYou;
