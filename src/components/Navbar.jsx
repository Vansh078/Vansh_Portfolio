import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Cpu } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live system clock logic (similar to a server uptime monitor)
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      // Format to HH:MM:SS
      const hrs = String(date.getHours()).padStart(2, '0');
      const mins = String(date.getMinutes()).padStart(2, '0');
      const secs = String(date.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hrs}:${mins}:${secs}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certs', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certs', label: 'Certifications' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollTo('hero')}>
          <Cpu className="logo-icon text-green" />
          <span>VanshAgrawal<span className="text-blue">.java</span></span>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                <span className="nav-dot">//</span> {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Server Status Monitor */}
        <div className="server-status">
          <span className="status-ping"></span>
          <span className="status-text font-mono">SYS_OK: {currentTime || '00:00:00'}</span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <ul className="mobile-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`mobile-nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollTo(item.id)}
                >
                  <span className="text-green">//</span> {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-status font-mono">
            <span className="status-ping"></span>
            <span>Uptime Monitor Active: {currentTime}</span>
          </div>
        </div>
      )}
    </nav>
  );
}
