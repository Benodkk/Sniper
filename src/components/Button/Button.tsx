import { StyledButtonContent, StyledGradientBorder } from "./Button.styled";

interface ButtonProps {
  children: string;
  redButton?: boolean;
  onClick?: () => void;
}
const Button = ({ children, redButton, onClick }: ButtonProps) => {
  return (
    <StyledGradientBorder onClick={onClick} redButton={redButton}>
      <StyledButtonContent redButton={redButton}>
        {children.toUpperCase()}
      </StyledButtonContent>
    </StyledGradientBorder>
  );
};
export default Button;
