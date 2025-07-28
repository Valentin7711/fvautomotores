import "../css/AutoInfo.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function AutoInfo({ auto }) {
  return (
    <div className="detalle-info">
      <h2>{auto.marca} {auto.modelo}</h2>
      <p>Año: {auto.año}</p>
      <p>Precio: ${auto.precio.toLocaleString()}</p>
      <p>Kilometros: {auto.km}</p>
      <p>Ficha Tecnica: "{auto.ficha}"</p>
      <p>Recibimos tu vehículo usado como parte de pago y Financiamos con Banco Santander Rio.</p>
      <a
        href={`https://wa.me/+5493515305744?text=Hola! Estoy interesado en el ${auto.marca} ${auto.modelo} del año ${auto.año}. ¿Está disponible?`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
          Contactar por WhatsApp
        </button>
      </a>
    </div>
  );
}

export default AutoInfo;
