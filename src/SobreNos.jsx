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
          Olá, meu nome é Thiago Casagrande, sou marceneiro especializado na
          criação de móveis sob medida, sempre buscando unir qualidade,
          funcionalidade e design em cada peça. Meu foco principal está na
          construção de mesas em MDF, desde modelos para escritório até peças
          personalizadas para atender às necessidades dos meus clientes. Além
          das mesas, também realizo projetos como painéis ripados e soluções
          inovadoras, como gavetas que abrem tanto para frente quanto para trás,
          sempre priorizando acabamento impecável, durabilidade e sofisticação.
          Cada detalhe do meu trabalho é pensado com cuidado, garantindo que o
          resultado final seja funcional, esteticamente agradável e de alta
          qualidade. Se você procura móveis planejados feitos com dedicação e
          excelência, estou pronto para transformar seu projeto em realidade.
        </p>
        <p className="myDescription">Vamos criar algo incrível juntos!</p>
        <img src="src/Images/imgPerfil.png" alt="" id="imgPerfil" />
      </div>
      <h1 className="titleDescription">Área de atuação</h1>
      <div className="bloco2">
        <img src="src/Images/imgFrete.png" id="imgFrete" />
        <p className="myDescription">
          Atendemos clientes em todo o litoral norte de Santa Catarina,
          oferecendo móveis sob medida com qualidade e design diferenciado.
          Nosso objetivo é proporcionar soluções personalizadas para transformar
          ambientes com funcionalidade e sofisticação. Nossa atuação abrange
          cidades como Joinville, Piçarras, Penha, Navegantes, Itajaí, Balneário
          Camboriú, Itapema e Florianópolis, e diversas outras cidades, sempre
          prezando pelo atendimento personalizado e excelência na entrega dos
          nossos produtos. Caso necessário, também podemos enviar nossos móveis
          para outras regiões por meio de transportadora, garantindo que cada
          peça chegue com segurança ao seu destino. Se você busca móveis
          planejados com qualidade e um toque de exclusividade, estamos prontos
          para atender você!
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default SobreNos;
