import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: auto;
`;

export const LeftWrapper = styled.div`
  align-self: flex-end;
`;

export const RightWrapper = styled.div`
  align-self: flex-end;
`;

export const Amount = styled.div`
  font-size: 2rem;
  color: var(--neutral-color-dark-brown);
  font-weight: 700;
`;

export const Span = styled.span`
  font-size: 0.8rem;
  color: gray;
`;

export const Percentage = styled.div`
  font-size: 0.8rem;
  color: var(--neutral-color-dark-brown);
  font-weight: 700; ;
`;
