import "./Header.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    import(isMobile ? "./MHeader.css" : "./Header.css")
      .then(() =>
        console.log("CSS carregado:", isMobile ? "mobile.css" : "desktop.css")
      )
      .catch((error) => console.error("Erro ao carregar CSS:", error));

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const goToExamples1 = () => {
    window.scrollTo(0, 0); // Reseta o scroll para o topo
    navigate("/"); // Faz a navegação
  };
  const goToExamples2 = () => {
    window.scrollTo(0, 0); // Reseta o scroll para o topo
    navigate("/exemplos"); // Faz a navegação
  };
  const goToExamples3 = () => {
    window.scrollTo(0, 0); // Reseta o scroll para o topo
    navigate("/sobreNos"); // Faz a navegação
  };
  return (
    <div className="header">
      <img src="/Images/logo-marca.png" width={200} onClick={goToExamples1} />
      <div className="headerordem">
        <p className="headerHeader" onClick={goToExamples2}>
          Exemplos
        </p>
        <p className="headerHeader" onClick={goToExamples3}>
          Quem somos
        </p>
      </div>
    </div>
  );
}

export default Header;
