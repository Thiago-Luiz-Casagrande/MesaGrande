import Header from "./components/Header";
import Calculadora from "./Calculadora";
import Painel from "./Painel";
import Fpagamento from "./Fpagamento";
import Footer from "./Footer";
import Depoimentos from "./Depoimentos";
import App from "./App";

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
