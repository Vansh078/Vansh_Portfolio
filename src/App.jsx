import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check on mount
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const isPrivacyPage = currentHash === '#/privacy';

  return (
    <>
      {/* Visual background layers */}
      <div className="bg-grid"></div>
      <div className="bg-radial"></div>

      {isPrivacyPage ? (
        <PrivacyPolicy />
      ) : (
        <>
          {/* Floating Header */}
          <Navbar />

          {/* Main content layouts */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Leadership />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
