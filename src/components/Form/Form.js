import { useState } from "react";
import "./Form.css";

const Form = ({ addTransaction }) => {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClick = (addTransaction) => {
    addTransaction(formValues);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Descrição</p>
      <input
        name="description"
        className="inputDescription"
        type="text"
        placeholder="Digite aqui sua descrição"
        value={formValues.description}
        onChange={handleInputChange}
      />

      <p>Valor</p>
      <input
        name="value"
        className="inputValue"
        type="text"
        placeholder="R$"
        value={formValues.value}
        onChange={handleInputChange}
      />

      <p>Tipo de Valor</p>
      <select
        name="type"
        id="optionList"
        value={formValues.type}
        onChange={handleInputChange}
      >
        <option>Selecione</option>
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
      </select>

      <button
        className="formButton"
        onClick={() => handleClick(addTransaction)}
      >
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
