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
          onClick={() => window.open("https://rezultsoftware.com/", "_blank")}
        >
          © 2023 RezultSoftware.com
        </StyledPLink>
      </StyledLeftFooter>
      <StyledRightFooter>
        <StyledPLink
          onClick={() =>
            window.open(
              "https://marksman-sniper-bot.gitbook.io/whitepaper/tokenomics",
              "_blank"
            )
          }
        >
          Whitepaper
        </StyledPLink>
        <div>Contact</div>
        <StyledIconsContainer>
          <SocialIcon
            onClick={() =>
              window.open("https://twitter.com/Marksmanbot", "_blank")
            }
            imageSrc={xIcon}
          />
          <SocialIcon
            onClick={() =>
              window.open("https://t.me/marksman_sniper", "_blank")
            }
            imageSrc={telegramIcon}
          />
        </StyledIconsContainer>
      </StyledRightFooter>
    </StyledFooterContainer>
  );
};
export default Footer;
