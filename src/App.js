import { useState } from "react";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import "./App.css";

const App = () => {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Despesa", value: -150 },
  ]);

  const addTransaction = (newTransaction) => {
    setListTransactions([...listTransactions, newTransaction]);
  };

  const removeTransaction = (removeItem) => {
    const filteredItem = listTransactions.filter(
      (transaction) => transaction !== removeItem
    );

    setListTransactions(filteredItem);
  };

  return (
    <main>
      <header className="topContainer">
        <Header />
      </header>
      <section className="mainContainer">
        <div className="formMoneyBox">
          <Form addTransaction={addTransaction} />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="transactionBox">
          <Filters
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <List
            listTransactions={listTransactions}
            removeTransaction={removeTransaction}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
