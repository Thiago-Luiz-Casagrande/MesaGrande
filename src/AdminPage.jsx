import Header from "./components/Header";
import "./AdminPage.css";
import { useState } from "react";
import React from "react";
import {
  makeHook14,
  makeHook15,
  makeHook16,
  makeHook17,
  makeHook18,
  makeHook19,
  makeHook20,
  makeHook21,
  makeHook22,
} from "./MakeHook";

function AdminPage() {
  const { precoChBranco, setValorChBranca } = makeHook14();
  const { precoChSolido, setValorChSolido } = makeHook15();
  const { precoChMadeirado, setValorChMadeirado } = makeHook16();
  const { precoChFundo, setValorChFundo } = makeHook17();
  const { precoTomada, setValorCxTomada } = makeHook18();
  const { precoPassaFio, setValorPassaFio } = makeHook19();
  const { precoFitaBorda, setValorFitaBorda } = makeHook20();
  const { precoFitaLed, setValorFitaLed } = makeHook21();
  const { precoFioEletrico, setValorFioEletrico } = makeHook22();

  // function atualizaPrecos() {
  //   console.log(precoChBranco);

  //   localStorage.setItem("precoChBranco", precoChBranco);
  //   localStorage.setItem("precoChSolido", precoChBranco);
  //   localStorage.setItem("precoChMadeirado", precoChBranco);
  //   localStorage.setItem("precoChFundo", precoChBranco);
  //   localStorage.setItem("precoTomada", precoChBranco);
  //   localStorage.setItem("precoPassaFio", precoChBranco);
  //   localStorage.setItem("precoFitaBorda", precoChBranco);
  //   localStorage.setItem("precoFitaLed", precoChBranco);
  //   localStorage.setItem("precoFioEletrico", precoChBranco);
  // }

  return (
    <div>
      <Header />
      <div className="manutencaoPrecos">
        <label htmlFor="precoChBranco">Chapa Branca :</label>
        <input
          type="number"
          id="precoChBranco"
          value={precoChBranco}
          placeholder={localStorage.getItem("precoChBranco")}
          onChange={setValorChBranca}
        />
        <br />
        <br />
        <label htmlFor="precoChSolido">Chapa Solido :</label>
        <input
          type="number"
          id="precoChSolido"
          value={precoChSolido}
          placeholder={localStorage.getItem("precoChSolido")}
          onChange={setValorChSolido}
        />
        <br />
        <br />
        <label htmlFor="precoChMadeirado">Chapa Madeirado :</label>
        <input
          type="number"
          id="precoChMadeirado"
          value={precoChMadeirado}
          placeholder={localStorage.getItem("precoChMadeirado")}
          onChange={setValorChMadeirado}
        />
        <br />
        <br />
        <label htmlFor="precoChFundo">Chapa Fundo (6mm) :</label>
        <input
          type="number"
          id="precoChFundo"
          value={precoChFundo}
          placeholder={localStorage.getItem("precoChFundo")}
          onChange={setValorChFundo}
        />
        <br />
        <br />
        <label htmlFor="precoTomada">Caixa de tomada :</label>
        <input
          type="number"
          id="precoTomada"
          value={precoTomada}
          placeholder={localStorage.getItem("precoTomada")}
          onChange={setValorCxTomada}
        />
        <br />
        <br />
        <label htmlFor="precoPassaFio">Passa fio :</label>
        <input
          type="number"
          id="precoPassaFio"
          value={precoPassaFio}
          placeholder={localStorage.getItem("precoPassaFio")}
          onChange={setValorPassaFio}
        />
        <br />
        <br />
        <label htmlFor="precoFitaBorda">Fita Borda :</label>
        <input
          type="number"
          id="precoFitaBorda"
          value={precoFitaBorda}
          placeholder={localStorage.getItem("precoFitaBorda")}
          onChange={setValorFitaBorda}
        />
        <br />
        <br />
        <label htmlFor="precoFitaLed">Fita LED :</label>
        <input
          type="number"
          id="precoFitaLed"
          value={precoFitaLed}
          placeholder={localStorage.getItem("precoFitaLed")}
          onChange={setValorFitaLed}
        />
        <br />
        <br />
        <label htmlFor="precoFioEletrico">Fio Eletrico(Mts) :</label>
        <input
          type="number"
          id="precoFioEletrico"
          value={precoFioEletrico}
          placeholder={localStorage.getItem("precoFioEletrico")}
          onChange={setValorFioEletrico}
        />
        <br />
        <br />
        {/* <button onClick={AtualizaValores()}>Atualizar</button> */}
      </div>
    </div>
  );
}
export default AdminPage;
