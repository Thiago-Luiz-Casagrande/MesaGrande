import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function Home() {
  return <h1>Página Inicial</h1>;
}

function About() {
  return <h1>Sobre Nós</h1>;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Resetando o scroll ao mudar de rota */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
