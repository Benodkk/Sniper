import styled from "styled-components";
import backgroundLayer1 from "../../assets/backgroundLayer1.png";

export const StyledVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundLayer1});
  background-repeat: repeat;
  width: 100%;
`;

export const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 800px;
  border: 1px solid #000;
  font-size: 45px;
  font-weight: 700;
  background: #131b28;

  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.45);
`;
