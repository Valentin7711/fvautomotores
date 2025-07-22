import { useRef } from "react";
import Auto from "./Auto";
import "../css/AutoCarousel.css";

export default function AutoCarousel({ autos }) {
  const scrollRef = useRef(null);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <>
      <div className="carousel-wrapper">
        <button
          className="scroll-btn left"
          onClick={scrollLeft}
          aria-label="Desplazar hacia la izquierda"
        >
          ❮
        </button>

        <div className="carousel-container" ref={scrollRef}>
          <div className="carousel">
            {autos.map((auto) => (
              <Auto key={auto.id} auto={auto} />
            ))}
          </div>
        </div>

        <button
          className="scroll-btn right"
          onClick={scrollRight}
          aria-label="Desplazar hacia la derecha"
        >
          ❯
        </button>
      </div>

      {/* Texto indicativo para móvil */}
      <p className="slide-hint">
        Desliza para ver más
      </p>
    </>
  );
}
