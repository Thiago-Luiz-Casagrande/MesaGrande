import React, { useState } from "react";
import "./Painel.css";

function Painel() {
  return (
    <div className="bigBox">
      <div className="boxText">
        <h2>Thiago Casagrande</h2>
        <p id="descricaoPessoal">
          Marceneiro apaixonado pelo ofício, especializado na criação de mesas
          em MDF que unem qualidade, funcionalidade e design. Com 20 anos,
          transformo cada projeto em uma peça única, feita com precisão e
          dedicação.
        </p>
      </div>
    </div>
  );
}
export default Painel;
