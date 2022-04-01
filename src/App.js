import { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";

const App = () => {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  return (
    <div>
      <Form
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
    </div>
  );
};

export default App;
