import {
  DescriptionImage,
  StyledDetailedDescriptionTide,
  StyledInfo,
  StyledInfoDescription,
  StyledInfoTitle,
} from "./Info.styled";
import targetToken from "../../assets/targetToken.png";

const SecondInfo = () => {
  return (
    <StyledInfo>
      <DescriptionImage src={targetToken} />
      <StyledInfoDescription>
        <StyledInfoTitle>
          Target Token. Discover Your Earning Potential
        </StyledInfoTitle>
        <StyledDetailedDescriptionTide>
          Discover your earning potential by staking $TARGET, you can join our
          revenue-sharing system and start earning ETH. As our platform grows,
          your profits grow too.
        </StyledDetailedDescriptionTide>
        <StyledDetailedDescriptionTide>
          Plus, we've got something extra for you - stakers will also receive
          $TARGET as a bonus. It's like having a double-reward treasure trove
          just waiting for you.
        </StyledDetailedDescriptionTide>
      </StyledInfoDescription>
    </StyledInfo>
  );
};
export default SecondInfo;
