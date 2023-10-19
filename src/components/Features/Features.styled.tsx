import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 150px 0;
  gap: 100px;
  @media ${devices.desktop} {
    margin: 300px 0;
    width: 1024px;
  }
`;

export const StyledFeaturesTitle = styled.h2`
  background: var(
    --Test,
    linear-gradient(91deg, #fff 12.98%, rgba(255, 255, 255, 0.41) 104.27%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  text-align: center;
`;

export const StyledFeaturesGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 20px;
  row-gap: 60px;
  @media ${devices.desktop} {
    width: 1024px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const StyledOneFeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledOneFeatureDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin-top: 30px;
  gap: 20px;
`;

export const StyledOneFeatureIcon = styled.img`
  height: 50px;
`;

export const StyledOneFeatureTitle = styled.h3`
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  background: var(
    --Test,
    linear-gradient(91deg, #fff 12.98%, rgba(255, 255, 255, 0.41) 104.27%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledOneFeatureDetails = styled.p`
  color: #fff;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
  width: 220px;
  text-align: center;
`;
