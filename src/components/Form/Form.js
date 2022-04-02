import { useState } from "react";

const Form = ({ callback }) => {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClick = (callback) => {
    callback(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="description"
        type="text"
        placeholder="Digite aqui sua descrição"
        value={formValues.description}
        onChange={handleInputChange}
      />
      <input
        name="value"
        type="text"
        placeholder="R$"
        value={formValues.value}
        onChange={handleInputChange}
      />
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
      <button onClick={() => handleClick(callback)}>Inserir valor</button>
    </form>
  );
};

export default Form;
