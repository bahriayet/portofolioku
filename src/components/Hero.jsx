import { useState } from 'react';
import Typewriter from './Typewriter';

function Hero({ data, lang, t }) {
  const { name, words, bio, github, linkedin, twitter, avatar } = data;
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge-welcome">{lang === 'id' ? 'Halo, Selamat Datang!' : 'Hello, Welcome!'}</div>
          <h1>
            Saya <span className="gradient-text">{name}</span>
          </h1>
          <h2 className="hero-subtitle">
            {lang === 'id' ? 'Seorang ' : 'A '}
            <Typewriter key={lang} words={words} speed={100} delay={2000} />
          </h2>
          <p className="hero-desc">{bio}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" id="cta-contact">
              {lang === 'id' ? 'Hubungi Saya' : 'Contact Me'}
            </a>
            <a href="#projects" className="btn btn-secondary" id="cta-projects">
              {lang === 'id' ? 'Lihat Proyek' : 'View Projects'}
            </a>
            {/* Tombol Download CV */}
            <a
              href="/cv-bahri-muhammad.html"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-cv"
              id="cta-download-cv"
              aria-label="Download CV"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>

          <div className="social-links-hero">
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href={twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-frame glass-panel">
            <svg className="avatar-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="avatar-grad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#aa3bff" />
                  <stop offset="1" stopColor="#00b4d8" />
                </linearGradient>
                <clipPath id="avatar-clip">
                  <circle cx="100" cy="100" r="90" />
                </clipPath>
              </defs>
              <circle cx="100" cy="100" r="95" stroke="url(#avatar-grad)" strokeWidth="3" fill="none" strokeDasharray="300 20" className="spin-slow" />
              <circle cx="100" cy="100" r="90" fill="rgba(16, 12, 28, 0.4)" />
              <g clipPath="url(#avatar-clip)">
                {avatar && !imageError ? (
                  <image 
                    href={avatar} 
                    x="10" 
                    y="10" 
                    width="180" 
                    height="180" 
                    preserveAspectRatio="xMidYMid slice" 
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <>
                    <path d="M50 170C50 145 70 135 100 135C130 135 150 145 150 170" fill="#e0e0e0" stroke="url(#avatar-grad)" strokeWidth="3" />
                    <path d="M65 170C65 155 80 148 100 148C120 148 135 155 135 170" fill="var(--primary)" opacity="0.6" />
                    <circle cx="100" cy="95" r="32" fill="#ffd1b3" />
                    <path d="M68 92C65 85 68 70 80 62C92 54 112 55 124 64C132 70 135 80 132 90C128 75 118 70 100 75C85 79 74 85 68 92Z" fill="#2d1a47" />
                    <rect x="80" y="58" width="40" height="15" rx="5" fill="#2d1a47" />
                    <rect x="75" y="85" width="22" height="16" rx="4" stroke="#ffffff" strokeWidth="3" fill="rgba(255, 255, 255, 0.15)" />
                    <rect x="103" y="85" width="22" height="16" rx="4" stroke="#ffffff" strokeWidth="3" fill="rgba(255, 255, 255, 0.15)" />
                    <line x1="97" y1="92" x2="103" y2="92" stroke="#ffffff" strokeWidth="3" />
                    <path d="M96 112C96 115 104 115 104 112" stroke="#e0997a" strokeWidth="2.5" strokeLinecap="round" />
                    <text x="35" y="60" fill="var(--secondary)" fontFamily="var(--font-mono)" fontSize="12" fontWeight="bold">&lt;code&gt;</text>
                    <text x="125" y="145" fill="var(--primary)" fontFamily="var(--font-mono)" fontSize="12" fontWeight="bold">{'{JS}'}</text>
                    <text x="120" y="80" fill="#22c55e" fontFamily="var(--font-mono)" fontSize="10" fontWeight="bold">&lt;/&gt;</text>
                  </>
                )}
              </g>
            </svg>
          </div>

          {/* Floating badges around avatar */}
          <div className="hero-badge hero-badge--react">⚛️ React</div>
          <div className="hero-badge hero-badge--node">🟢 Node</div>
          <div className="hero-badge hero-badge--design">🎨 UI/UX</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
