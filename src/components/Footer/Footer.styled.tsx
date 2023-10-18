import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 40px;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
  color: #bbb;
`;

export const StyledLeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledPLink = styled.p`
  cursor: pointer;
`;

export const StyledRightFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
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
