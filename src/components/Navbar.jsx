function Navbar({ activeSection, isMobileMenuOpen, setIsMobileMenuOpen, theme, toggleTheme, lang, toggleLang, t }) {
  const navLinks = [
    { href: '#home', label: t.navHome, id: 'home' },
    { href: '#about', label: t.navAbout, id: 'about' },
    { href: '#projects', label: t.navProjects, id: 'projects' },
    { href: '#experience', label: t.navExperience, id: 'experience' },
    { href: '#contact', label: t.navContact, id: 'contact' },
  ];

  return (
    <header className="navbar-header glass-panel">
      <div className="container nav-container">
        <a href="#home" className="logo-brand">
          <span>{lang === 'id' ? 'Portofolio' : 'Portfolio'}</span>{lang === 'id' ? 'ku' : ''}
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map(({ href, label, id }) => (
            <a key={id} href={href} className={activeSection === id ? 'active' : ''}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-controls">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="lang-toggle-btn"
            aria-label="Toggle Language"
            id="lang-toggler"
          >
            {lang === 'id' ? 'EN' : 'ID'}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
            id="theme-toggler"
          >
            {theme === 'light' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="mobile-menu-btn"
            aria-label="Toggle Mobile Menu"
            id="mobile-nav-toggle"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav glass-panel">
          {navLinks.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              className={activeSection === id ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
