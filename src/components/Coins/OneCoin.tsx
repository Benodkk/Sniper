import {
  StyledOneCoin,
  StyledOneCoinSoon,
  StyledOneCoinContainer,
} from "./Coins.styled";

interface OneCoinProps {
  height: number;
  soon?: boolean;
  src: string;
}
const OneCoin = ({ height, soon, src }: OneCoinProps) => {
  return (
    <StyledOneCoinContainer>
      <StyledOneCoin height={height} src={src} />
      {soon && (
        <StyledOneCoinSoon height={height}>Available soon</StyledOneCoinSoon>
      )}
    </StyledOneCoinContainer>
  );
};
export default OneCoin;
