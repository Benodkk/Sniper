import styled from "styled-components";
import backgroundLayer1 from "../../assets/backgroundLayer1.png";

export const StyledCoinsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0 100px;
  width: 100%;
  background-image: url(${backgroundLayer1});
  background-repeat: repeat;
`;

export const StyledCoins = styled.div`
  width: 1024px;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface StyledOneCoinProps {
  height: number;
}
export const StyledOneCoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const StyledOneCoin = styled.img<StyledOneCoinProps>`
  height: ${({ height }) => height + "px"};
  max-width: 250px;
`;

interface StyledOneCoinSoonProps {
  height: number;
}

export const StyledOneCoinSoon = styled.p<StyledOneCoinSoonProps>`
  position: absolute;
  top: calc(30px + ${(props) => `${props.height / 2}px`});
  color: #bbb;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 25px;
`;
