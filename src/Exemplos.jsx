import Header from "./Header/Header";
import "./Exemplos.css";
import Footer from "./Footer/Footer";

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
        <img src="/Images/Cliente1/ImagemErnesto1.jpeg" id="imagemMesa" />
        <img src="/Images/Cliente1/ImagemErnesto2.JPG" id="imagemMesa" />
        <img src="/Images/Cliente1/ImagemErnesto3.jpg" id="imagemMesa" />
        <img src="/Images/Cliente1/ImagemErnesto4.jpg" id="imagemMesa" />
      </div>
      <div className="cliente1">
        <h2>Cliente: Cíntia</h2> <h2>Cidade: Bal. Camboriú</h2>
        <img src="/Images/Cliente2/ClienteCintia1.jpg" id="imagemMesa" />
        <img src="/Images/Cliente2/ClienteCintia2.jpg" id="imagemMesa" />
        <img src="/Images/Cliente2/ClienteCintia3.jpg" id="imagemMesa" />
        <img src="/Images/Cliente2/ClienteCintia4.jpg" id="imagemMesa" />
        <br />
      </div>
      <div className="cliente1">
        <h2>Cliente: Luís</h2> <h2>Cidade: Bal. Camboriú</h2>
        <img src="/Images/Cliente3/imagemLuiz1.jpg" id="imagemMesa" />
        <img src="/Images/Cliente3/imagemLuiz2.jpg" id="imagemMesa" />
        <img src="/Images/Cliente3/imagemLuiz3.jpg" id="imagemMesa" />
        <img src="/Images/Cliente3/imagemLuiz4.jpg" id="imagemMesa" />
        <br />
      </div>
      <div className="cliente1">
        <h2>Cliente: Jean</h2> <h2>Cidade: Bal. Piçarras</h2>
        <img src="/Images/Cliente4/imagemJean1.jpg" id="imagemMesa" />
        <img src="/Images/Cliente4/imagemJean2.jpg" id="imagemMesa" />
        <img src="/Images/Cliente4/imagemJean3.jpg" id="imagemMesa" />
        <br />
      </div>
      <Footer />
    </div>
  );
}
export default Exemplos;
