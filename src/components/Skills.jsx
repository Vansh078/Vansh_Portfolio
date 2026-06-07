import React, { useState } from 'react';
import { Database, Cloud, Code, Settings, Server, Cpu } from 'lucide-react';

const SKILLS_DATA = {
  languages: {
    title: 'Languages',
    icon: <Code size={20} className="text-green" />,
    skills: [
      { name: 'Java', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript', level: 75 }
    ]
  },
  backend: {
    title: 'Backend Development',
    icon: <Server size={20} className="text-blue" />,
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'Hibernate / JPA', level: 85 },
      { name: 'Microservices', level: 80 }
    ]
  },
  cloudDevops: {
    title: 'Cloud & DevOps',
    icon: <Cloud size={20} className="text-green" />,
    skills: [
      { name: 'AWS (EC2, S3, Lambda)', level: 85 },
      { name: 'Jenkins', level: 80 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'AWS CloudWatch', level: 80 }
    ]
  },
  databaseTools: {
    title: 'Databases & Tools',
    icon: <Database size={20} className="text-blue" />,
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Agile & Scrum', level: 85 },
      { name: 'Troubleshooting & Debugging', level: 90 }
    ]
  }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Technical <span>Skills</span></h2>
        </div>

        <div className="skills-container">
          {/* Tab Navigation */}
          <div className="skills-tabs font-mono">
            {Object.keys(SKILLS_DATA).map((key) => (
              <button
                key={key}
                className={`skills-tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {SKILLS_DATA[key].icon}
                <span>{SKILLS_DATA[key].title}</span>
              </button>
            ))}
          </div>

          {/* Active Skills Panel */}
          <div className="skills-panel glass-card">
            <div className="panel-header font-mono">
              <Cpu size={16} className="text-green" />
              <span>ls -la /skills/{activeTab}/</span>
            </div>
            
            <div className="skills-grid">
              {SKILLS_DATA[activeTab].skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-info font-mono">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent text-blue">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bg">
                    <div 
                      className="skill-progress-bar" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="panel-footer font-mono">
              <span className="text-muted">// System metrics loaded successfully.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
