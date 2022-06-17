import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  p {
    font-size: 12px;
    margin-bottom: 12px;
  }

  input {
    height: 44px;
    border: 0;
    padding-left: 10px;
    border-radius: 8px;
    background-color: #f8f9fa;
  }

  span {
    font-size: 10px;
    font-weight: 700;
    margin-top: 5px;
    color: #dc143c;
  }
`;
