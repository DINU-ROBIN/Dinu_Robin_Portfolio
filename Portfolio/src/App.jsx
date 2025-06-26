import { useState, useEffect } from 'react';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Hero from './components/Hero'
import AboutMe from './components/aboutMe'
import './App.css'
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import ExperienceSection from './components/ExperienceSection';
import MyServices from './components/MyServices';
import WhyShouldYou from './components/whyshoulyou';
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import React from 'react';
import PortfolioGrid from './components/PortfolioGrid';
import './index.css';

import ScrollableText from './components/scrollsbletexr';
import ContactMe from './components/ContactMe';
// import TechMarquee from './components/TechMarquee';



function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleMediaChange = (e) => {
      setIsDesktop(e.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/resume/`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <>
    <ScrollProgress />
      {isDesktop && <SmoothCursor />}
      <Navbar />
      <Hero />
      <AboutMe />
      <ExperienceSection />
      <MyServices />
      <WhyShouldYou />
       <div className="App">
            <PortfolioGrid />
        </div>
      <ScrollableText />
      <ContactMe />

      <Footer />
    </>
  )
}

export default App
