import styled from "styled-components";

export const Box = styled.div`
  width: 80vw;
  height: 40vh;
  margin: 3rem auto 0 auto;
  max-width: 500px;

  h1 {
    font-size: 18px;
    margin-bottom: 1rem;
  }

  @media (min-width: 700px) {
    width: 45vw;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 86px;
  background-color: #f8f9fa;
  margin-bottom: 1rem;
  border-radius: 4px;
  border-left: 5px solid #e9ecef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;

  @media (min-width: 700px) {
    width: 45vw;
  }
`;

export const Title = styled.div`
  width: 70vw;
  height: 10px;
  margin-left: 1rem;
  margin-bottom: 15px;
  background-color: #e9ecef;
  max-width: 400px;

  @media (min-width: 700px) {
    width: 30vw;
  }
`;
