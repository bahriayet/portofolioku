function Footer({ name }) {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Tentang' },
    { href: '#projects', label: 'Proyek' },
    { href: '#experience', label: 'Pengalaman' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <footer className="portfolio-footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span>Portofolio</span>ku
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} {name}. Hak Cipta Dilindungi.
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
