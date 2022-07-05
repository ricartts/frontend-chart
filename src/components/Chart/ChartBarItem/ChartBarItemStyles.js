import styled from "styled-components";

export const BarItemContainer = styled.div`
  background-color: ${(props) =>
    props.height === 52.36
      ? "var(--main-color-cyan)"
      : " var(--main-color-red)"};

  height: 100%;
  border-radius: 5px;
  :hover {
    background-color: ${(props) =>
      props.height === 52.36 ? "hsl(186, 34%, 80%)" : " hsl(10, 79%, 85%)"};
    cursor: pointer;
  }
  width: 40px;
  @media only screen and (max-width: 375px) {
    width: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  width: 50px;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 375px) {
    width: 40px;
  }
`;

export const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 400;
  color: gray;
  margin-top: 1em;
`;

export const LowerContainer = styled.div`
  height: calc(${(props) => props.height}%);
`;
