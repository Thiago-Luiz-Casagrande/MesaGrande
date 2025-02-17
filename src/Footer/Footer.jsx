// import "./Footer.css";
import WhatsAppButton from "../WhatsAppButton";
import InstagramButton from "../InstagramButton";
import { useState, useEffect } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    import(isMobile ? "./MFooter.css" : "./DFooter.css")
      .then(() =>
        console.log("CSS carregado:", isMobile ? "mobile.css" : "desktop.css")
      )
      .catch((error) => console.error("Erro ao carregar CSS:", error));

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <div className="boxFooter">
      <img src="/Images/logo-marca.png" alt="" width={180} id="logoFooter" />
      <div className="linkRedes">
        <img
          src="/Images/logoWhatsapp.png"
          width={30}
          className="simboloRedes"
        />
        <WhatsAppButton />
        <p className="simbolosRedes espaco"></p>
        <img
          src="/Images/logoInstagram.png"
          width={30}
          className="simboloRedes"
        />
        <InstagramButton />
        <p className="simbolosRedes"></p>
      </div>
      <div className="textFooter">
        <h3>Nossas dados</h3>
        <p>Endereço: Rua Ana Moser 123, Pacincia, Itajaí, SC</p>
        <p>CNPJ: 58.367.476/0001-45</p>
        <p>Email: thiagocasagrande2004@gmail.com</p>
      </div>
    </div>
  );
}
export default Footer;
