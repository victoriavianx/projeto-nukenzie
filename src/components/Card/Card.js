import { BoxCard } from "./styles";
import Trash from "../../assets/trash.png";

const Card = ({ transaction, removeTransaction }) => {
  const { description, value, type } = transaction;

  const formatCurrency = (number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const borderStyle = {
    borderLeft: type === "Entrada" ? "5px solid #03B898" : "5px solid #dc143c",
  };

  return (
    <BoxCard style={borderStyle}>
      <div>
        <p>{description}</p>
        <span>{type}</span>
      </div>
      <p>{formatCurrency(value)}</p>
      <button onClick={() => removeTransaction(transaction)}>
        <img src={Trash} alt="trash" />
      </button>
    </BoxCard>
  );
};

export default Card;
