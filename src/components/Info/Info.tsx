import FirstInfo from "./FirstInfo";
import { StyledInfoContainer } from "./Info.styled";
import SecondInfo from "./SecondInfo";

const Info = () => {
  return (
    <StyledInfoContainer>
      <FirstInfo />
      <SecondInfo />
    </StyledInfoContainer>
  );
};
export default Info;
