import "./Header.css";
import { Navigate, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img
        src="src/Images/logo-marca.png"
        alt="Logo da Marca"
        width={200}
        onClick={() => navigate("/")}
      />
      <div className="headerordem">
        <p className="headerHeader" onClick={() => navigate("/exemplos")}>
          Exemplos
        </p>
        <p className="headerHeader" onClick={() => navigate("/sobreNos")}>
          Quem somos
        </p>
      </div>
    </div>
  );
}
export default Header;
