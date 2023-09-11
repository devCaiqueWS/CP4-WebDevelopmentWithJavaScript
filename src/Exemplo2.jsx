import {} from "react";
import "./Exemplo2.css";

function Exemplo2() {
  return (
    <>
      <div id="container-produtos">
        <div>
          <img src="/vinho-seco.jpg" alt="Vinho Seco" />
          <label>Produto: Vinho Seco</label>
        </div>
        <div>
          <img src="/vinho-rose.jpg" alt="Vinho Rosé" />
          <label>Produto: Vinho Rosé</label>
        </div>
        <div>
          <img src="/vinho-tinto.jpg" alt="Vinho Tinto" />
          <label>Produto: Vinho Tinto</label>
        </div>
      </div>
    </>
  );
}
export default Exemplo2;
