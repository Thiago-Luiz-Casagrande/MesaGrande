import Header from "./components/Header.jsx";
import Calculadora from "./Calculadora.jsx";
import Painel from "./Painel.jsx";
import Fpagamento from "./Fpagamento.jsx";
import Footer from "./Footer.jsx";
import Depoimentos from "./Depoimentos.jsx";
import App from "./App.jsx";

function Principal() {
  return (
    <div>
      <Header />
      <App />
      <Calculadora />
      <Fpagamento />
      <Painel />
      <Depoimentos />
      <Footer />
    </div>
  );
}

export default Principal;
