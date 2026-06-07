import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      {/* Visual background layers */}
      <div className="bg-grid"></div>
      <div className="bg-radial"></div>

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
  );
}
