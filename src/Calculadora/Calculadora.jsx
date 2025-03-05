import { useState, useEffect } from "react";
import CheckboxColor from "../CheckboxColor";
import { useForm } from "react-hook-form";

import {
  MakeHook1,
  MakeHook2,
  MakeHook3,
  MakeHook4,
  MakeHook5,
  MakeHook6,
  MakeHook7,
  MakeHook8,
  MakeHook9,
  MakeHook10,
  MakeHook11,
  MakeHook12,
  MakeHook13,
} from "../MakeHookTable";

function Calculadora() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    import(isMobile ? "./MCalculadora.css" : "./DCalculadora.css")
      .then(() =>
        console.log("CSS carregado:", isMobile ? "mobile.css" : "desktop.css")
      )
      .catch((error) => console.error("Erro ao carregar CSS:", error));

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  //iniciar React hook form
  const { register, handleSubmit } = useForm();

  const [branco, setBranco] = useState("Branco");
  const [solido, setSolido] = useState("Sólido");
  const [madeirado, setMadeirado] = useState("Madeirado");

  const { selectPes, coresPes } = MakeHook1();
  const { selectTampo, coresTampo } = MakeHook2();
  const { selectEnergia, tipoEnergia } = MakeHook3();
  const { showSemPainel, checkSemPainel } = MakeHook4();
  const { selectPainel, corPainel } = MakeHook5();
  const { showFitaLed, checkFitaLed } = MakeHook6();
  const { showMontagem, checkMontagem } = MakeHook7();
  const { showFrete, checkfrete } = MakeHook8();
  const { distDestino, handleChange } = MakeHook9();
  const { largura, tamanhoLargura } = MakeHook10();
  const { comprimento, tamanhoComprimento } = MakeHook11();
  const { showSemEnergia, checkSemEnergia } = MakeHook12();
  const { showTamRef, checkTamRef } = MakeHook13();

  const [mostrarComponente, setMostrarComponente] = useState(false);

  var varCaixa = 0;
  let extras = 0;

  const handleClick = () => {
    setMostrarComponente(true); // Atualiza o estado para mostrar o componente

    setTimeout(() => {
      setMostrarComponente(false);
    }, 1000); // 1000 ms = 1 segundos
  };

  // let precoBranc = Number(localStorage.getItem("precoChBranco"));
  // console.log(precoBranc);

  const valores = {
    chBranco: Number(localStorage.getItem("precoChBranco")),
    chSolido: Number(localStorage.getItem("precoChSolido")),
    chMadeirado: Number(localStorage.getItem("precoChMadeirado")),
    chFundo: Number(localStorage.getItem("precoChFundo")),
    cxTomada: Number(localStorage.getItem("precoTomada")),
    fitaBorda: Number(localStorage.getItem("precoFitaBorda")),
    passaFio: Number(localStorage.getItem("precoPassaFio")),
    fitaLed: Number(localStorage.getItem("FitaLed")),
    fioEletrico: Number(localStorage.getItem("precoFioEletrico")),
  };

  let quantFita = 0;

  const teste = () => {
    varCaixa = 0;
    if (showTamRef) {
      varCaixa += valores.chFundo;
      quantFita = 0.02 * largura + 0.02 * comprimento;
      quantFita = quantFita * valores.fitaBorda;
      varCaixa += quantFita;
    }
    if (comprimento < 350 || largura < 350) {
      switch (selectPes) {
        case "Branco":
          varCaixa += valores.chBranco;
          break;
        case "Sólido":
          varCaixa += valores.chSolido;
          break;
        case "Madeirado":
          varCaixa += valores.chMadeirado;
          break;
      }
      let calTampoMad = 1;
      if (comprimento > 270 || largura > 270) {
        calTampoMad = 2;
      }
      switch (selectTampo) {
        case "Branco":
          varCaixa += calTampoMad * valores.chBranco;
          break;
        case "Sólido":
          varCaixa += calTampoMad * valores.chSolido;
          break;
        case "Madeirado":
          varCaixa += calTampoMad * valores.chMadeirado;
          break;
      }
      if (showSemEnergia) {
        varCaixa += 0;
      } else {
        switch (selectEnergia) {
          case "PassaFio":
            varCaixa += valores.passaFio;
            break;
          case "CaixaDeTomadas":
            varCaixa += valores.cxTomada;
            break;
        }
      }
      if (showSemPainel) {
        varCaixa += 0;
      } else {
        switch (selectPainel) {
          case "Branco":
            varCaixa += valores.chBranco;
            break;
          case "Sólido":
            varCaixa += valores.chSolido;
            break;
          case "Madeirado":
            varCaixa += valores.chMadeirado;
            break;
        }
        if (showFitaLed) varCaixa += valores.fitaLed;
      }
      if (showMontagem && showFrete) {
        extras += 100; // gasolina padrao
        extras += 150; // diaria montagem
        extras += 4 * distDestino; // gasolina extra
      }
      if (showMontagem && !showFrete) {
        extras += 150; // diaria montagem
        extras += 1 * distDestino; // gasolina extra
      }
      if (!showMontagem && showFrete) {
        extras += 100; // gasolina padrao
        extras += 4 * distDestino; // gasolina extra
      }
    }
    varCaixa = varCaixa * 2.4;
    varCaixa += extras;
    const formatarValor = (varCaixa) => {
      return varCaixa.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    };
    console.log(varCaixa);
    return formatarValor(varCaixa);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bigbox">
      <h2 className="titleBox">Central de Personalização</h2>
      <div className="textbox">
        <div className="selectColor">
          <p className="chackbox">Cores dos pés:</p>
          <label>Branco</label>
          <input type="radio" {...register("tampoB")} />

          {/* <CheckboxColor
            title={branco}
            id="1"
            name="pes"
            value={branco}
            type="radio"
            onChange={coresPes}
          /> */}
          <label>Solido</label>
          <input type="radio" {...register("tampoS")} />
          {/* <CheckboxColor
            title={solido}
            id="2"
            name="pes"
            value={solido}
            type="radio"
            onChange={coresPes}
          /> */}
          <label>Madeirado</label>
          <input type="radio" {...register("tampoM")} />
          {/* <CheckboxColor
            title={madeirado}
            id="3"
            name="pes"
            value={madeirado}
            type="radio"
            onChange={coresPes}
          /> */}
        </div>
        <div className="selectColor">
          <p className="chackbox">Cores do tampo:</p>
          <input type="checkbox" name="tamRef" id="4" onChange={checkTamRef} />
          <label htmlFor="tamRef">Tampo Reforçado</label>
          <br />
          <CheckboxColor
            title={branco}
            id="5"
            name="tampo"
            type="radio"
            value={branco}
            onChange={coresTampo}
          />
          <CheckboxColor
            title={solido}
            id="6"
            name="tampo"
            type="radio"
            value={solido}
            onChange={coresTampo}
          />
          <CheckboxColor
            title={madeirado}
            id="7"
            name="tampo"
            type="radio"
            value={madeirado}
            onChange={coresTampo}
          />
        </div>
        <br />
        <div className="selectColor">
          <p className="chackbox">Energia</p>
          <input
            type="checkbox"
            name="sEnergia"
            id="8"
            onChange={checkSemEnergia}
          />
          <label htmlFor="sPainel">Sem Energia</label>
          <br />
          <CheckboxColor
            title="Passa fio"
            id="9"
            name="energia"
            type="radio"
            value="PassaFio"
            onChange={tipoEnergia}
          />
          <CheckboxColor
            title="Caixa de tomadas"
            id="10"
            name="energia"
            type="radio"
            value="CaixaDeTomadas"
            onChange={tipoEnergia}
          />
        </div>
        <br />
        <div className="selectColor">
          <p className="chackbox">Cores do painel: (opcional)</p>
          <input
            type="checkbox"
            name="sPainel"
            id="11"
            onChange={checkSemPainel}
          />
          <label htmlFor="sPainel">Sem Painel</label>
          <br />
          <CheckboxColor
            title={branco}
            id="12"
            name="painel"
            type="radio"
            value={branco}
            onChange={corPainel}
          />
          <CheckboxColor
            title={solido}
            id="13"
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
            id="14"
            name="painel"
            type="checkbox"
            onChange={checkFitaLed}
          />
        </div>
        <br />
        <CheckboxColor
          title="Montagem"
          id="15"
          type="checkbox"
          onChange={checkMontagem}
        />
        <CheckboxColor
          title="Frete"
          id="16"
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
          <button
            className="buttonCalcular"
            onClick={() => handleSubmit(onSubmit)()}
          >
            Calcular
          </button>
          <p className="precoFinal">
            Valor Total: {mostrarComponente ? teste() : teste()}
          </p>
          <h4>*</h4>
        </div>
        <h6>*este valor pode ter uma alteração de até 10%</h6>
      </div>
    </div>
  );
}

export default Calculadora;
