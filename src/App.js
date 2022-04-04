import { useState } from "react";
import Header from "./components/Header/Header";
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
    <>
      <header>
        <Header />
      </header>
      <main className="mainContainer">
        <div className="formBox">
          <Form addTransaction={addTransaction} />
        </div>
        <div className="moneyBox">
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <section className="transactionBox">
          <List listTransactions={listTransactions} />
        </section>
      </main>
    </>
  );
};

export default App;
