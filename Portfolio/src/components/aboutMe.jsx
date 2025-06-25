import React, { useState, useEffect, useRef } from 'react';
import { FlipText } from "@/components/magicui/flip-text";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { BoxReveal } from "@/components/magicui/box-reveal";


const AboutMe = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

 return (
  <section className="w-full py-16 relative bg-[#18181b]" id="about">
    {/* Flickering Grid Background - now properly visible */}
    <div className="absolute inset-0 overflow-hidden z-0">
      <FlickeringGrid/>
    </div>
          
    {/* Content Container */}
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      {/* Title Section */}
      <div ref={titleRef} className="text-center mb-8">
        {shouldAnimate ? (
          <FlipText className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            About Me
          </FlipText>
        ) : (
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent">
            About Me
          </div>
        )}
      </div>
              
      {/* Description */}
      <div className="text-lg leading-relaxed text-gray-200 space-y-4 fw-bold mb-12">
        <p>
        I am a passionate and detail-oriented Web Developer with hands-on experience in both front-end and back-end development. I specialize in building responsive, user-friendly websites using modern technologies like HTML, CSS, JavaScript, React, and Vue.js, along with backend frameworks like Django. In addition to development, I have a keen eye for design and experience in UI/UX design using Figma. I also bring creative expertise in graphic design using tools like Adobe Photoshop and Canva, enabling me to deliver visually appealing, user-centered digital experiences.
        </p>
      </div>

      {/* Education and Certification Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative">
        
        {/* Vertical Separator Line for Desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2" 
             style={{ backgroundColor: 'rgb(255, 42, 0)' }}>
        </div>

        {/* Horizontal Separator Line for Mobile */}
        <div className="lg:hidden col-span-1 flex justify-center my-8">
          <div className="w-24 h-px" style={{ backgroundColor: 'rgb(255, 42, 0)' }}></div>
        </div>
        
        {/* Education Section */}
        <div className="space-y-4 lg:pr-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gray-800/70 border border-gray-700/50 shadow-lg">
              <svg 
                className="w-7 h-7 md:w-9 md:h-9" 
                style={{ color: 'rgb(255, 42, 0)' }}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
            </div>
            <BoxReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              Education
            </h3></BoxReveal>
          </div>
          <div className="pl-6 md:pl-8 border-l-2 border-gray-700/50">
            <div className="bg-gray-800/30 rounded-lg p-4 md:p-6 border border-gray-700/30">
              <p className="text-lg md:text-xl text-gray-100 font-semibold leading-relaxed">
                <BoxReveal>Bachelor of Computer Applications</BoxReveal>
              </p>
              <div className="mt-2 w-12 h-1 rounded-full" style={{ backgroundColor: 'rgb(255, 42, 0)' }}></div>
            </div>
          </div>
        </div>

        {/* Certification Section */}
        <div className="space-y-4 lg:pl-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gray-800/70 border border-gray-700/50 shadow-lg">
              <svg 
                className="w-7 h-7 md:w-9 md:h-9" 
                style={{ color: 'rgb(255, 42, 0)' }}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z M12,12L16,16L12,20L8,16L12,12Z"/>
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
             <BoxReveal>Certifications</BoxReveal>  
            </h3>
          </div>
          <div className="pl-6 md:pl-8 border-l-2 border-gray-700/50">
            <div className="bg-gray-800/30 rounded-lg p-4 md:p-6 border border-gray-700/30 space-y-4">
            
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(255, 42, 0)' }}></div>
                  <p className="text-base md:text-lg text-gray-100 font-medium leading-relaxed">
                    <BoxReveal>
                    PYTHON FULLSTACK DEVELOPER
                    </BoxReveal>

                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(255, 42, 0)' }}></div>
                  <p className="text-base md:text-lg text-gray-100 font-medium leading-relaxed">
                    <BoxReveal>

                    CISCO - IT ESSENTIALS
                    </BoxReveal>

                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(255, 42, 0)' }}></div>
                  <p className="text-base md:text-lg text-gray-100 font-medium leading-relaxed">
                    <BoxReveal>

                    GRAPHIC DESIGNING
                    </BoxReveal>

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
      
  </section>
);


};

export default AboutMe;