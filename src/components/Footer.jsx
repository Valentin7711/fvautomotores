import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer-corte" role="contentinfo">
      <div className="footer-content">
        <img
          src="/logoFV.jpg"
          alt="Logo FV Automotores"
          className="footer-logo"
          loading="lazy"
        />

        <nav className="footer-links" aria-label="Enlaces principales">
          <Link to="/catalogo" tabIndex={0}>
            Catálogo
          </Link>
          <Link to="/contacto" tabIndex={0}>
            Contacto
          </Link>
        </nav>

        <div className="footer-social" aria-label="Redes sociales">
          <a
            href="https://wa.me/3512044080"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            tabIndex={0}
            className="social-whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.instagram.com/fvautosymotos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            tabIndex={0}
            className="social-instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} FV Automotores. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
