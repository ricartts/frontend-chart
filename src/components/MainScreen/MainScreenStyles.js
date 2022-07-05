import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--neutral-color-cream);
`;

export const Wrapper = styled.div`
  width: 30%;
  height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: 375px) {
    width: 90%;
  }
`;
