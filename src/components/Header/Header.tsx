import {
  StyledButtonContainers,
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderContainerPhone,
  StyledIconsContainer,
  StyledLogoImage,
} from "./Header.styled";
import logoHeader from "../../assets/logoHeader.svg";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import SocialIcon from "./SocialIcon";
import xIcon from "../../assets/xIcon.svg";
import telegramIcon from "../../assets/telegramIcon.svg";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [showMenu, setShowMenu] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > lastScrollPosition) {
        // Scroll w dół
        setHeaderVisible(false);
      } else if (currentScrollPosition < lastScrollPosition - 20) {
        // Scroll w górę o więcej niż 20px
        setHeaderVisible(true);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition, headerVisible]);

  useEffect(() => {
    if (!headerVisible && showMenu) {
      setShowMenu(false);
    }
  }, [headerVisible]);

  return (
    <StyledHeaderContainer scroll={headerVisible}>
      <StyledHeader>
        <a href="/">
          <StyledLogoImage src={logoHeader} alt="Logo Header" />
        </a>
        {isDesktop ? (
          <StyledButtonContainers>
            <Button
              onClick={() =>
                window.open(
                  "https://marksman-sniper-bot.gitbook.io/whitepaper/tokenomics",
                  "_blank"
                )
              }
            >
              whitepaper
            </Button>
            <Button>STAKE $TARGET</Button>
            <Button redButton={true}>BUY $TARGET</Button>
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
          </StyledButtonContainers>
        ) : (
          <div>
            <AiOutlineMenu size={36} onClick={() => setShowMenu(!showMenu)} />
            {showMenu && (
              <StyledHeaderContainerPhone>
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
              </StyledHeaderContainerPhone>
            )}
          </div>
        )}
      </StyledHeader>
    </StyledHeaderContainer>
  );
};
export default Header;
