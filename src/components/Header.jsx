import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src="logo-marca.png" alt="Logo da Marca" width={200} />
      <div className="headerordem">
        <p className="headerHeader">Exemplos</p>
        <p className="headerHeader">Quem somos</p>
      </div>
    </div>
  );
}
export default Header;
