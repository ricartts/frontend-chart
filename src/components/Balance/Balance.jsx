import MyBalance from "./MyBalance/MyBalance";
import "./BalanceStyles.css";
import logo from "../../images/logo.svg";
const Balance = () => {
  return (
    <div className="balance-container">
      <MyBalance />
      <img src={logo} alt="logo" className="logo"></img>
    </div>
  );
};

export default Balance;
