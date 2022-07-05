import ChartBarItem from "../ChartBarItem/ChartBarItem";

import { Container } from "./ChartItemListtyles";
const ChartItemList = () => {
  let data = require("../data.json");
  return data.map((item) => {
    return (
      <ChartBarItem
        day={item.day}
        height={item.amount}
        quantity={item.amount}
      />
    );
  });
};

export default ChartItemList;

//item.amount / 53) * 100
