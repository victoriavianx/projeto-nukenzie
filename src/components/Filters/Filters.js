import "./Filters.css";

const Filters = ({ listTransactions, setFilterState }) => {
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
