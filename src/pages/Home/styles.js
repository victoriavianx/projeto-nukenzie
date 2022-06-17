import { keyframes } from "styled-components";
import styled from "styled-components";

const appearFromLeft = keyframes`
from{
    opacity: 0;
    transform: translateX(-50px)
}

to {
    opacity: 1;
    transform: translateX(0px)
}
`;

export const Container = styled.main`
  background-color: #fff;
  animation: ${appearFromLeft} 0.5s;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  max-width: 1024px;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;
