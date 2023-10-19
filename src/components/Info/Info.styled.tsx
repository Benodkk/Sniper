import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 300px;
  width: 100%;
  margin-top: 150px;
  padding: 0 40px;
  @media ${devices.desktop} {
    margin-top: 300px;
    width: 1024px;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 75px;
`;

export const StyledInfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledInfoTitle = styled.h2`
  background: var(
    --Test,
    linear-gradient(91deg, #fff 12.98%, rgba(255, 255, 255, 0.41) 104.27%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  text-align: center;
  @media ${devices.desktop} {
    text-align: start;
    line-height: 60px;
    font-size: 40px;
  }
`;

export const StyledDetailedDescription = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  @media ${devices.desktop} {
    line-height: 32px;
  }
`;

export const StyledDetailedDescriptionTide = styled.p`
  color: #fff;
  width: 80%;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
`;

export const DescriptionImage = styled.img`
  width: 50%;
  display: none;
  @media ${devices.desktop} {
    display: block;
  }
`;
