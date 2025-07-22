import "../css/Loader.css"

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>Cargando...</p>
    </div>
  );
}

