import "./Card.css";
import Trash from "./trash.png";

const Card = ({ transaction, removeTransaction }) => {
  const { description, value, type } = transaction;

  const formatCurrency = (number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <li className="cardTransaction">
      <p>{description}</p>
      <p id="currency">{formatCurrency(value)}</p>
      <span>{type}</span>
      <button onClick={() => removeTransaction(transaction)}>
        <img src={Trash} alt="trash" />
      </button>
    </li>
  );
};

export default Card;
