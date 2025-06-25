import React, { useRef, useEffect, useState } from 'react';
import { TypingAnimation } from "@/components/magicui/typing-animation";

const TechMarquee = () => {
  // Import your logo images (replace with actual imports)
  const logos = [
    { name: 'Vue.js', src: '/logos/vuejs-grey.png' },
    { name: 'React.js', src: '/logos/react-grey.png' },
    { name: 'Bootstrap', src: '/logos/bootstrap-grey.png' },
    { name: 'Tailwind CSS', src: '/logos/tailwind-grey.png' },
    { name: 'Django', src: '/logos/Django-grey.png' },
    { name: 'MySQL', src: '/logos/MySQL-grey.png' },
    { name: 'HTML', src: '/logos/HTML5-grey.png' },
    { name: 'CSS', src: '/logos/CSS3-grey.png' },
    { name: 'Git', src: '/logos/git-grey.png' },
    { name: 'Figma', src: '/logos/figma-grey.png' },
    { name: 'Python', src: '/logos/python-grey.png' },
    { name: 'JavaScript', src: '/logos/JavaScript-grey.png' },
  ];

  const [showTyping, setShowTyping] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setShowTyping(true);
          obs.disconnect(); // Disconnect after first trigger
        }
      },
      { threshold: 0.3 }
    );
    if (typingRef.current) observer.observe(typingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-16 ">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12" ref={typingRef}>
          {showTyping && (
            <div className="space-y-4">
              <TypingAnimation className="text-4xl mb-6 p-0  md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                   Technologies I work with
              </TypingAnimation>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-700 mx-auto rounded-full animate-pulse "></div>
{/* 
              <p className="text-gray-600 text-lg font-medium mt-4">
                Technologies I work with
              </p> */}
            </div>
          )}
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Enhanced gradient overlays */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20"></div>
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20"></div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent"></div>

          {/* Marquee track */}
          <div className="flex animate-marquee hover:animate-marquee-slow">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={`first-${index}`} 
                className="flex-shrink-0 mx-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-3 hover:bg-white group-hover:border-blue-300/50">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <img 
                      src={logo.src}
                      alt={logo.name}
                      className="h-14 w-auto opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 group-hover:drop-shadow-lg"
                      title={logo.name}
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {logo.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {logos.map((logo, index) => (
              <div 
                key={`second-${index}`} 
                className="flex-shrink-0 mx-6 group"
                style={{ animationDelay: `${(index + logos.length) * 0.1}s` }}
              >
                <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-3 hover:bg-white group-hover:border-blue-300/50">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <img 
                      src={logo.src}
                      alt={logo.name}
                      className="h-14 w-auto opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 group-hover:drop-shadow-lg"
                      title={logo.name}
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {logo.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="flex justify-center mt-12">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>

      {/* Enhanced CSS Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            transform: translateX(-50%);
          }
          50% {
            transform: translateX(50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
        
        .animate-marquee-slow {
          animation: marquee 45s linear infinite;
          width: fit-content;
        }
        
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }
        
        /* Enhanced hover effects */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          
          .animate-marquee-slow {
            animation: marquee 30s linear infinite;
          }
        }
        
        @media (max-width: 480px) {
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
          
          .animate-marquee-slow {
            animation: marquee 25s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;
