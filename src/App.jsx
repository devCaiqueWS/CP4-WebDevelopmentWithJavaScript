import {} from "react";
import "./App.css";
/* para instalar as dependencias : npm install react-router-dom */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*import dos componentes */
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Exemplo1 from "./Exemplo1";
import Exemplo2 from "./Exemplo2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Exemplo1" element={<Exemplo1 />} />
          <Route path="/Exemplo2" element={<Exemplo2 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
