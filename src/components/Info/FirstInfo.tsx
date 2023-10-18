import {
  DescriptionImage,
  StyledDetailedDescription,
  StyledInfo,
  StyledInfoDescription,
  StyledInfoTitle,
} from "./Info.styled";
import yourGateway from "../../assets/yourGateway.png";

const FirstInfo = () => {
  return (
    <StyledInfo>
      <StyledInfoDescription>
        <StyledInfoTitle>Your Gateway to Smart Trading</StyledInfoTitle>
        <StyledDetailedDescription>
          With Marksman Sniper, become one of the pioneers in sniping hyped
          projects and watch your profits soar. Whether you're a newbie or a
          seasoned trader, Marksman Sniper Bot has got your back. Thanks to its
          user-friendly interface, you can effortlessly explore the menu and
          execute buy, sell, snipe, or bribe actions with a single click.
        </StyledDetailedDescription>
        <StyledDetailedDescription>
          This powerful bot operates seamlessly on the Ethereum network and is
          set to expand to BSC, Arbitrum, and BASE, ensuring you stay ahead of
          the trading game.
        </StyledDetailedDescription>
      </StyledInfoDescription>
      <DescriptionImage src={yourGateway} />
    </StyledInfo>
  );
};
export default FirstInfo;
