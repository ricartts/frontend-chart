import React from "react";
import Balance from "../Balance/Balance";
import FullChart from "../FullChart/FullChart";

import { Container, Wrapper } from "./MainScreenStyles";
const MainScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Balance />
        <FullChart />
      </Wrapper>
    </Container>
  );
};

export default MainScreen;
