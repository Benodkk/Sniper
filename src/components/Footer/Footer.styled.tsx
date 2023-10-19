import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledFooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  gap: 10px;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 40px;
  }
`;

export const StyledLeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  &:nth-child(1) {
    order: 2;
  }
  @media ${devices.desktop} {
    align-items: start;
    &:nth-child(1) {
      order: 1;
    }
  }
`;

export const StyledPLink = styled.p`
  cursor: pointer;
`;

export const StyledRightFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  &:nth-child(2) {
    order: 1;
  }
  @media ${devices.desktop} {
    &:nth-child(2) {
      order: 2;
    }
  }
`;

export const StyledIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledIcon = styled.img`
  position: absolute;
  margin-top: 14px;
  cursor: pointer;
`;
