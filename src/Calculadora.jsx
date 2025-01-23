import { useState } from "react";
import CheckboxColor from "./CheckboxColor.jsx";
import "./Calculadora.css";

function Calculadora() {
  const [title, setTitle] = useState("");
  const [branco, setBranco] = useState("Branco");
  const [solido, setSolido] = useState("Sólido");
  const [madeirado, setMadeirado] = useState("Madeirado");

  return (
    <div className="bigbox">
      <h2 className="titleBox">Central de Personalização</h2>
      <div className="textbox">
        <div className="selectColor">
          <p className="chackbox">Cores dos pés:</p>
          <CheckboxColor title={branco} id="1" name="pes" />
          <CheckboxColor title={solido} id="2" name="pes" />
          <CheckboxColor title={madeirado} id="3" name="pes" />
        </div>
        <div className="selectColor">
          <p className="chackbox">Cores do tampo:</p>
          <CheckboxColor title={branco} id="4" name="tampo" />
          <CheckboxColor title={solido} id="5" name="tampo" />
          <CheckboxColor title={madeirado} id="6" name="tampo" />
        </div>
        <div className="selectColor">
          <p className="chackbox">Cores do painel: (opcional)</p>

          <input type="checkbox" name="sPainel" id="" />
          <label htmlFor="sPainel">Sem Painel</label>
          <br />
          <CheckboxColor title={branco} id="7" name="painel" />
          <CheckboxColor title={solido} id="8" name="painel" />
          <CheckboxColor title={madeirado} id="9" name="painel" />
        </div>
        <br />
        <CheckboxColor title="Montagem" id="10" />
        <CheckboxColor title="Frete" id="11" />
        <div className="inputNumber">
          <label htmlFor="frete">Distância de Itajaí (km)</label>
          <input type="number" id="frete" step="10" />
        </div>
        <h3 className="titleDimencoes">Dimenções</h3>
        <div className="inputSize">
          <label htmlFor="largura">Largura (cm)</label>
          <input type="number" id="largura" step="10" />
          <br />
          <label htmlFor="comprimento">Comprimento (cm)</label>
          <input type="number" id="comprimento" step="10" />
        </div>
        <div className="calcular">
          <button className="buttonCalcular">Calcular</button>
          <p className="precoFinal">Valor Total: R$1.000,00*</p>
        </div>
        <h6>*este valor pode ter uma alteração de até 10%</h6>
      </div>
    </div>
  );
}
export default Calculadora;
