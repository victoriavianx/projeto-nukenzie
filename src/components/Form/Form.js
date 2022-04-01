import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [inputDescription, setInputDescription] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");

  const handleForm = () => {
    console.log(inputDescription);
    console.log(inputValue);
    console.log(inputType);
  };

  return (
    <form onSubmit={(event) => handleForm(event.preventDefault())}>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        value={inputDescription}
        onChange={(event) => setInputDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="R$"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <select
        name="optionList"
        id="optionList"
        value={inputType}
        onChange={(event) => setInputType(event.target.value)}
      >
        <option>Selecione</option>
        <option value="entry">Entrada</option>
        <option value="exit">Saída</option>
      </select>
      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default Form;
