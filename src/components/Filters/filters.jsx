import { useContext } from "react";
import { TransactionsContext } from "../../providers/transactions/transactions";
import { Menu } from "./styles";

const Filters = () => {
  const { listTransactions, setFilterState } = useContext(TransactionsContext);

  const showAllTransactions = () => {
    setFilterState(listTransactions);
  };

  const filterEntriesTransactions = () => {
    const filteredEntries = listTransactions.filter(
      (transaction) => transaction.type === "Entrada"
    );

    setFilterState(filteredEntries);
  };

  const filterExpensesTransactions = () => {
    const filteredExpenses = listTransactions.filter(
      (transaction) => transaction.type === "Despesa"
    );

    setFilterState(filteredExpenses);
  };

  return (
    <Menu>
      <p>Resumo Financeiro</p>
      <nav>
        <button className="allButton" onClick={showAllTransactions}>
          Todos
        </button>
        <button className="entryButton" onClick={filterEntriesTransactions}>
          Entradas
        </button>
        <button className="expenseButton" onClick={filterExpensesTransactions}>
          Despesas
        </button>
      </nav>
    </Menu>
  );
};

export default Filters;
