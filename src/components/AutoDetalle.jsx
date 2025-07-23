import { useParams } from "react-router-dom";
import { useAutos } from "../mock/Mock";
import AutoInfo from "../components/AutoInfo";
import "../css/AutoDetalle.css";
import { useState } from "react";

function AutoDetalle() {
  const { id } = useParams();
  const { autos } = useAutos();
  const auto = autos.find((a) => a.id === parseInt(id));

  const [imagenDestacada, setImagenDestacada] = useState(0);
  const [modalAbierto, setModalAbierto] = useState(false);

  if (!auto) return <p>Auto no encontrado</p>;

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  const siguienteImagen = (e) => {
    e.stopPropagation();
    setImagenDestacada((prev) => (prev + 1) % auto.imagen.length);
  };

  const anteriorImagen = (e) => {
    e.stopPropagation();
    setImagenDestacada((prev) => (prev - 1 + auto.imagen.length) % auto.imagen.length);
  };

  return (
    <>
      <div className="auto-detalle-contenido">
        <div className="galeria-auto">
          <div className="imagen-principal" onClick={abrirModal}>
            <img src={auto.imagen[imagenDestacada]} alt="Imagen principal" />
          </div>

          <div className="miniaturas">
            {auto.imagen.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Miniatura ${i + 1}`}
                className={i === imagenDestacada ? "activa" : ""}
                onClick={() => setImagenDestacada(i)}
              />
            ))}
          </div>
        </div>

        <AutoInfo auto={auto} />
      </div>

      {modalAbierto && (
        <div className="modal" onClick={cerrarModal}>
          <span className="cerrar" onClick={cerrarModal}>&times;</span>
          <img
            className="modal-img"
            src={auto.imagen[imagenDestacada]}
            alt="Vista ampliada"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="anterior" onClick={anteriorImagen}>&#10094;</button>
          <button className="siguiente" onClick={siguienteImagen}>&#10095;</button>
        </div>
      )}
    </>
  );
}

export default AutoDetalle;
