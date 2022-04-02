const Card = ({ transaction }) => {
  const { description, value, type } = transaction;

  const formatCurrency = (number) => {
    return Number(number).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <li>
      <p>{description}</p>
      <p>{formatCurrency(value)}</p>
      <span>{type}</span>
      <button>Deletar</button>
    </li>
  );
};

export default Card;
