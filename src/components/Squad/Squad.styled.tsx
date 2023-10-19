import styled from "styled-components";
import { devices } from "../../styles/deviceWidth";

export const StyledSquadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #000;
  background: #131b28;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.45);
  padding: 80px 0;
`;

export const StyledSquadTitle = styled.h2`
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  background: var(
    --Test,
    linear-gradient(91deg, #fff 12.98%, rgba(255, 255, 255, 0.41) 104.27%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${devices.desktop} {
    font-size: 161px;
  }
`;

export const StyledMembersContainer = styled.div`
  display: flex;
  gap: 35px;
  position: relative;
  flex-direction: column;
  @media ${devices.desktop} {
    top: -60px;
    flex-direction: row;
  }
`;

export const StyledOneMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  gap: 20px;
`;
export const StyledOneImage = styled.img`
  width: 240px;
  border-radius: 151px;
`;

interface StyledOneMemberNameProps {
  nameRed?: boolean;
}

export const StyledOneMemberName = styled.div<StyledOneMemberNameProps>`
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  ${(props) =>
    props.nameRed
      ? `color: red;`
      : `
      background: linear-gradient(91deg, #fff 12.98%, rgba(255, 255, 255, 0.41) 104.27%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      `}
`;

export const StyledOneMemberDescription = styled.p`
  color: #bbb;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
  text-align: center;
`;
