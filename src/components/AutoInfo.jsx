import "../css/AutoInfo.css"

function AutoInfo({ auto }) {

  return (
    <div className="detalle-info">
      <h2>{auto.marca} {auto.modelo}</h2>
      <p>Año: {auto.año}</p>
      <p>Precio: ${auto.precio.toLocaleString()}</p>
      <p>Kilometros: {auto.km}</p>
      <p>Ficha Tecnica: "{auto.ficha}"</p>
      <a
        href={`https://wa.me/3515305744?text=Hola! Estoy interesado en el ${auto.marca} ${auto.modelo} del año ${auto.año}. ¿Está disponible?`}
        target="_blank"
        rel="noopener noreferrer"
      >
     <button>Contactar por WhatsApp</button>
     </a>

    </div>
  );
}

export default AutoInfo;
