import { Box } from "./styles";

const Select = ({ label, name, register, options, error, ...rest }) => {
  return (
    <Box>
      <p>{label}</p>
      {!!error && <span>{error}</span>}
      <select {...register(name)} {...rest}>
        {options.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </Box>
  );
};

export default Select;
