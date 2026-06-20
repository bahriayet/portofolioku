import { useState } from 'react';
import Reveal from './Reveal';

// SVG icons untuk setiap project berdasarkan iconId
function ProjectIcon({ iconId, gradientStart, gradientEnd }) {
  const gradId = `grad-${iconId}`;

  const icons = {
    'smart-facility': (
      <>
        <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="4" strokeDasharray="6 4" className="spin-slow" />
        <path d="M40 50L47 57L60 43" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    nusashop: (
      <>
        <path d="M30 35H70L65 70H35L30 35Z" stroke="white" strokeWidth="4" strokeLinejoin="round" />
        <path d="M42 35V28C42 23.5817 45.5817 20 50 20C54.4183 20 58 23.5817 58 28V35" stroke="white" strokeWidth="4" />
        <circle cx="50" cy="53" r="6" fill="white" />
      </>
    ),
    healthi: (
      <>
        <path d="M50 25C36.1929 25 25 36.1929 25 50C25 63.8071 36.1929 75 50 75C63.8071 75 75 63.8071 75 50" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <circle cx="65" cy="35" r="8" fill="white" className="pulse-fast" />
        <line x1="45" y1="50" x2="55" y2="50" stroke="white" strokeWidth="5" strokeLinecap="round" />
        <line x1="50" y1="45" x2="50" y2="55" stroke="white" strokeWidth="5" strokeLinecap="round" />
      </>
    ),
  };

  return (
    <svg className="project-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="16" fill={`url(#${gradId})`} />
      {icons[iconId]}
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientStart} />
          <stop offset="1" stopColor={gradientEnd} />
        </linearGradient>
      </defs>
    </svg>
  );
}

const ALL_FILTER = 'Semua';

function Projects({ projects }) {
  // Kumpulkan semua kategori unik
  const categories = [ALL_FILTER, ...new Set(projects.map((p) => p.category))];
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const filtered =
    activeFilter === ALL_FILTER
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Proyek Pilihan</h2>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={100}>
          <div className="project-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="projects-grid">
          {filtered.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 100} direction="up">
              <div className="project-card glass-panel">
                <div className="project-visual-wrapper">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  ) : (
                    <ProjectIcon
                      iconId={project.iconId}
                      gradientStart={project.gradientStart}
                      gradientEnd={project.gradientEnd}
                    />
                  )}
                  <span className="project-cat-badge">{project.category}</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveLink && (
                      <a href={project.liveLink} className="project-link" target="_blank" rel="noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
