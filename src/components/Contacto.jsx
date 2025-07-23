import "../css/Contacto.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Contacto() {
  const contactos = [
    {
      nombre: "Ariel Bauducco",
      telefono: "3512044080",
      email: "arielbauducco@icloud.com",
    },
    {
      nombre: "Yonatan Bauducco",
      telefono: "3515305744",
      email: "arielbauducco@icloud.com",
    },
  ];

  return (
    <div className="contacto" role="region" aria-labelledby="contacto-title">
      <h1 id="contacto-title">Contacto</h1>
      <p>¿Interesado en un auto? Contactanos por los siguientes medios:</p>

      {contactos.map(({ nombre, telefono, email }) => (
        <div key={nombre} className="contacto-card">
          <ul className="contacto-lista">
            <li><strong>{nombre}</strong></li>
            <li>📞 Teléfono: <a href={`tel:+54${telefono}`}>{telefono}</a></li>
            <li>📧 Email: <a href={`mailto:${email}`}>{email}</a></li>
          </ul>
          <div className="contacto-botones">
            <a href={`tel:+54${telefono}`} className="contacto-btn" aria-label={`Llamar a ${nombre}`}>
              <i className="fas fa-phone" aria-hidden="true"></i> Llamar
            </a>
            <a href={`mailto:${email}`} className="contacto-btn" aria-label={`Enviar mail a ${nombre}`}>
              <i className="fas fa-envelope" aria-hidden="true"></i> Enviar Email
            </a>
          </div>
        </div>
      ))}

      <div className="redes">
        <p>📱 Seguinos en nuestras redes sociales:</p>
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
        <img src="/bmw.jpg" alt="Auto BMW" />
      </div>
    </div>
  );
}

export default Contacto;
