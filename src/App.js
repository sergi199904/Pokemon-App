import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Detalle from "./views/Detalle";
import Pokemones from "./views/Pokemones";

function App() {
  return (
    <div className="app fondo">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:nombre" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
