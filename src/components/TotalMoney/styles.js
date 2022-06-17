import styled from "styled-components";

export const BoxValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  height: 96px;
  margin: 1rem;
  border-radius: 4px;
  border: 1px solid #e9ecef;

  p {
    width: 85px;
    height: 20px;
    margin-left: 15px;
    font-size: 16px;
    font-weight: 700;
    color: #212529;
  }

  span {
    margin-right: 15px;
    font-size: 16px;
    font-weight: 700;
    color: #fd377e;
  }

  @media (min-width: 700px) {
    width: 40vw;
  }

  @media (min-width: 900px) {
    width: 360px;
  }
`;
