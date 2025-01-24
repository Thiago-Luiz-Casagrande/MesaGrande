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
