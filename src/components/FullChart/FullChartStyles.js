import styled from "styled-components";

export const Title = styled.h3`
  font-size: 1.5rem;
  padding: 0 10px;
  margin-left: 3em;
  color: var(--neutral-color-dark-brown);
  margin-bottom: 0;
  @media only screen and (max-width: 375px) {
    margin-left: 0.5em;
    font-size: 1.4rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  background-color: white;
  border-radius: 15px;
`;

export const Hr = styled.div`
  width: 1px;
  height: 1px;
  color: var(--neutral-color-dark-brown);
`;
