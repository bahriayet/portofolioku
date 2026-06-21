// Tech stack marquee/ticker — logo ikon teknologi bergerak horizontal
const row1Tech = [
  { name: 'HTML5', color: '#e34f26', icon: '🧡' },
  { name: 'CSS3', color: '#1572b6', icon: '💙' },
  { name: 'JavaScript', color: '#f7df1e', icon: '💛' },
  { name: 'TypeScript', color: '#3178c6', icon: '📘' },
  { name: 'React.js', color: '#61dafb', icon: '⚛️' },
  { name: 'Next.js', color: '#ffffff', icon: '▲' },
  { name: 'Tailwind CSS', color: '#06b6d4', icon: '🌊' },
  { name: 'Figma', color: '#f24e1e', icon: '🎨' },
  { name: 'Vite', color: '#646cff', icon: '⚡' },
];

const row2Tech = [
  { name: 'Node.js', color: '#68a063', icon: '🟢' },
  { name: 'Express.js', color: '#ababab', icon: '🚀' },
  { name: 'PostgreSQL', color: '#4169e1', icon: '🐘' },
  { name: 'MongoDB', color: '#47a248', icon: '🍃' },
  { name: 'Supabase', color: '#3ecf8e', icon: '⚡' },
  { name: 'Git', color: '#f1502f', icon: '🔀' },
  { name: 'Docker', color: '#2496ed', icon: '🐳' },
  { name: 'Webpack', color: '#8dd6f9', icon: '📦' },
  { name: 'Vercel', color: '#ffffff', icon: '▲' },
  { name: 'VS Code', color: '#007acc', icon: '💻' },
];

// Duplikat 4 kali untuk seamless looping di layar lebar
const row1Items = [...row1Tech, ...row1Tech, ...row1Tech, ...row1Tech];
const row2Items = [...row2Tech, ...row2Tech, ...row2Tech, ...row2Tech];

function TechStack() {
  return (
    <section className="techstack-section">
      <div className="techstack-label">Tech Stack</div>
      <div className="ticker-container">
        {/* Baris 1: Bergerak ke kiri */}
        <div className="ticker-track">
          {row1Items.map((tech, i) => (
            <div key={`row1-${tech.name}-${i}`} className="ticker-item">
              <span className="ticker-emoji">{tech.icon}</span>
              <span className="ticker-name">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Baris 2: Bergerak ke kanan */}
        <div className="ticker-track ticker-track-reverse">
          {row2Items.map((tech, i) => (
            <div key={`row2-${tech.name}-${i}`} className="ticker-item">
              <span className="ticker-emoji">{tech.icon}</span>
              <span className="ticker-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
