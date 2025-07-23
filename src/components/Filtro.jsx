import { useState } from "react";
import "../css/Filtro.css";

function Filtro({ filtros, setFiltros, marcas, años }) {
  const [abierto, setAbierto] = useState(false); // Solo afecta móvil

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const limpiar = (e) => {
    e.preventDefault(); // evitar submit o recarga
    setFiltros({ marca: "", año: "", precio: "" });
  };

  return (
    <div className={`filtro-wrapper ${abierto ? "abierto" : ""}`}>
      {/* Solo móvil */}
<button
  className="toggle-filtros"
  onClick={() => setAbierto(!abierto)}
  aria-label={abierto ? "Ocultar filtros" : "Mostrar filtros"}
  title={abierto ? "Ocultar filtros" : "Mostrar filtros"}
>
  {abierto ? "▲" : "▼"}
</button>


      {/* Visible en desktop y cuando abierto en móvil */}
      <aside className="filtro">
        <h3>Filtrar</h3>

        <div className="filtro-item">
          <label htmlFor="marca">Marca</label>
          <select name="marca" id="marca" value={filtros.marca} onChange={handleChange}>
            <option value="">Todas</option>
            {marcas.map((marca) => (
              <option key={marca} value={marca}>{marca}</option>
            ))}
          </select>
        </div>

        <div className="filtro-item">
          <label htmlFor="año">Año</label>
          <select name="año" id="año" value={filtros.año} onChange={handleChange}>
            <option value="">Todos</option>
            {años.map((año) => (
              <option key={año} value={año}>{año}</option>
            ))}
          </select>
        </div>

        <div className="filtro-item">
          <label htmlFor="precio">Precio</label>
          <select name="precio" id="precio" value={filtros.precio} onChange={handleChange}>
            <option value="">Cualquiera</option>
            <option value="menor">Menor a $20.000.000</option>
            <option value="mayor">Mayor a $20.000.000</option>
          </select>
        </div>
       <button className="limpiar-btn" onClick={limpiar} aria-label="Limpiar filtros">
      🧹 Limpiar filtros
      </button>
      </aside>
    </div>
  );
}

export default Filtro;
