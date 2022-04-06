import Card from "../Card/Card";

const List = ({ filterState, removeTransaction }) => {
  return (
    <ul>
      {filterState.map((transaction, index) => (
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
