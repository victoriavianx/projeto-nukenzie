import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TransactionsContext } from "../../providers/transactions/transactions";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../Input/input";
import Select from "../Select/select";
import { Container, Divisor, InputValue } from "./styles";

const Form = () => {
  const { addTransaction } = useContext(TransactionsContext);

  const schema = yup.object().shape({
    description: yup.string().required("Campo obrigatório"),
    value: yup.string().required("Campo obrigatório"),
    type: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const optionList = ["Selecione", "Entrada", "Despesa"];

  const handleFormSubmit = (data) => {
    addTransaction(data);
  };

  return (
    <Container onSubmit={handleSubmit(handleFormSubmit)}>
      <Divisor>
        <Input
          register={register}
          label={"Descrição"}
          name="description"
          placeholder="Digite aqui sua descrição"
          error={errors.description?.message}
        />
      </Divisor>
      <Divisor>
        <InputValue>
          <Input
            register={register}
            label={"Valor"}
            name="value"
            placeholder="R$"
            error={errors.value?.message}
          />
        </InputValue>
        <Select
          register={register}
          label={"Tipo de Valor"}
          name="type"
          options={optionList}
          error={errors.type?.message}
        />
      </Divisor>
      <button type="submit">Inserir valor</button>
    </Container>
  );
};

export default Form;
