import { useContext } from "react";
import { TransactionsContext } from "../../providers/transactions/transactions";
import Card from "../Card/card";
import NoTransactions from "../NoTransaction";
import { Box } from "../NoTransaction/styles";

const List = () => {
  const { filterState, removeTransaction } = useContext(TransactionsContext);

  return (
    <>
      {filterState.length === 0 ? (
        <NoTransactions />
      ) : (
        <Box>
          {filterState.map((transaction, index) => (
            <Card
              transaction={transaction}
              removeTransaction={removeTransaction}
              key={index}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default List;
