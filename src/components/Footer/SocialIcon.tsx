import footerBorder from "../../assets/footerBorder.svg";
import { StyledIcon, StyledIconContainer } from "./Footer.styled";

interface SocialIconProps {
  imageSrc: string;
  onClick?: () => void;
}

const SocialIcon = ({ imageSrc, onClick }: SocialIconProps) => {
  return (
    <StyledIconContainer onClick={onClick}>
      <img src={footerBorder} />
      <StyledIcon src={imageSrc} />
    </StyledIconContainer>
  );
};
export default SocialIcon;
