import { useState, useRef, useEffect } from 'react';
import { WarpBackground } from "@/components/magicui/warp-background";
import TechMarquee from './TechMarquee';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-16 lg:py-20 relative" id="experience">
      {/* Responsive WarpBackground as background layer */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <WarpBackground className="w-full h-full" />
      </div>

      {/* Orange gradient background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="text-grey">My</span>{" "}
            <span style={{ color: "rgb(255,42,0)" }}>Experience</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "rgb(255,42,0)" }}></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            <div className={`relative flex flex-col items-start group transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {/* Center the card horizontally */}
              <div className="w-full flex justify-center">
                <div
                  className="rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-700/50 shadow-xl backdrop-blur-md hover:border-[rgb(255,42,0)]/30 transition-all duration-300 hover:shadow-2xl"
                  style={{ backgroundColor: "rgba(30,30,30,0.85)" }}
                >
                  {/* Header Section - responsive layout */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
                    {/* Icon - responsive sizing */}
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-[rgb(255,42,0)]/10">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[rgb(255,42,0)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    {/* Title and Company - responsive typography */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                        Software Developer Intern
                      </h3>
                      <p className="font-semibold text-sm sm:text-base md:text-lg leading-tight" style={{ color: "rgb(255,42,0)" }}>
                        <a
                          href="https://syfte.co.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline transition-all duration-200"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          Syfte Market Services Pvt. Ltd
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* Duration Badge - responsive sizing */}
                  <div className="mb-4 sm:mb-5">
                    <span className="inline-block px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm font-medium">
                      January 2025 - April 2025
                    </span>
                  </div>
                  {/* Responsibilities - responsive text and spacing */}
                  <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base mb-4 sm:mb-5">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0 bg-[rgb(255,42,0)]"></span>
                      <span className="leading-relaxed">Developed responsive web applications using Vue.js and Vuetify</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0 bg-[rgb(255,42,0)]"></span>
                      <span className="leading-relaxed">Collaborated with senior developers on Vendoor site optimization</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 flex-shrink-0 bg-[rgb(255,42,0)]"></span>
                      <span className="leading-relaxed">Designed E-mail templates using HTML and CSS</span>
                    </li>
                  </ul>
                  {/* Tech Stack - responsive layout and sizing */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {["Vue.js", "Vuetify", "Bootstrap", "Git", "Figma"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-[rgb(255,42,0)]/10 text-[rgb(255,42,0)] rounded-full text-xs sm:text-sm font-medium border border-[rgb(255,42,0)]/20 hover:bg-[rgb(255,42,0)]/20 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* You can add more experience items here by copying the above block */}
          </div>
        </div>
      </div>
      <TechMarquee />

    </section>
  );
};

export default ExperienceSection;
