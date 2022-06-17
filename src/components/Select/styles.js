import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;

  p {
    font-size: 12px;
    margin-bottom: 12px;
  }

  select {
    height: 44px;
    border: 0;

    padding-left: 2px;
    border-radius: 8px;
    background-color: #f8f9fa;
  }
`;
