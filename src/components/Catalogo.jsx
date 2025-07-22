import { useState } from "react";
import { useAutos } from "../mock/Mock";
import AutoList from "../components/AutoList";
import Filtro from "../components/Filtro";
import "../css/Filtro.css";
import "../css/Catalogo.css";

function Catalogo() {
  const { autos } = useAutos();
  const [filtros, setFiltros] = useState({ marca: "", año: "", precio: "" });

  const marcas = [...new Set(autos.map(a => a.marca))];
  const años = [...new Set(autos.map(a => a.año))];

  const autosFiltrados = autos.filter(auto => {
    const matchMarca = !filtros.marca || auto.marca === filtros.marca;
    const matchAño = !filtros.año || auto.año === parseInt(filtros.año);
    const matchPrecio =
      !filtros.precio ||
      (filtros.precio === "menor" && auto.precio < 20000000) ||
      (filtros.precio === "mayor" && auto.precio >= 20000000);
    return matchMarca && matchAño && matchPrecio;
  });

  return (
    <div className="catalogo">
      <h1>Catálogo completo</h1>
      <Filtro
        filtros={filtros}
        setFiltros={setFiltros}
        marcas={marcas}
        años={años}
      />
      {autosFiltrados.length > 0
        ? <AutoList autos={autosFiltrados} />
        : <p>No se encontraron autos con esos filtros.</p>
      }
    </div>
  );
}

export default Catalogo;
