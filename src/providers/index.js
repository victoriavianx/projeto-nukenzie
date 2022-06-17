import { TransactionsProvider } from "./transactions/transactions";

const Providers = ({ children }) => {
  return <TransactionsProvider>{children}</TransactionsProvider>;
};

export default Providers;
