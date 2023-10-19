import {
  StyledWelcomePageContainer,
  StyledWelcomeTitle,
  StyledThe,
  StyledSnipeImage,
  StyledGradien,
} from "./Welcome.styled";
import snipe from "../../assets/snipe.png";
import Button from "../Button/Button";

const Welcome = () => {
  return (
    <StyledWelcomePageContainer>
      <StyledWelcomeTitle>
        Snipe <StyledThe>the</StyledThe> Hype
        <StyledSnipeImage src={snipe} />
      </StyledWelcomeTitle>
      <Button
        onClick={() => window.open("https://t.me/marksman_sniper", "_blank")}
      >
        start sniping
      </Button>
      <StyledGradien></StyledGradien>
    </StyledWelcomePageContainer>
  );
};
export default Welcome;
