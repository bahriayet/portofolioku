function Footer({ name, t }) {
  const navLinks = [
    { href: '#home', label: t.navHome },
    { href: '#about', label: t.navAbout },
    { href: '#projects', label: t.navProjects },
    { href: '#experience', label: t.navExperience },
    { href: '#contact', label: t.navContact },
  ];

  return (
    <footer className="portfolio-footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span>{t.navHome === 'Home' ? 'Portfolio' : 'Portofolio'}</span>{t.navHome === 'Home' ? '' : 'ku'}
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} {name}. {t.footerCopyright}
        </p>
        <div className="footer-links">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
