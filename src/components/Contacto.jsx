import { useState } from "react";
import "../css/Contacto.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contacto() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const contactos = [
    {
      nombre: "Ariel Bauducco",
      telefono: "3512044080",
      whatsapp: "3512044080",
    },
    {
      nombre: "Yonatan Bauducco",
      telefono: "3515305744",
      whatsapp: "3515305744",
    },
  ];

  return (
    <div className="contacto" role="region" aria-labelledby="contacto-title">
      <h1 id="contacto-title">Contacto</h1>
      <p>¿Interesado en un auto? Contactanos por los siguientes medios:</p>

      {contactos.map(({ nombre, telefono, whatsapp }) => (
        <div key={nombre} className="contacto-card">
          <ul className="contacto-lista">
            <li><strong>{nombre}</strong></li>
            <li>📞 Teléfono: <a href={`tel:+54${telefono}`}>{telefono}</a></li>
          </ul>
          <div className="contacto-botones">
            <a href={`tel:+54${telefono}`} className="contacto-btn">
              <i className="fas fa-phone"></i> Llamar
            </a>
            <a
              href={`https://wa.me/54${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-btn"
            >
              <i className="fab fa-whatsapp"></i> Enviar WhatsApp
            </a>
          </div>
        </div>
      ))}

      <div className="redes">
        <p>📱 Seguinos en nuestra red social:</p>
        <a
          href="https://www.instagram.com/fvautosymotos"
          target="_blank"
          rel="noopener noreferrer"
          className="red-social"
        >
          <i className="fab fa-instagram"></i> fvautosymotos
        </a>
      </div>

      <div className="contacto-img" onClick={() => setLightboxOpen(true)}>
        <img src="/r1.jpg" alt="R1" />
      </div>
      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <img src="/r1.jpg" alt="R1 ampliada" />
          <span className="lightbox-close">&times;</span>
        </div>
      )}
    </div>
  );
}

export default Contacto;
