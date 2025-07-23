// components/GlobalLoader.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

export default function GlobalLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading ? <Loader /> : children}
    </>
  );
}
