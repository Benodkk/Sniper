import {
  StyledOneFeatureContainer,
  StyledOneFeatureDescription,
  StyledOneFeatureDetails,
  StyledOneFeatureIcon,
  StyledOneFeatureTitle,
} from "./Features.styled";
import OneFeatureBorder from "../../assets/OneFeatureBorder.svg";

interface OneFeatureProps {
  imageSrc: string;
  title: string;
  description: string;
}

const OneFeature = ({ imageSrc, title, description }: OneFeatureProps) => {
  return (
    <StyledOneFeatureContainer>
      <img src={OneFeatureBorder} />
      <StyledOneFeatureDescription>
        <StyledOneFeatureIcon src={imageSrc} />
        <StyledOneFeatureTitle>{title}</StyledOneFeatureTitle>
        <StyledOneFeatureDetails>{description}</StyledOneFeatureDetails>
      </StyledOneFeatureDescription>
    </StyledOneFeatureContainer>
  );
};
export default OneFeature;
