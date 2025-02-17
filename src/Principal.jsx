import Header from "./Header/Header";
import Calculadora from "./Calculadora/Calculadora.jsx";
import Painel from "./Painel";
import Fpagamento from "./Fpagamento";
import Footer from "./Footer/Footer";
import Depoimentos from "./Depoimentos";
import App from "./App/App";

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
