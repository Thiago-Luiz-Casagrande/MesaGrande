import "./Calculadora.css";

function CheckboxColor(props) {
  const checkboxes = document.querySelectorAll(".checkbox");

  // Adiciona um evento de clique em cada checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      // Desmarca todos os outros checkboxes
      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    });
  });

  return (
    <div className="agruparCheckbox">
      <label for={props.id} className="label">
        {props.title}
      </label>
      <input type="radio" name={props.name} id={props.id} />
    </div>
  );
}

export default CheckboxColor;
