import styled from "styled-components";

export const Box = styled.header`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  button {
    width: 64px;
    height: 38px;
    background-color: #e9ecef;
    border-radius: 8px;
    border: 0;
    font-weight: 700;

    :hover {
      background-color: #343a40;
      color: #e9ecef;
    }
  }

  @media (min-width: 768px) {
    button {
      margin-left: 10vw;
    }
  }
`;

export const LogoBox = styled.div`
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

  @media (min-width: 768px) {
    margin-right: 10vw;
  }
`;
