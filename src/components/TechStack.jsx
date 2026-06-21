// Tech stack marquee/ticker — logo ikon teknologi bergerak horizontal
const technologies = [
  { name: 'HTML5', color: '#e34f26', icon: '🧡' },
  { name: 'CSS3', color: '#1572b6', icon: '💙' },
  { name: 'JavaScript', color: '#f7df1e', icon: '💛' },
  { name: 'TypeScript', color: '#3178c6', icon: '📘' },
  { name: 'React.js', color: '#61dafb', icon: '⚛️' },
  { name: 'Next.js', color: '#ffffff', icon: '▲' },
  { name: 'Tailwind CSS', color: '#06b6d4', icon: '🌊' },
  { name: 'Figma', color: '#f24e1e', icon: '🎨' },
  { name: 'Vite', color: '#646cff', icon: '⚡' },
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

// Duplikat untuk seamless infinite loop
const tickerItems = [...technologies, ...technologies];

function TechStack() {
  return (
    <section className="techstack-section">
      <div className="techstack-label">Tech Stack</div>
      <div className="ticker-container">
        <div className="ticker-track">
          {tickerItems.map((tech, i) => (
            <div key={`${tech.name}-${i}`} className="ticker-item">
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
