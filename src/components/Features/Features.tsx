import {
  StyledFeaturesContainer,
  StyledFeaturesGrid,
  StyledFeaturesTitle,
} from "./Features.styled";
import OneFeature from "./OneFeature";

import buyAndSell from "../../assets/icons/buyAndSell.svg";
import mevBotProtection from "../../assets/icons/mevBotProtection.svg";
import limitBuyAndSell from "../../assets/icons/limitBuyAndSell.svg";
import liquiditySniping from "../../assets/icons/liquiditySniping.svg";
import bribing from "../../assets/icons/bribing.svg";
import wallets from "../../assets/icons/wallets.svg";
import transferTokens from "../../assets/icons/transferTokens.svg";
import revenueSharing from "../../assets/icons/revenueSharing.svg";
import referralSystem from "../../assets/icons/referralSystem.svg";

const Features = () => {
  return (
    <StyledFeaturesContainer>
      <StyledFeaturesTitle>Marksman Sniper Features</StyledFeaturesTitle>
      <StyledFeaturesGrid>
        <OneFeature
          imageSrc={buyAndSell}
          description="  Buy and sell You can buy and sell a token by simply pasting the
          contract address and specifying the ETH amount."
          title="Buy and Sell"
        />
        <OneFeature
          imageSrc={mevBotProtection}
          description="Buys and sells cannot be interrupted by sandwich bots and are protected through RPC."
          title="Mev bot protection"
        />
        <OneFeature
          imageSrc={limitBuyAndSell}
          description="Set your target prices to execute when a specific price or token market cap is reached."
          title="Limit buy and sell"
        />
        <OneFeature
          imageSrc={liquiditySniping}
          description="Snipe newly launched tokens with easily customizable settings and ensure there is sufficient liquidity to execute your trade."
          title="Liquidity sniping"
        />
        <OneFeature
          imageSrc={bribing}
          description="Bribe the ETH network to frontrun fellow snipers in highly anticipated tokens."
          title="Bribing"
        />
        <OneFeature
          imageSrc={wallets}
          description="Create fresh wallets or import existing ones and view your token balances."
          title="Wallets"
        />
        <OneFeature
          imageSrc={transferTokens}
          description="Transfer tokens between wallets without the need of browser wallets."
          title="Transfer tokens"
        />
        <OneFeature
          imageSrc={revenueSharing}
          description="A percentage of the fees collected will be distributed to token holders."
          title="Revenue sharing"
        />
        <OneFeature
          imageSrc={referralSystem}
          description="Custom code that can be shared in order to collect a portion of the fees from a specific entity or service."
          title="Referral system"
        />
      </StyledFeaturesGrid>
    </StyledFeaturesContainer>
  );
};
export default Features;
