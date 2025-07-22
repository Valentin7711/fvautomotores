// components/GlobalLoader.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

export default function GlobalLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Cuando cambia la ruta, activamos el loader
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // cambio de duración si querés

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading ? <Loader /> : children}
    </>
  );
}
