import Reveal from './Reveal';

function Experience({ experience, t }) {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">{t.experienceHeading}</h2>
        </Reveal>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {experience.map((exp, idx) => (
            <Reveal key={exp.company} delay={idx * 150} direction={idx % 2 === 0 ? 'left' : 'right'}>
              <div className={`timeline-item ${idx % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}>
                <div className="timeline-bullet"></div>
                <div className="timeline-content-wrapper">
                  <div className="timeline-card glass-panel">
                    <span className="timeline-period">{exp.period}</span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                    <p className="timeline-desc">{exp.description}</p>
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

export default Experience;
