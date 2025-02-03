import "./Fpagamento.css";

function Fpagamento() {
  return (
    <div className="caixaTotal">
      <h1>Formas de pagamento</h1>
      <br />

      <div className="conjuntoLogos">
        <p>Dinheiro</p>
        <img
          src="./src/Images/simboloDinheiro.png"
          alt=""
          className="simbolos"
        />
      </div>
      <div className="linhaVertical"></div>
      <div className="conjuntoLogos">
        <p>Pix</p>
        <img src="./src/Images/simboloPix.png" alt="" className="simbolos" />
      </div>
      <div className="linhaVertical"></div>
      <div className="conjuntoLogos">
        <p>Cartao de Crédito/Débito</p>
        <img src="./src/Images/simboloCartao.png" alt="" className="simbolos" />
      </div>
    </div>
  );
}
export default Fpagamento;
