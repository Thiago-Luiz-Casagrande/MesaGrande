import "./Footer.css";

function Footer() {
  return (
    <div className="boxFooter">
      <img src="src/Images/logo-marca.png" alt="" width={180} id="logoFooter" />
      <div className="linkRedes">
        <img
          src="src/Images/logoWhatsapp.png"
          width={30}
          className="simboloRedes"
        />
        <p className="simbolosRedes espaco">Whatsapp</p>
        <img
          src="src/Images/logoInstagram.png"
          width={30}
          className="simboloRedes"
        />
        <p className="simbolosRedes">Instagram</p>
      </div>
      <div className="textFooter">
        <h3>Nossas dados</h3>
        <p>Endereço: Rua Ana Moser 123, Pacincia, Itajaí, SC</p>
        <p>CNPJ: 58.367.476/0001-45</p>
        <p>Instagram:</p>
        <p>Email: thiagocasagrande2004@gmail.com</p>
      </div>
    </div>
  );
}
export default Footer;
