import Reveal from './Reveal';

function About({ skills, bio }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Tentang Saya</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal direction="left" delay={100}>
            <div className="about-bio glass-panel">
              <h3>Siapa saya?</h3>
              <p>{bio}</p>
              <p style={{ marginTop: '1rem' }}>
                Saya percaya bahwa baris kode yang berkualitas dikombinasikan dengan sentuhan seni
                desain adalah kunci utama dalam membangun produk web yang unggul. Saya selalu siap
                menghadapi tantangan baru dan terus memperbarui keahlian mengikuti perkembangan
                tren teknologi.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={200}>
            <div className="about-skills glass-panel">
              <h3>Keahlian Teknis</h3>
              <div className="skills-container">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="skill-category">
                    <h4>
                      {category === 'frontend'
                        ? 'Frontend'
                        : category === 'backend'
                        ? 'Backend'
                        : 'Tools & Lainnya'}
                    </h4>
                    <div className="tags">
                      {items.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
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
