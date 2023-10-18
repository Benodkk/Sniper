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
  z-index: 2;
  transition: 0.3s;
  top: 0;
  transition: 0.3s;
  top: ${(props) => (props.scroll ? "-94px" : "0")};
`;

export const StyledHeader = styled.div`
  width: 80%;
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
