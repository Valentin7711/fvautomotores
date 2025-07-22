import { Link } from "react-router-dom";
import "../css/Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setScrolled(currentScrollY > 100);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${showNavbar ? "visible" : "hidden"} ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo">FV Automotores</Link>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        aria-controls="navbar"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`navbar ${menuOpen ? "active" : ""}`} id="navbar">
        <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li>
        <li><Link to="/catalogo" onClick={handleLinkClick}>Catalogo</Link></li>
        <li><Link to="/contacto" onClick={handleLinkClick}>Contacto</Link></li>
      </ul>
    </header>
  );
};

export default Header;
