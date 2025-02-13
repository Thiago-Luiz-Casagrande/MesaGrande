import Header from "./components/Header";
import "./SobreNos.css";
import Footer from "./Footer";

function SobreNos() {
  return (
    <div>
      <Header />
      <div className="bloco">
        <h1 className="titleDescription">Sobre nós</h1>
        <p className="myDescription">
          Thiago Casagrande é marceneiro especializado em móveis sob medida, com
          foco na construção de mesas em MDF para escritórios e projetos
          personalizados. Além das mesas, desenvolve painéis ripados e soluções
          inovadoras, como gavetas com abertura dupla. Seu trabalho se destaca
          pela qualidade, funcionalidade e design sofisticado, garantindo
          durabilidade e um acabamento impecável. Se você busca móveis
          planejados com excelência, ele está pronto para transformar seu
          projeto em realidade.
        </p>
        <p className="myDescription topNull">
          Vamos criar algo incrível juntos!
        </p>
        <img src="/Images/imgPerfil.png" alt="" id="imgPerfil" />
      </div>
      <h1 className="titleDescription">Área de atuação</h1>
      <div className="bloco2">
        <img src="/Images/imgFrete.png" id="imgFrete" />
        <p className="myDescription alingText">
          Atendemos clientes em todo o litoral norte de Santa Catarina,
          oferecendo móveis sob medida com qualidade e design diferenciado.
          Nossa atuação inclui cidades como Joinville, Balneário Camboriú,
          Itajaí e Florianópolis, sempre com atendimento personalizado. Também
          enviamos móveis para outras regiões via transportadora, garantindo
          segurança na entrega. Se busca móveis planejados exclusivos, estamos
          prontos para atender você!
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default SobreNos;
