function Calcular() {
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
  return <div></div>;
}

export default Calcular;
