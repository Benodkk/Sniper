import styled from "styled-components";

interface ButtonInterface {
  redButton?: boolean;
}

export const StyledGradientBorder = styled.button<ButtonInterface>`
  display: inline-block;
  background: ${({ redButton }) =>
    redButton ? "#f20101" : "linear-gradient(-10deg, #ffffff1a, #f20101)"};
  border-radius: 8px;
  position: relative;
  padding: 2px; /* Dodaj padding, aby ButtonContent nie był zbyt blisko krawędzi */
  cursor: pointer;
`;

export const StyledButtonContent = styled.div<ButtonInterface>`
  background-color: ${({ redButton }) => (redButton ? "#f20101" : "#050B15")};
  border-radius: 8px;
  padding: 10px;
  color: white;
  font-weight: 700;
  font-size: 15px;
`;
