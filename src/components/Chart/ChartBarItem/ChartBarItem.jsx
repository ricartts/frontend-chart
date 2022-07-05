import React, { useState } from "react";
import {
  BarItemContainer,
  Container,
  DayContainer,
  LowerContainer,
} from "./ChartBarItemStyles";
import HoverAmount from "./HoverAmount/HoverAmount";
const ChartBarItem = ({ day, height, quantity }) => {
  const [displayHover, setDisplayHover] = useState(false);
  return (
    <>
      <Container
        onMouseOver={() => setDisplayHover(true)}
        onMouseLeave={() => {
          setDisplayHover(false);
        }}
      >
        {displayHover && <HoverAmount quantity={quantity} />}
        <LowerContainer height={height}>
          <BarItemContainer height={height}></BarItemContainer>
          <DayContainer>{day}</DayContainer>
        </LowerContainer>
      </Container>
    </>
  );
};

export default ChartBarItem;
