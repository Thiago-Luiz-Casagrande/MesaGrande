import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import App from "./App.jsx";
import "./index.css";
import Calculadora from "./Calculadora.jsx";
import Painel from "./Painel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <App />
    <Calculadora />
    <Painel />
  </StrictMode>
);
