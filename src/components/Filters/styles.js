import styled from "styled-components";

export const Menu = styled.menu`
  width: 90vw;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;

  p {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  nav {
    button {
      width: 22vw;
      height: 38px;
      margin-right: 1rem;
      background-color: #e9ecef;
      border-radius: 8px;
      border: 0;
      font-weight: 400;

      :hover {
        background-color: #fd377e;
        color: #e9ecef;
      }
    }
  }

  @media (min-width: 700px) {
    width: 50vw;

    nav {
      button {
        width: 80px;
      }
    }
  }

  @media (min-width: 1024px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    p {
      padding-top: 1rem;
    }
  }
`;
