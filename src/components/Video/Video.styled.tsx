import styled from "styled-components";
import backgroundLayer1 from "../../assets/backgroundLayer1.png";

export const StyledVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundLayer1});
  background-repeat: repeat;
  width: 100%;
  position: relative;
`;

export const StyledGradient = styled.div`
  background: linear-gradient(180deg, #050b15 0%, rgba(5, 11, 21, 0) 100%);
  width: 100%;
  height: 20vh;
  position: absolute;
  top: 0;
`;

export const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 800px;
  border: 1px solid #000;
  font-size: 30px;
  font-weight: 700;
  background: #131b28;
  z-index: 2;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.45);
`;
