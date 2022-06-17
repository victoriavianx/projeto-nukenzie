import styled from "styled-components";
import { keyframes } from "styled-components";

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
  animation: ${appearFromLeft} 0.5s;
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212529;
  max-width: 1200px;
`;

export const Content = styled.section`
  width: 100vw;
  margin: 0 1.5rem;
  color: #fff;

  h1 {
    font-size: 32px;
    margin: 1rem 0;
    max-width: 300px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 2rem 0;
  }

  button {
    width: 50vw;
    height: 40px;
    color: #fff;
    background-color: #fd377e;
    border-radius: 8px;
    border: 0;
    max-width: 230px;

    :hover {
      background-color: #e34981;
    }
  }

  @media (min-width: 1024px) {
    margin: 0 0 0 5rem;
  }
`;

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;

  figure {
    margin-right: 5px;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  h1 {
    color: #fd377e;
    font-weight: 700;
    padding-bottom: 4px;
    font-size: 24px;
  }
`;

export const BoxImage = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: unset;
    width: 50vw;
    padding-right: 1.5rem;

    img {
      width: 50vw;
    }
  }

  @media (min-width: 1024px) {
    padding: 4rem;

    img {
      width: 550px;
      height: 550px;
    }
  }
`;
