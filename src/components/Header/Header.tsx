import {
  StyledButtonContainers,
  StyledHeader,
  StyledHeaderContainer,
  StyledIconsContainer,
} from "./Header.styled";
import logoHeader from "../../assets/logoHeader.svg";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import SocialIcon from "./SocialIcon";
import xIcon from "../../assets/xIcon.svg";
import telegramIcon from "../../assets/telegramIcon.svg";

const Header = () => {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return (
    <StyledHeaderContainer scroll={scroll > 50}>
      <StyledHeader>
        <img src={logoHeader} alt="Logo Header" />
        <StyledButtonContainers>
          <Button
            onClick={() =>
              (window.location.href =
                "https://marksman-sniper-bot.gitbook.io/whitepaper/tokenomics")
            }
          >
            whitepaper
          </Button>
          <Button>STAKE $TARGET</Button>
          <Button redButton={true}>BUY $TARGET</Button>
          <StyledIconsContainer>
            <SocialIcon
              onClick={() =>
                (window.location.href = "https://twitter.com/Marksmanbot")
              }
              imageSrc={xIcon}
            />
            <SocialIcon imageSrc={telegramIcon} />
          </StyledIconsContainer>
        </StyledButtonContainers>
      </StyledHeader>
    </StyledHeaderContainer>
  );
};
export default Header;
