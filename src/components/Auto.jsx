import { Link } from "react-router-dom";
import "../css/AutoCard.css";

const Auto = ({ auto }) => {
  return (
    <div className="auto-card">
      <img src={auto.imagen[0]} alt={`${auto.marca} ${auto.modelo}`} />
      <h2>{auto.marca} {auto.modelo}</h2>
      <p>Año: {auto.año}</p> 
      <p>Precio: ${auto.precio.toLocaleString()}</p>
      <p>Km: {auto.km}</p>
      <Link to={`/detalle/${auto.id}`}>
        <button>Más información</button>
      </Link>
    </div>
  );
};

export default Auto;
