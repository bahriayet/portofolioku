import { useState, useEffect } from 'react';
import './App.css';

import { portfolioOwner, uiTranslations } from './data/portfolioData';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'id');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Terapkan theme ke dokumen
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Terapkan bahasa ke dokumen
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Highlight menu aktif saat scroll
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const toggleLang = () => setLang((prev) => (prev === 'id' ? 'en' : 'id'));

  const t = uiTranslations[lang];
  const mergedData = {
    ...portfolioOwner,
    ...portfolioOwner[lang],
  };

  return (
    <div className="portfolio-app">
      {/* Scroll progress bar di paling atas */}
      <ScrollProgress />

      {/* Background glow effects */}
      <div className="glow-accent" style={{ top: '10%', left: '5%' }}></div>
      <div className="glow-accent" style={{ top: '50%', right: '5%' }}></div>

      <Navbar
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
        t={t}
      />

      <main>
        <Hero data={mergedData} lang={lang} t={t} />
        <Stats t={t} />
        <TechStack />
        <About bio={mergedData.bio} skills={mergedData.skills} lang={lang} t={t} />
        <Projects projects={mergedData.projects} t={t} />
        <Experience experience={mergedData.experience} t={t} />
        <Contact
          email={portfolioOwner.email}
          phone={portfolioOwner.phone}
          location={portfolioOwner.location}
          lang={lang}
          t={t}
        />
      </main>

      <Footer name={portfolioOwner.name} t={t} />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
