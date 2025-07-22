import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLoader from "./components/GlobalLoader";
import AutoDetalle from "./components/AutoDetalle";
import Header from "./components/Header";
import Home from "./components/Home"; 
import Catalogo from "./components/Catalogo";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <GlobalLoader>
      <Header />
      <main className="main-content">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalle/:id" element={<AutoDetalle />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<p>Página no encontrada</p>} />
    </Routes>
    </main>
    <Footer />
    </GlobalLoader>
    </BrowserRouter>
  );
}

export default App;
