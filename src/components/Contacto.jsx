import "../css/Contacto.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contacto() {
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
            <a
              href={`tel:+54${telefono}`}
              className="contacto-btn"
              aria-label={`Llamar a ${nombre}`}
            >
              <i className="fas fa-phone" aria-hidden="true"></i> Llamar
            </a>
            <a
              href={`https://wa.me/54${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-btn"
              aria-label={`Enviar WhatsApp a ${nombre}`}
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i> Enviar WhatsApp
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
          aria-label="Instagram de FV Autos y Motos"
        >
          <i className="fab fa-instagram" aria-hidden="true"></i> fvautosymotos
        </a>
      </div>

      <div className="contacto-img">
        <img src="/r1.jpg" alt="R1" />
      </div>
    </div>
  );
}

export default Contacto;
