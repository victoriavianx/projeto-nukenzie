import { createContext, useState } from "react";

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
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
    <TransactionsContext.Provider
      value={{
        listTransactions,
        filterState,
        setFilterState,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
