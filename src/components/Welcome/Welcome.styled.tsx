import styled from "styled-components";
import Welcome from "../../assets/welcome-Image.png";

export const StyledWelcomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${Welcome}) lightgray 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
  gap: 100px;
`;

export const StyledWelcomeTitle = styled.h1`
  color: #fff;

  text-align: center;
  font-size: 98px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: calc(50vh - 62px);
  margin-right: 10px;
  letter-spacing: -4px;
`;

export const StyledThe = styled.span`
  color: #f20101;
  font-size: 98px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const StyledSnipeImage = styled.img`
  position: absolute;
  width: 244px;
  right: calc(50vw - 128px);
  top: calc(50vh - 112px);
`;
