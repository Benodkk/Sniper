import headerBorder from "../../assets/headerBorder.svg";
import { StyledIcon, StyledIconContainer } from "./Header.styled";

interface SocialIconProps {
  imageSrc: string;
  onClick?: () => void;
}

const SocialIcon = ({ imageSrc, onClick }: SocialIconProps) => {
  return (
    <StyledIconContainer onClick={onClick}>
      <img src={headerBorder} />
      <StyledIcon src={imageSrc} />
    </StyledIconContainer>
  );
};
export default SocialIcon;
