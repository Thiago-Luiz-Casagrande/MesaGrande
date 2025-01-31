import "./Depoimentos.css";

function Depoimentos() {
  return (
    <div className="boxDepoimentos">
      <div className="fixaLinha">
        <div className="depUnit ">
          <p>
            "Adoramos a mesa de reunião que eles fabricaram para nosso
            escritório. O tamanho e a cor ficaram ideais para o nosso espaço.
            Recomendo!"
          </p>
          <br />
          <p>– Gabriel R.</p>
        </div>

        <div className="depUnit borderLeft">
          <p>
            "Atendimento de primeira e a mesa que adquirimos ficou perfeita. A
            entrega foi pontual, e a montagem foi super ágil."
          </p>
          <br />
          <p>– Carla B.</p>
        </div>
      </div>

      <div className="fixaLinha borderTop">
        <div className="depUnit ">
          <p>
            "Super satisfeitos com a mesa! Atendimento incrível, entrega rápida
            e a qualidade é sem igual. Com certeza voltaremos a comprar!"
          </p>
          <br />
          <p>– Rodrigo C.</p>
        </div>

        <div className="depUnit borderLeft">
          <p>
            "Fizemos a escolha certa ao contratar essa empresa. A mesa sob
            medida ficou exatamente como queríamos, e a montagem foi super
            eficiente."
          </p>
          <br />
          <p>– Juliana A.</p>
        </div>
      </div>
    </div>
  );
}
export default Depoimentos;
