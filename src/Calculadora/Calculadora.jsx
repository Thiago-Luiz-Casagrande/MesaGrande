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
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

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
    //console.log(varCaixa);
    return formatarValor(varCaixa);
  };

  console.log({ errors });

  const onSubmit = (data) => {
    console.log(data);
    alert(getValues("tampo"));
    alert(data);
  };
  return (
    <div className="bigbox">
      <h2 className="titleBox">Central de Personalização</h2>
      <div className="textbox">
        <div className="selectColor">
          <p className="chackbox">Cores dos pés:</p>
          <select
            defaultValue="0"
            className={errors?.pes && "input-error"}
            {...register("pes", { validate: (value) => value !== "0" })}
          >
            <option value="0">Escolha as opões</option>
            <option value="branco">{branco}</option>
            <option value="solido">{solido}</option>
            <option value="madeirado">{madeirado}</option>
          </select>

          {errors?.pes?.type === "validate" && (
            <p className="error-message">Escolha uma opção</p>
          )}
        </div>
        <div className="selectColor">
          <p className="chackbox">Cores do tampo:</p>
          <input type="checkbox" name="tamRef" id="4" onChange={checkTamRef} />
          <label htmlFor="tamRef">Tampo Reforçado</label>
          <br />
          <select
            defaultValue="0"
            {...register("tampo", { validate: (value) => value !== "0" })}
          >
            <option value="0">Escolha as opões</option>
            <option value="branco">{branco}</option>
            <option value="solido">{solido}</option>
            <option value="madeirado">{madeirado}</option>
          </select>
          {errors?.tampo?.type === "validate" && (
            <p className="error-message">Escolha uma opção</p>
          )}
        </div>
        <div className="selectColor">
          <p className="chackbox">Energia</p>
          <select defaultValue="0" {...register("energia")}>
            <option value="sem Energia">Sem Energia</option>
            <option value="Passa Fio">Passa Fio</option>
            <option value="Caixa de tomada">Caixa de tomada</option>
          </select>
        </div>
        <div className="selectColor">
          <p className="chackbox">Cores do painel: (opcional)</p>

          <br />
          <select defaultValue="0" {...register("painel")}>
            <option value="0">Sem Painel</option>
            <option value="branco">{branco}</option>
            <option value="solido">{solido}</option>
            <option value="madeirado">{madeirado}</option>
          </select>

          {/* <CheckboxColor
            title="Fita LED"
            id="14"
            name="painel"
            type="checkbox"
            onChange={checkFitaLed}
          /> */}
          <br />
          <br />
          <div>
            <label>Fita Led</label>
            <input
              type="checkbox"
              name="fitaLed"
              {...register("fitaLed", {
                validate: (value) => value === true,
              })}
            />
          </div>
        </div>
        <br />
        <div>
          <label id="15" className="label">
            Montagem
          </label>
          <div>
            <input type="checkbox" name="montagem" {...register("montagem")} />
          </div>
        </div>
        <div className="form-group">
          <label id="16" className="label">
            Frete
          </label>
          <div className="checkbox-group">
            <input
              type="checkbox"
              name="frete"
              {...register("frete", {
                validate: (value) => value === true,
              })}
            />
          </div>
        </div>
        {}
        <div className="inputNumber">
          <label id="distancia">Distância de Itajaí (km)</label>
          <input
            type="number"
            id="distancia"
            step="10"
            // value={distDestino}
            onChange={handleChange}
            {...register("distancia")}
          />
        </div>
        <h3 className="titleDimencoes">Dimenções</h3>
        <div className="inputSize">
          <label htmlFor="largura">Largura (cm)</label>
          <input
            type="number"
            id="largura"
            step="10"
            // value={largura}
            onChange={tamanhoLargura}
            {...register("largura", { validate: (value) => value > 0 })}
          />
          {errors?.largura?.type === "validate" && (
            <p className="error-message">Escolha um tamanho</p>
          )}
          <br />
          <label htmlFor="comprimento">Comprimento (cm)</label>
          <input
            type="number"
            id="comprimento"
            step="10"
            // value={comprimento}
            onChange={tamanhoComprimento}
            {...register("comprimento", { validate: (value) => value !== 0 })}
          />
          {errors?.comprimento?.type === "validate" && (
            <p className="error-message">Escolha uma opção</p>
          )}
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
