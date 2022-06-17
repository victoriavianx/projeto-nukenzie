import styled from "styled-components";

export const BoxCard = styled.li`
  width: 100%;
  height: 86px;
  background-color: #f8f9fa;
  margin-bottom: 1rem;
  border-radius: 4px;
  border-left: 5px solid #e9ecef;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 500px;

  div {
    margin-left: 1.5rem;
    margin-right: 3rem;

    p {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    span {
      font-size: 12px;
    }
  }

  p {
    font-size: 14px;
  }

  button {
    width: 22px;
    height: 22px;
    margin-left: 1rem;
    border: 0;
    border-radius: 4px;
  }

  @media (min-width: 700px) {
    div {
      margin-left: 0;
    }
  }
`;
