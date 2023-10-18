import { StyledCoins, StyledCoinsContainer } from "./Coins.styled";
import arb from "../../assets/coins/arb.png";
import base from "../../assets/coins/base.png";
import bnb from "../../assets/coins/bnb.png";
import eth from "../../assets/coins/eth.png";
import OneCoin from "./OneCoin";

const Coins = () => {
  return (
    <StyledCoinsContainer>
      <StyledCoins>
        <OneCoin height={65} src={eth} />
        <OneCoin height={23} src={bnb} soon={true} />
        <OneCoin height={39} src={arb} soon={true} />
        <OneCoin height={27} src={base} soon={true} />
      </StyledCoins>
    </StyledCoinsContainer>
  );
};
export default Coins;
