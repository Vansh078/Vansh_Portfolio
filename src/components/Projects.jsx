import React, { useState } from 'react';
import { Folder, Database, Eye, Terminal, Shield, Cpu, RefreshCw } from 'lucide-react';

const PROJECTS_DATA = [
  {
    title: 'Finance Tracker',
    subtitle: 'Secure Backend Expense Engine',
    desc: 'A robust personal finance manager offering secure CRUD operations. Built RESTful API endpoints for recording, categorizing, and summarizing expenses with token authentication.',
    tech: ['Spring Boot', 'MySQL', 'Spring Security', 'JPA / Hibernate'],
    metrics: 'API Latency: 18ms | Auth: JWT',
    consoleType: 'rest',
    consoleData: {
      endpoint: 'GET /api/v1/expenses/summary',
      response: `{
  "status": "success",
  "data": {
    "totalExpenses": 12840.50,
    "categories": {
      "Cloud Hosting": 4200.00,
      "Development Tools": 1840.50,
      "Infrastructure": 6800.00
    },
    "currency": "INR",
    "updatedAt": "2026-06-07T12:00:00Z"
  }
}`
    }
  },
  {
    title: 'Sky Scan',
    subtitle: 'IoT Sensor Analytics Hub',
    desc: 'Real-time environmental monitoring system logging CO₂ and methane concentrations. Features sensor visualization pipelines capturing telemetry data from hardware nodes.',
    tech: ['IoT Sensors', 'Spring Boot', 'MySQL', 'Data Visualization'],
    metrics: 'Telemetry Frequency: 1Hz | MQTT Broker',
    consoleType: 'iot',
    consoleData: {
      endpoint: 'SUBSCRIBE node/telemetry/gases',
      response: `[MQTT] [2026-06-07T12:35:12]
[SENSOR_01] CO2 Concentration: 412.8 ppm (NORMAL)
[SENSOR_01] CH4 Concentration: 1.86 ppm (NORMAL)
[SENSOR_02] CO2 Concentration: 489.1 ppm (WARNING)
[SENSOR_02] CH4 Concentration: 2.14 ppm (ACTION_REQUIRED)
[SYS] Transmitting payload database logger... done.`
    }
  },
  {
    title: 'Solar Logger & Cleaner',
    subtitle: 'AI-Driven Automated Maintenance',
    desc: 'An intelligent IoT + AI system that predicts solar panel dust accumulation and triggers automated water-cleaning mechanisms based on performance degradation predictions.',
    tech: ['IoT Hardware', 'Python AI', 'Spring Boot', 'Actuators'],
    metrics: 'Prediction Accuracy: 94.2%',
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
                <div className="project-badge font-mono">{project.metrics}</div>
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
