import React, { useState } from "react";
import CheckboxColor from "./CheckboxColor.jsx";
import "./Calculadora.css";
import ButtonClicado from "./ButtonClicado.jsx";
import {
  makeHook1,
  makeHook2,
  makeHook3,
  makeHook4,
  makeHook5,
  makeHook6,
  makeHook7,
  makeHook8,
  makeHook9,
  makeHook10,
  makeHook11,
} from "./makeHook.jsx";
export const largura = 10;
export const comprimento = 10;

function Calculadora() {
  const [branco, setBranco] = useState("Branco");
  const [solido, setSolido] = useState("Sólido");
  const [madeirado, setMadeirado] = useState("Madeirado");

  const { selectPes, coresPes } = makeHook1();
  const { selectTampo, coresTampo } = makeHook2();
  const { selectEnergia, tipoEnergia } = makeHook3();
  const { showSemPainel, checkSemPainel } = makeHook4();
  const { selectPainel, corPainel } = makeHook5();
  const { showFitaLed, checkFitaLed } = makeHook6();
  const { showMontagem, checkMontagem } = makeHook7();
  const { showFrete, checkfrete } = makeHook8();
  const { distDestino, handleChange } = makeHook9();
  const { largura, tamanhoLargura } = makeHook10();
  const { comprimento, tamanhoComprimento } = makeHook11();

  const [mostrarComponente, setMostrarComponente] = useState(false);
  const clickCalcular = () => {
    setMostrarComponente(true); // Atualiza o estado para mostrar o componente
  };

  const [varCaixa, setVarCaixa] = useState(10);

  function teste() {
    const valores = {
      chBranco: 210,
      chSolido: 300,
      chMadeirado: 350,
      chFundo: 150,
      cxTomada: 40,
      passaFio: 5,
      fitaLed: 80,
      fioEletrico: 7,
    };

    setVarCaixa(valores.chBranco + valores.chFundo);
    return varCaixa;
  }

  return (
    <div className="bigbox">
      <h2 className="titleBox">Central de Personalização</h2>
      <div className="textbox">
        <div className="selectColor">
          <p className="chackbox">Cores dos pés:</p>
          <CheckboxColor
            title={branco}
            id="1"
            name="pes"
            value={branco}
            type="radio"
            onChange={coresPes}
          />
          <CheckboxColor
            title={solido}
            id="2"
            name="pes"
            value={solido}
            type="radio"
            onChange={coresPes}
          />
          <CheckboxColor
            title={madeirado}
            id="3"
            name="pes"
            value={madeirado}
            type="radio"
            onChange={coresPes}
          />
        </div>
        <div className="selectColor">
          <p className="chackbox">Cores do tampo:</p>
          <CheckboxColor
            title={branco}
            id="4"
            name="tampo"
            type="radio"
            value={branco}
            onChange={coresTampo}
          />
          <CheckboxColor
            title={solido}
            id="5"
            name="tampo"
            type="radio"
            value={solido}
            onChange={coresTampo}
          />
          <CheckboxColor
            title={madeirado}
            id="6"
            name="tampo"
            type="radio"
            value={madeirado}
            onChange={coresTampo}
          />
        </div>
        <div className="selectColor">
          <p className="chackbox">Energia</p>
          <CheckboxColor
            title="Passa fio"
            id="7"
            name="pes"
            type="radio"
            value="PassaFio"
            onChange={tipoEnergia}
          />
          <CheckboxColor
            title="Caixa de tomadas"
            id="8"
            name="pes"
            type="radio"
            value="CaixaDeTomadas"
            onChange={tipoEnergia}
          />
        </div>
        <div className="selectColor">
          <p className="chackbox">Cores do painel: (opcional)</p>
          <input
            type="checkbox"
            name="sPainel"
            id="9"
            onChange={checkSemPainel}
          />
          <label htmlFor="sPainel">Sem Painel</label>
          <br />
          <CheckboxColor
            title={branco}
            id="10"
            name="painel"
            type="radio"
            value={branco}
            onChange={corPainel}
          />
          <CheckboxColor
            title={solido}
            id="11"
            name="painel"
            type="radio"
            value={solido}
            onChange={corPainel}
          />
          <CheckboxColor
            title={madeirado}
            id="12"
            name="painel"
            type="radio"
            value={madeirado}
            onChange={corPainel}
          />
          <CheckboxColor
            title="Fita LED"
            id="13"
            name="painel"
            type="checkbox"
            onChange={checkFitaLed}
          />
        </div>
        <br />
        <CheckboxColor
          title="Montagem"
          id="14"
          type="checkbox"
          onChange={checkMontagem}
        />
        <CheckboxColor
          title="Frete"
          id="11"
          onChange={checkfrete}
          type="checkbox"
        />
        {}
        <div className="inputNumber">
          <label htmlFor="frete" id="titleFrete">
            Distância de Itajaí (km)
          </label>
          <input
            type="number"
            id="frete"
            step="10"
            value={distDestino}
            onChange={handleChange}
          />
        </div>
        <h3 className="titleDimencoes">Dimenções</h3>
        <div className="inputSize">
          <label htmlFor="largura">Largura (cm)</label>
          <input
            type="number"
            id="largura"
            step="10"
            value={largura}
            onChange={tamanhoLargura}
          />
          <br />
          <label htmlFor="comprimento">Comprimento (cm)</label>
          <input
            type="number"
            id="comprimento"
            step="10"
            value={comprimento}
            onChange={tamanhoComprimento}
          />
        </div>
        <div className="calcular">
          <button className="buttonCalcular" onClick={clickCalcular}>
            Calcular
          </button>
          <p className="precoFinal">
            Valor Total: R${mostrarComponente && teste()}*
          </p>
        </div>
        <h6>*este valor pode ter uma alteração de até 10%</h6>
      </div>
    </div>
  );
}

export default Calculadora;
