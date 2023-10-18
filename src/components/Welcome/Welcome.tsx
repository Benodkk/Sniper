import {
  StyledWelcomePageContainer,
  StyledWelcomeTitle,
  StyledThe,
  StyledSnipeImage,
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
        onClick={() =>
          (window.location.href = "https://t.me/MarksmanSniperBot")
        }
      >
        start sniping
      </Button>
    </StyledWelcomePageContainer>
  );
};
export default Welcome;
