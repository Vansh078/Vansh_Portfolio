import React, { useState } from 'react';
import { Folder, Eye, Terminal } from 'lucide-react';

const GithubIcon = ({ className, size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const PROJECTS_DATA = [
  {
    title: 'Simple Email Service (SES)',
    subtitle: 'Transactional Email microservice',
    desc: 'A robust transactional email microservice. Built RESTful API endpoints for sending emails and managing newsletter templates. Utilizes AWS SES for delivery. Integrated with PostgreSQL for template storage and analytics tracking.',
    tech: ['Spring Boot', 'AWS SES', 'Postgresql'],
    metrics: 'API Latency: 45ms',
    github: 'https://github.com/Vansh078/email-service.git',
    consoleType: 'rest',
    consoleData: {
      endpoint: 'POST /email/send',
      response: `{
  "status": "true",
  "data": null,
  "message": "Email sent successfully"
}`
    }
  },
  {
    title: 'Kubernetes Cluster Service',
    subtitle: 'Orchestrated Microservice Pipeline',
    desc: 'An automated container orchestration configuration deploying and monitoring critical microservices. Features horizontal pod autoscaling, ingress routing, health checks, and secure secrets management.',
    tech: ['Kubernetes', 'Docker', 'AWS C2', 'YAML Configurations'],
    metrics: 'Pod Auto-scale: 2-10 | Target CPU: 70%',
    github: 'https://github.com/Vansh078/kubernates-service.git',
    consoleType: 'k3s',
    consoleData: {
      endpoint: 'kubectl get pods -n production',
      response: `NAME                             READY   STATUS    RESTARTS   AGE
email-service-5cbd749c95-h8xrw  1/1     Running   0          4d12h
email-service-5cbd749c95-kjlsw  1/1     Running   0          4d12h
solar-logger-84bc78bdf4-qp9xz   1/1     Running   1          12d
[SYS] EKS Node Status: 3 Nodes (ACTIVE, HEALTHY)`
    }
  },
  {
    title: 'Solar Logger & Cleaner',
    subtitle: 'AI-Driven Automated Maintenance',
    desc: 'An intelligent IoT + AI system that predicts solar panel dust accumulation and triggers automated water-cleaning mechanisms based on performance degradation predictions.',
    tech: ['IoT Hardware', 'Python AI', 'Spring Boot', 'Actuators'],
    metrics: 'Prediction Accuracy: 94.2%',
    github: 'https://github.com/Vansh078/solar_panel_cleaning.git',
    consoleType: 'ai',
    consoleData: {
      endpoint: 'POST /api/v1/cleaner/evaluate',
      response: `{
  "panelId": "SOLAR_ARRAY_B",
  "cleanlinessPrediction": 72.8,
  "efficiencyDegradation": "-12.4%",
  "dustThresholdLimit": 75.0,
  "actionTriggered": "AUTOMATED_CLEANING_CYCLE",
  "actuatorState": "WATER_JETS_ACTIVE",
  "durationSeconds": 45
}`
    }
  }
];

export default function Projects() {
  const [activeConsoleTab, setActiveConsoleTab] = useState(PROJECTS_DATA.map(() => 'overview'));

  const toggleConsoleTab = (index, tab) => {
    setActiveConsoleTab((prev) => {
      const next = [...prev];
      next[index] = tab;
      return next;
    });
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project, idx) => (
            <div key={idx} className="project-card glass-card">
              <div className="project-card-header">
                <Folder className="folder-icon text-green" size={36} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="project-badge font-mono">{project.metrics}</div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-link"
                      title="View GitHub Repository"
                      style={{ 
                        color: 'var(--text-secondary)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        transition: 'color 0.2s, transform 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-green)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <GithubIcon size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title font-display">{project.title}</h3>
              <p className="project-subtitle font-mono">{project.subtitle}</p>

              {/* Console Toggle Navigation */}
              <div className="project-tabs font-mono">
                <button
                  className={`project-tab-btn ${activeConsoleTab[idx] === 'overview' ? 'active' : ''}`}
                  onClick={() => toggleConsoleTab(idx, 'overview')}
                >
                  <Eye size={12} /> Overview
                </button>
                <button
                  className={`project-tab-btn ${activeConsoleTab[idx] === 'console' ? 'active' : ''}`}
                  onClick={() => toggleConsoleTab(idx, 'console')}
                >
                  <Terminal size={12} /> Terminal API
                </button>
              </div>

              {/* View Panel Content */}
              <div className="project-panel-content">
                {activeConsoleTab[idx] === 'overview' ? (
                  <div className="project-overview-panel">
                    <p className="project-description">{project.desc}</p>
                    <div className="project-tech-tags font-mono">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="project-console-panel font-mono">
                    <div className="console-cmd-row">
                      <span className="text-green">$</span>
                      <span className="console-cmd">{project.consoleData.endpoint}</span>
                    </div>
                    <pre className="console-response">
                      {project.consoleData.response}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
