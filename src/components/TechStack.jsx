// Tech stack marquee/ticker — logo ikon teknologi bergerak horizontal
const technologies = [
  { name: 'React.js', color: '#61dafb', icon: '⚛️' },
  { name: 'Next.js', color: '#ffffff', icon: '▲' },
  { name: 'Node.js', color: '#68a063', icon: '🟢' },
  { name: 'TypeScript', color: '#3178c6', icon: '📘' },
  { name: 'Figma', color: '#f24e1e', icon: '🎨' },
  { name: 'Git', color: '#f1502f', icon: '🔀' },
  { name: 'Docker', color: '#2496ed', icon: '🐳' },
  { name: 'Vite', color: '#646cff', icon: '⚡' },
  { name: 'Express.js', color: '#ababab', icon: '🚀' },
  { name: 'Vercel', color: '#ffffff', icon: '▲' },
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
