import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

interface HeaderProps {
  scroll: boolean;
}

export const StyledHeaderContainer = styled.header<HeaderProps>`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  max-width: 100vw;
  z-index: 5;
  transition: 0.3s;
  top: 0;
  transition: 0.3s;
  top: ${(props) => (props.scroll ? "0px" : "-94px")};
  background-color: #050b15;
`;

export const StyledLogoImage = styled.img`
  /* width: 40px; */
  @media ${devices.desktop} {
  }
`;

export const StyledHeaderContainerPhone = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 84px;
  gap: 5px;
  background-color: #050b15;
  padding: 15px;
  width: 100%;
  border-radius: 8px;
`;

export const StyledHeader = styled.div`
  width: 100%;
  @media ${devices.desktop} {
    width: 80%;
  }

  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButtonContainers = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 20px;
`;

export const StyledIcon = styled.img`
  position: absolute;
  margin-top: 14px;
`;
