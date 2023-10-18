import {
  StyledOneImage,
  StyledOneMemberContainer,
  StyledOneMemberDescription,
  StyledOneMemberName,
} from "./Squad.styled";

interface OneSquadMemberProps {
  image: string;
  name: string;
  details: string;
  nameRed?: boolean;
}
const OneSquadMember = ({
  image,
  name,
  details,
  nameRed,
}: OneSquadMemberProps) => {
  return (
    <StyledOneMemberContainer>
      <StyledOneImage src={image} />
      <StyledOneMemberName nameRed={nameRed}>{name}</StyledOneMemberName>
      <StyledOneMemberDescription>{details}</StyledOneMemberDescription>
    </StyledOneMemberContainer>
  );
};
export default OneSquadMember;
