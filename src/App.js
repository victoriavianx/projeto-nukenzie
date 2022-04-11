import { useState } from "react";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import "./App.css";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);

  const [filterState, setFilterState] = useState([]);

  const addTransaction = (newTransaction) => {
    setListTransactions([...listTransactions, newTransaction]);
    setFilterState([...listTransactions, newTransaction]);
  };

  const removeTransaction = (removeItem) => {
    const filteredItem = listTransactions.filter(
      (transaction) => transaction !== removeItem
    );

    setListTransactions(filteredItem);
    setFilterState(filteredItem);
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
            setFilterState={setFilterState}
          />
          <List
            filterState={filterState}
            removeTransaction={removeTransaction}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
