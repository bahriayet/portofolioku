import { useState } from 'react';
import Reveal from './Reveal';

// Custom icons, colors, and proficiency levels for a premium look
const skillDetailsMap = {
  'HTML5 & CSS3': {
    color: '#ff5722',
    level: 'Expert',
    percent: '92%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  'JavaScript (ES6+)': {
    color: '#f7df1e',
    level: 'Expert',
    percent: '90%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18a4 4 0 0 0-8 0" />
        <line x1="12" y1="2" x2="12" y2="14" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    )
  },
  'TypeScript': {
    color: '#3178c6',
    level: 'Advanced',
    percent: '85%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="12" y1="9" x2="12" y2="15" />
      </svg>
    )
  },
  'React.js': {
    color: '#61dafb',
    level: 'Expert',
    percent: '92%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    )
  },
  'Responsive Web Design': {
    color: '#4caf50',
    level: 'Expert',
    percent: '95%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  'Node.js': {
    color: '#68a063',
    level: 'Advanced',
    percent: '85%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" strokeDasharray="3 3" />
      </svg>
    )
  },
  'Express.js': {
    color: '#909090',
    level: 'Advanced',
    percent: '80%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  'REST APIs': {
    color: '#00b4d8',
    level: 'Expert',
    percent: '90%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="10" x2="6" y2="14" />
        <line x1="18" y1="10" x2="18" y2="14" />
      </svg>
    )
  },
  'PostgreSQL': {
    color: '#4169e1',
    level: 'Intermediate',
    percent: '75%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    )
  },
  'MongoDB': {
    color: '#4db33d',
    level: 'Advanced',
    percent: '80%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  'Git & GitHub': {
    color: '#f05032',
    level: 'Advanced',
    percent: '85%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 15V9a4 4 0 0 0-4-4H9" />
        <line x1="6" y1="9" x2="6" y2="15" />
      </svg>
    )
  },
  'VS Code': {
    color: '#007acc',
    level: 'Expert',
    percent: '95%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  'Vite': {
    color: '#646cff',
    level: 'Advanced',
    percent: '88%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )
  },
  'Webpack': {
    color: '#8dd6f9',
    level: 'Intermediate',
    percent: '72%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    )
  }
};

const getSkillDetails = (name) => {
  return skillDetailsMap[name] || {
    color: '#aa3bff',
    level: 'Advanced',
    percent: '80%',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    )
  };
};

function About({ skills, bio, lang, t }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">{t.aboutHeading}</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal direction="left" delay={100}>
            <div className="about-bio glass-panel">
              <h3>{lang === 'id' ? 'Siapa saya?' : 'Who am I?'}</h3>
              <p>{bio}</p>
              <p style={{ marginTop: '1rem' }}>
                {lang === 'id'
                  ? 'Saya percaya bahwa baris kode yang berkualitas dikombinasikan dengan sentuhan seni desain adalah kunci utama dalam membangun produk web yang unggul. Saya selalu siap menghadapi tantangan baru dan terus memperbarui keahlian mengikuti perkembangan tren teknologi.'
                  : 'I believe that quality code combined with a touch of design artistry is the key to building outstanding web products. I am always ready to face new challenges and continuously update my skills to keep up with the latest technological trends.'}
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={200}>
            <div className="about-skills glass-panel">
              <h3>{lang === 'id' ? 'Keahlian Teknis' : 'Technical Skills'}</h3>
              <div className="skills-container">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="skill-category">
                    <h4>
                      {category === 'frontend'
                        ? 'Frontend'
                        : category === 'backend'
                        ? 'Backend'
                        : lang === 'id' ? 'Peralatan & Lainnya' : 'Tools & Others'}
                    </h4>
                    <div className="skills-grid-new">
                      {items.map((skill) => {
                        const details = getSkillDetails(skill);
                        return (
                          <div
                            key={skill}
                            className="skill-card-new"
                            style={{ '--skill-color': details.color }}
                          >
                            <div className="skill-card-header">
                              <span className="skill-icon">{details.icon}</span>
                              <span className="skill-name">{skill}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
