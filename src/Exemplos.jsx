import Header from "./components/Header";
import "./Exemplos.css";

function Exemplos() {
  return (
    <div>
      <Header />
      <div className="cliente1">
        <br />
        <br />
        <br />
        <br />
        <h2>Cliente: Ernesto</h2> <h2>Cidade: São José</h2>
        <img src="./src/Images/Cliente1/ImagemErnesto1.jpeg" id="imagemMesa" />
        <img src="./src/Images/Cliente1/ImagemErnesto2.jpg" id="imagemMesa" />
        <img src="./src/Images/Cliente1/ImagemErnesto3.jpg" id="imagemMesa" />
        <img src="./src/Images/Cliente1/ImagemErnesto4.jpg" id="imagemMesa" />
      </div>
      <div className="cliente1">
        <h2>Cliente: Cíntia</h2> <h2>Cidade: Bal. Camboriú</h2>
        <img src="./src/Images/Cliente2/ClienteCintia1.jpg" id="imagemMesa" />
        <img src="./src/Images/Cliente2/ClienteCintia2.jpg" id="imagemMesa" />
        <img src="./src/Images/Cliente2/ClienteCintia3.jpg" id="imagemMesa" />
        <img src="./src/Images/Cliente2/ClienteCintia4.jpg" id="imagemMesa" />
        <br />
      </div>
    </div>
  );
}
export default Exemplos;
