import Header from "./components/Header";
import "./AdminPage.css";
import { useState } from "react";

function AdminPage() {
  let precoChBranco;
  function atualizaPrecos() {
    console.log(precoChBranco);
    const [loading, setLoading] = useState(false);

    const executarAcao = () => {
      setLoading(true); // Muda o estado para "carregando"

      setTimeout(() => {
        setLoading(false); // Retorna ao estado inicial após 2 segundos
      }, 2000);
    };

    localStorage.setItem("precoChBranco", precoChBranco);
    localStorage.setItem("precoChSolido", precoChBranco);
    localStorage.setItem("precoChMadeirado", precoChBranco);
    localStorage.setItem("precoChFundo", precoChBranco);
    localStorage.setItem("precoTomada", precoChBranco);
    localStorage.setItem("precoPassaFio", precoChBranco);
    localStorage.setItem("precoFitaBorda", precoChBranco);
    localStorage.setItem("precoFitaLed", precoChBranco);
    localStorage.setItem("precoFioEletrico", precoChBranco);
  }

  return (
    <div>
      <Header />
      <div className="manutencaoPrecos">
        <label htmlFor="precoChBranco">Chapa Branca :</label>
        <input type="number" id="precoChBranco" />
        <br />
        <br />
        <label htmlFor="precoChSolido">Chapa Solido :</label>
        <input type="number" id="precoChSolido" />
        <br />
        <br />
        <label htmlFor="precoChMadeirado">Chapa Madeirado :</label>
        <input type="number" id="precoChMadeirado" />
        <br />
        <br />
        <label htmlFor="precoChFundo">Chapa Madeirado :</label>
        <input type="number" id="precoChFundo" />
        <br />
        <br />
        <label htmlFor="precoTomada">Caixa de tomada :</label>
        <input type="number" id="precoTomada" />
        <br />
        <br />
        <label htmlFor="precoPassaFio">Passa fio :</label>
        <input type="number" id="precoPassaFio" />
        <br />
        <br />
        <label htmlFor="precoFitaBorda">Fita Borda :</label>
        <input type="number" id="precoFitaBorda" />
        <br />
        <br />
        <label htmlFor="precoFitaLed">Fita LED :</label>
        <input type="number" id="precoFitaLed" />
        <br />
        <br />
        <label htmlFor="precoFioEletrico">Fio Eletrico(Mts) :</label>
        <input type="number" id="precoFioEletrico" />
        <br />
        <br />
        <button onClick={executarAcao} disabled={loading}>
          {loading ? "Processando..." : "Clique aqui"}
        </button>
      </div>
    </div>
  );
}
export default AdminPage;
