import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal as TerminalIcon, FileText, Server } from 'lucide-react';

const LOG_LINES = [
  { text: '$ mvn spring-boot:run', delay: 400, type: 'command' },
  { text: '[INFO] Scanning for projects...', delay: 800, type: 'info' },
  { text: '[INFO] Compiling source files to ./target/classes...', delay: 1200, type: 'info' },
  { text: '[INFO] ----------------------------------------------------', delay: 1500, type: 'info' },
  { text: '[INFO] Starting VanshAgrawalApplication v1.0.0...', delay: 1800, type: 'info' },
  { text: '[INFO] Loading Spring Boot Context with Hibernate / JPA...', delay: 2200, type: 'info' },
  { text: '[INFO] Connecting to MySQL Database (aws-rds.mysql.internal)...', delay: 2600, type: 'info' },
  { text: '[INFO] HikariPool-1 - Connection pool established successfully.', delay: 2800, type: 'success' },
  { text: '[INFO] Tomcat started on port(s): 8080 (http) with context path \'\'', delay: 3200, type: 'success' },
  { text: '[INFO] Server initialized in 2.84 seconds (JVM running for 3.12)', delay: 3500, type: 'success' },
  { text: '[READY] Listening for API requests at: http://localhost:8080/api/v1', delay: 3900, type: 'ready' }
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < LOG_LINES.length) {
      const line = LOG_LINES[currentLineIndex];
      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        setCurrentLineIndex((prev) => prev + 1);
      }, line.delay - (currentLineIndex > 0 ? LOG_LINES[currentLineIndex - 1].delay : 0));
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge font-mono">
            <Server size={14} className="text-green" />
            <span>Java Backend Devloper</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I am <br />
            <span className="text-gradient font-display">Vansh Agrawal</span>
          </h1>
          
          <p className="hero-subtitle">
            A <strong className="text-white">Java Backend Developer</strong> building robust REST APIs with Spring Boot, optimizing database layers, and scaling application workflows on AWS.
          </p>

          <div className="hero-actions">
            <button onClick={() => scrollTo('projects')} className="btn btn-primary">
              View Projects <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo('contact')} className="btn btn-secondary">
              Contact Me <TerminalIcon size={16} />
            </button>
          </div>
        </div>

        <div className="hero-terminal">
          <div className="terminal-window scanlines">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-title">vansh@spring-boot-server: ~</div>
              <span className="text-muted font-mono text-xs">UTF-8</span>
            </div>
            <div className="terminal-body font-mono">
              {visibleLines.map((line, idx) => (
                <div 
                  key={idx} 
                  className={`terminal-line ${
                    line.type === 'command' ? 'line-cmd' : 
                    line.type === 'success' ? 'line-success' : 
                    line.type === 'ready' ? 'line-ready' : 'line-info'
                  }`}
                >
                  {line.text}
                </div>
              ))}
              {currentLineIndex < LOG_LINES.length && (
                <div className="terminal-line line-cmd">
                  <span className="cursor-blink">_</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator" onClick={() => scrollTo('about')}>
        <div className="scroll-mouse">
          <span className="scroll-wheel"></span>
        </div>
        <span className="scroll-label font-mono">SCROLL_DOWN</span>
      </div>
    </section>
  );
}
