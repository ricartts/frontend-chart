import {
  Container,
  LeftWrapper,
  RightWrapper,
  Amount,
  Span,
  Percentage,
} from "./RecapStyles";

const Recap = () => {
  return (
    <Container>
      <LeftWrapper>
        <Span>Total this month</Span>
        <Amount>$478,33</Amount>
      </LeftWrapper>
      <RightWrapper>
        <Percentage>2,4%</Percentage>
        <Span>from last month</Span>
      </RightWrapper>
    </Container>
  );
};

export default Recap;
