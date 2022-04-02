const TotalMoney = ({ listTransactions }) => {
  const totalValue = listTransactions.reduce((acc, currentValue) => {
    return (acc += Number(currentValue.value));
  }, 0);

  const formatCurrency = (number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div>
      <p>Valor total</p>
      <span>{formatCurrency(totalValue)}</span>
    </div>
  );
};

export default TotalMoney;
