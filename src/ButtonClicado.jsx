import React, { useState } from "react";
import { largura, comprimento } from "./Calculadora.jsx";
import {
  makeHook1,
  makeHook2,
  makeHook3,
  makeHook4,
  makeHook5,
  makeHook6,
  makeHook7,
  makeHook8,
  makeHook9,
  makeHook10,
  makeHook11,
} from "./makeHook.jsx";

function ButtonClicado() {
  const [resultado, setResultado] = useState(1);
  //   setResultado(2);
  return resultado;
}

export default ButtonClicado;
