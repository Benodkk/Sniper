import OneSquadMember from "./OneSquadMember";
import {
  StyledMembersContainer,
  StyledSquadContainer,
  StyledSquadTitle,
} from "./Squad.styled";
import memberOne from "../../assets/squad/1.png";
import memberTwo from "../../assets/squad/2.png";
import memberThree from "../../assets/squad/3.png";
import memberFour from "../../assets/squad/4.png";

const Squad = () => {
  return (
    <StyledSquadContainer>
      <StyledSquadTitle>Sniper Squad</StyledSquadTitle>
      <StyledMembersContainer>
        <OneSquadMember
          name="Marksman RzA (CEO)"
          image={memberOne}
          details="Meet RzA, our sniper squad's commander – a finance ace with a keen eye and a computer engineering degree. With years of experience, he's our secret weapon and the pack leader for precision shots."
        />
        <OneSquadMember
          name="Marksman Vicky (CM)"
          image={memberTwo}
          nameRed={true}
          details="Introducing Vicky, our PR expert and crypto-world pro. She's our newest Marksman sniper squad member, keeping our image sharp and snipes even sharper!"
        />
        <OneSquadMember
          name="Marksman Ari (COO)"
          image={memberThree}
          details="Meet Ari, our wild card degen sniper, prowling the crypto world since 2015. He's the unpredictable stealthy sniper, always ready to seize opportunities others miss in this high-stakes game."
        />
        <OneSquadMember
          name="Marksman Tony (CTO)"
          image={memberFour}
          details="Meet Tony, our tech-savvy sniper and gadget guru. With years of Solidity coding experience, he's the brains behind our seamless sniping tools. Tony's got the technical side of sniping covered, down to the last satoshi."
        />
      </StyledMembersContainer>
    </StyledSquadContainer>
  );
};
export default Squad;
