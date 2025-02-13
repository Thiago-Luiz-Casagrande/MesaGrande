import { useState } from "react";

export function makeHook1() {
  const [selectPes, setSelectPes] = useState(""); // Correto: useState dentro da função
  const coresPes = (e) => {
    setSelectPes(e.target.value); // Atualiza o estado com o valor do rádio selecionado
  };
  return {
    selectPes,
    coresPes,
  };
}
export function makeHook2() {
  const [selectTampo, setSelectTampo] = useState(""); // Correto: useState dentro da função
  const coresTampo = (e) => {
    setSelectTampo(e.target.value); // Atualiza o estado com o valor do rádio selecionado
  };
  return {
    selectTampo,
    coresTampo,
  };
}
export function makeHook3() {
  const [selectEnergia, setselectEnergia] = useState(""); // Correto: useState dentro da função
  const tipoEnergia = (e) => {
    setselectEnergia(e.target.value); // Atualiza o estado com o valor do rádio selecionado
  };
  return {
    selectEnergia,
    tipoEnergia,
  };
}
export function makeHook4() {
  const [showSemPainel, setShowSemPainel] = useState(false); // Correto: useState dentro da função
  const checkSemPainel = (e) => {
    setShowSemPainel(e.target.value); // Atualiza o estado com o valor do rádio selecionado
  };
  return {
    showSemPainel,
    checkSemPainel,
  };
}
export function makeHook5() {
  const [selectPainel, setSelectPainel] = useState(""); // Armazena o valor do radio
  const corPainel = (e) => {
    setSelectPainel(e.target.value); // Atualiza o estado com o valor do rádio selecionado
  };
  return {
    selectPainel,
    corPainel,
  };
}
export function makeHook6() {
  const [showFitaLed, setShowFitaLed] = useState(false); // Estado para controlar a exibição da div
  const checkFitaLed = (e) => {
    setShowFitaLed(e.target.checked);
  };
  return {
    showFitaLed,
    checkFitaLed,
  };
}
export function makeHook7() {
  const [showMontagem, setShowMontagem] = useState(false); // Estado para controlar a exibição da div
  const checkMontagem = (e) => {
    setShowMontagem(e.target.checked);
  };
  return {
    showMontagem,
    checkMontagem,
  };
}
export function makeHook8() {
  const [showFrete, setShowFrete] = useState(false); // Estado para controlar a exibição da div
  const checkfrete = (e) => {
    setShowFrete(e.target.checked);
  };
  return {
    showFrete,
    checkfrete,
  };
}
export function makeHook9() {
  const [distDestino, setdistDestino] = useState(""); // Armazena o valor do radio
  const handleChange = (e) => {
    const distancia = parseFloat(e.target.value) || 0;
    setdistDestino(distancia);
  };
  return {
    distDestino,
    handleChange,
  };
}
export function makeHook10() {
  const [largura, setLargura] = useState(""); // Armazena o valor do radio
  const tamanhoLargura = (e) => {
    const tamLargura = parseFloat(e.target.value) || 0;
    setLargura(tamLargura);
  };
  return {
    largura,
    tamanhoLargura,
  };
}
export function makeHook11() {
  const [comprimento, setComprimento] = useState(""); // Armazena o valor do radio
  const tamanhoComprimento = (e) => {
    const tamComprimento = parseFloat(e.target.value) || 0;
    setComprimento(tamComprimento);
  };
  return {
    comprimento,
    tamanhoComprimento,
  };
}
export function makeHook12() {
  const [showSemEnergia, setShowSemEnergia] = useState(false); // Armazena o valor do radio
  const checkSemEnergia = (e) => {
    setShowSemEnergia(e.target.value);
  };
  return {
    showSemEnergia,
    checkSemEnergia,
  };
}
export function makeHook13() {
  const [showTamRef, setshowTamRef] = useState(false); // Armazena o valor do radio
  const checkTamRef = (e) => {
    setshowTamRef(e.target.value);
  };
  return {
    showTamRef,
    checkTamRef,
  };
}
export function MakeHook14() {
  const [precoChBranco, setPrecoChBranco] = useState(""); // Armazena o valor do radio
  const setValorChBranca = (e) => {
    const valorChBranca = parseFloat(e.target.value) || 0;
    setPrecoChBranco(valorChBranca);
    localStorage.setItem("precoChBranco", precoChBranco);
  };
  return {
    precoChBranco,
    setValorChBranca,
  };
}
export function MakeHook15() {
  const [precoChSolido, setprecoChSolido] = useState(""); // Armazena o valor do radio
  const setValorChSolido = (e) => {
    const valorChSolido = parseFloat(e.target.value) || 0;
    setprecoChSolido(valorChSolido);
    localStorage.setItem("precoChSolido", precoChSolido);
  };
  return {
    precoChSolido,
    setValorChSolido,
  };
}
export function MakeHook16() {
  const [precoChMadeirado, setPrecoChMadeirado] = useState(""); // Armazena o valor do radio
  const setValorChMadeirado = (e) => {
    const valorChmMadeirado = parseFloat(e.target.value) || 0;
    setPrecoChMadeirado(valorChmMadeirado);
    localStorage.setItem("precoChMadeirado", precoChMadeirado);
  };
  return {
    precoChMadeirado,
    setValorChMadeirado,
  };
}
export function MakeHook17() {
  const [precoChFundo, setprecoChFundo] = useState(""); // Armazena o valor do radio
  const setValorChFundo = (e) => {
    const valorChfundo = parseFloat(e.target.value) || 0;
    setprecoChFundo(valorChfundo);
    localStorage.setItem("precoChFundo", precoChFundo);
  };
  return {
    precoChFundo,
    setValorChFundo,
  };
}
export function MakeHook18() {
  const [precoTomada, setprecoTomada] = useState(""); // Armazena o valor do radio
  const setValorCxTomada = (e) => {
    const valorCxTomada = parseFloat(e.target.value) || 0;
    setprecoTomada(valorCxTomada);
    localStorage.setItem("precoTomada", precoTomada);
  };
  return {
    precoTomada,
    setValorCxTomada,
  };
}
export function MakeHook19() {
  const [precoPassaFio, setprecoPassaFio] = useState(""); // Armazena o valor do radio
  const setValorPassaFio = (e) => {
    const valorPassaFio = parseFloat(e.target.value) || 0;
    setprecoPassaFio(valorPassaFio);
    localStorage.setItem("precoPassaFio", precoPassaFio);
  };
  return {
    precoPassaFio,
    setValorPassaFio,
  };
}
export function MakeHook20() {
  const [precoFitaBorda, setprecoFitaBorda] = useState(""); // Armazena o valor do radio
  const setValorFitaBorda = (e) => {
    const valorFitaBorda = parseFloat(e.target.value) || 0;
    setprecoFitaBorda(valorFitaBorda);
    localStorage.setItem("precoFitaBorda", precoFitaBorda);
  };
  return {
    precoFitaBorda,
    setValorFitaBorda,
  };
}
export function MakeHook21() {
  const [precoFitaLed, setprecoFitaLed] = useState(""); // Armazena o valor do radio
  const setValorFitaLed = (e) => {
    const valorFitaLed = parseFloat(e.target.value) || 0;
    setprecoFitaLed(valorFitaLed);
    localStorage.setItem("precoFitaLed", precoFitaLed);
  };
  return {
    precoFitaLed,
    setValorFitaLed,
  };
}
export function MakeHook22() {
  const [precoFioEletrico, setprecoFioEletrico] = useState(""); // Armazena o valor do radio
  const setValorFioEletrico = (e) => {
    const valorFioEletrico = parseFloat(e.target.value) || 0;
    setprecoFioEletrico(valorFioEletrico);
    localStorage.setItem("precoFioEletrico", precoFioEletrico);
  };
  return {
    precoFioEletrico,
    setValorFioEletrico,
  };
}
