import styled from "styled-components";
import { Box } from "../Input/styles";

export const Container = styled.form`
  width: 90vw;
  height: 40vh;
  margin: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    width: 80vw;
    height: 48px;
    margin: 0 auto;
    margin-top: 15px;
    border: 1px solid #fd377e;
    border-radius: 8px;
    background-color: #fd377e;
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    color: #ffffff;

    :hover {
      cursor: pointer;
      background-color: #e34981;
    }
  }

  @media (min-width: 700px) {
    width: 40vw;
    height: 35vh;

    button {
      width: 36vw;
    }
  }

  @media (min-width: 900px) {
    width: 360px;
    height: 320px;

    button {
      width: 320px;
    }
  }
`;

export const Divisor = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 1rem;
`;

export const InputValue = styled(Box)`
  input {
    width: 80%;
  }
`;
