import Chart from "../Chart/Chart";
import { Title, Container, Hr } from "./FullChartStyles";
import Recap from "../Recap/Recap";
const FullChart = () => {
  return (
    <Container>
      <Title>Spending - Last 7 days</Title>
      <Chart />
      <Hr></Hr>
      <Recap />
    </Container>
  );
};

export default FullChart;
