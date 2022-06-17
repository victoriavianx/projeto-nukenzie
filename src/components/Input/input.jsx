import { Box } from "./styles";

const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <Box>
      <p>{label}</p>
      <input {...register(name)} {...rest} type="text" />
      {!!error && <span>{error}</span>}
    </Box>
  );
};

export default Input;
