import Card from "../Card/Card";

const List = ({ listTransactions, removeTransaction }) => {
  return (
    <ul>
      {listTransactions.map((transaction, index) => (
        <Card
          transaction={transaction}
          removeTransaction={removeTransaction}
          key={index}
        />
      ))}
    </ul>
  );
};

export default List;
