import styled from "styled-components";

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 300px;
  width: 1024px;
  margin-top: 300px;
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

  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
`;

export const StyledDetailedDescription = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 32px;
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
`;
