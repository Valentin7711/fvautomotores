import "../css/Contacto.css";

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
      <p>¿Interesado en un auto? ¡Comunicate con nosotros!</p>

      {contactos.map(({ nombre, telefono, email }) => (
        <div key={nombre} className="contacto-card">
          <ul className="contacto-lista">
            <li><strong>{nombre}</strong></li>
            <li>📞 <a href={`tel:+54${telefono}`}>{telefono}</a></li>
            <li>📧 <a href={`mailto:${email}`}>{email}</a></li>
            <li className="contacto-botones">
              <a href={`tel:+54${telefono}`} className="contacto-btn">Llamar</a>
              <a href={`mailto:${email}`} className="contacto-btn">Enviar Email</a>
            </li>
          </ul>
        </div>
      ))}

      {/* Redes Sociales */}
      <div className="redes">
        <p>📱 Seguinos en redes:</p>
        <a
          href="https://www.instagram.com/fvautosymotos"
          target="_blank"
          rel="noopener noreferrer"
          className="red-social"
        >
          Instagram @fvautosymotos
        </a>
      </div>

      {/* Imagen decorativa */}
      <div className="contacto-img">
        <img src="bmw.jpg" alt="Taller" />
      </div>
    </div>
  );
}

export default Contacto;
