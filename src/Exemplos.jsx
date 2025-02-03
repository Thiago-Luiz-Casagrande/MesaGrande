import Header from "./components/Header";
import "./Exemplos.css";

function Exemplos() {
  return (
    <div>
      <Header />
      <div className="cliente1">
        <h2>Cliente: Ernesto</h2> <h2>Cidade: São José</h2>
        <img src="./src/Images/ImagemErnesto1.jpeg" id="imagemMesa" />
      </div>
    </div>
  );
}
export default Exemplos;
