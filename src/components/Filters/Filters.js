import "./Filters.css";

const Filters = ({ listTransactions, setListTransactions }) => {
  const showAllTransactions = () => {
    return listTransactions;
  };

  const filterEntriesTransactions = () => {
    const filteredEntries = listTransactions.filter(
      (transaction) => transaction.type === "Entrada"
    );

    setListTransactions(filteredEntries);
  };

  const filterExpensesTransactions = () => {
    const filteredExpenses = listTransactions.filter(
      (transaction) => transaction.type === "Despesa"
    );

    setListTransactions(filteredExpenses);
  };

  return (
    <menu className="menuFilters">
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
    </menu>
  );
};

export default Filters;
