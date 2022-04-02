import { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import "./App.css";

const App = () => {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  const addTransaction = (newTransaction) => {
    setListTransactions([...listTransactions, newTransaction]);
  };

  return (
    <div>
      <section>
        <Form callback={addTransaction} />
      </section>
      <section>
        <TotalMoney listTransactions={listTransactions} />
      </section>
      <section>
        <List listTransactions={listTransactions} />
      </section>
    </div>
  );
};

export default App;
