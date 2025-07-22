import "../css/Contacto.css"

function Contacto() {
  // Datos en un array para evitar repetir código
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
    {
      nombre: "Hugo Cuello",
      telefono: "3515734433",
      email: "arielbauducco@icloud.com",
    },
  ];

  return (
    <div className="contacto" role="region" aria-labelledby="contacto-title">
      <h1 id="contacto-title">Contacto</h1>
      <p>¿Interesado en un auto? Contactanos por los siguientes medios:</p>

      {contactos.map(({ nombre, telefono, email }) => (
        <ul key={nombre} className="contacto-lista">
          <li><strong>{nombre}</strong></li>
          <li>📞 Teléfono: <a href={`tel:+54${telefono}`}>{telefono}</a></li>
          <li>📧 Email: <a href={`mailto:${email}`}>{email}</a></li>
        </ul>
      ))}
    </div>
  );
}

export default Contacto;
