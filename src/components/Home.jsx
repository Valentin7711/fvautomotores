import { useAutos } from "../mock/Mock";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import AutoCarousel from "./AutoCarousel";

function Home() {
  const { autos } = useAutos();

  return (
    <>
      <div className="hero-banner">
        <img src="/bmw.jpg" alt="Auto principal" className="hero-img" />
        <div className="hero-overlay">
          <section className="seccion-inicio">
            <h2>Bienvenido a FV Automotores</h2>
            <p>Explorá nuestro catálogo y encontrá el auto ideal para vos.</p>
          </section>
          <button
            className="hero-btn"
            onClick={() =>
              document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver autos{" "}
            <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: "10px" }} />
          </button>
        </div>
      </div>

      <section className="info-usado fade-in">
        <div className="info-contenido">
          <h2>¿Querés entregar tu auto usado?</h2>
          <p>Lo recibimos como parte de pago y lo cotizamos a precio de lista.</p>
          <ul>
            <li>Cotización justa y actualizada</li>
            <li>Transferencia inmediata</li>
            <li>Trato transparente y seguro</li>
          </ul>
        </div>
        <img src="/auto.jpg" alt="Recibimos tu auto usado" className="info-img" />
      </section>

      <h1 className="catalogo-title fade-in">Algunos modelos destacados</h1>
      <div id="catalogo" className="pagina-inicio contenedor">
        <AutoCarousel autos={autos.slice(0, 8)} />
      </div>
    </>
  );
}

export default Home;
