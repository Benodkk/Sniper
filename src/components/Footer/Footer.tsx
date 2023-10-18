import {
  StyledFooterContainer,
  StyledIconsContainer,
  StyledLeftFooter,
  StyledPLink,
  StyledRightFooter,
} from "./Footer.styled";
import SocialIcon from "./SocialIcon";
import xIcon from "../../assets/xIcon.svg";
import telegramIcon from "../../assets/telegramIcon.svg";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledLeftFooter>
        <p>Marksman Sniper Bot</p>
        <StyledPLink
          onClick={() => (window.location.href = "https://rezultsoftware.com/")}
        >
          © 2023 RezultSoftware.com
        </StyledPLink>
      </StyledLeftFooter>
      <StyledRightFooter>
        <div>Whitepaper</div>
        <div>Contact</div>
        <StyledIconsContainer>
          <SocialIcon
            onClick={() =>
              (window.location.href = "https://twitter.com/Marksmanbot")
            }
            imageSrc={xIcon}
          />
          <SocialIcon imageSrc={telegramIcon} />
        </StyledIconsContainer>
      </StyledRightFooter>
    </StyledFooterContainer>
  );
};
export default Footer;
