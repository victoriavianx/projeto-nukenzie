import { useContext } from "react";
import { TransactionsContext } from "../../providers/transactions/transactions";
import { BoxValue } from "./styles";

const TotalMoney = () => {
  const { listTransactions } = useContext(TransactionsContext);

  const totalValue = listTransactions.reduce((acc, currentValue) => {
    return (
      acc +
      Number(
        currentValue.type === "Despesa"
          ? currentValue.value * -1
          : currentValue.value
      )
    );
  }, 0);

  const formatCurrency = (number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <BoxValue>
      <p>Valor total:</p>
      <span>{formatCurrency(totalValue)}</span>
    </BoxValue>
  );
};

export default TotalMoney;
