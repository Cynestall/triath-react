import React from "react";
import styled from "styled-components";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import * as fonts from "../../utils/fonts";

import { dictOfSupplementFacts } from "../../images/consts";

export const ShopTubDescription = ({
  productDescription,
  suggestedUse,
  supplementFacts,
}) => {
  return (
    <ShopTubDescriptionWrapper>
      <ShopTubDescriptionDiv>
        <LeftSide>
          <TextComponent>
            <TextHeading>PRODUCT DESCRIPTION</TextHeading>
            <Spacer />
            <TextParagraph>{productDescription}</TextParagraph>
          </TextComponent>
          <TextComponent>
            <TextHeading>SUGGESTED USE</TextHeading>
            <Spacer />
            <TextParagraph>{suggestedUse}</TextParagraph>
          </TextComponent>
        </LeftSide>
        <RightSide>
          <SupplementFactImage
            src={dictOfSupplementFacts[supplementFacts]}
            alt={"supplement-fact-image"}
          />
        </RightSide>
      </ShopTubDescriptionDiv>
    </ShopTubDescriptionWrapper>
  );
};
const ShopTubDescriptionWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
`;

const ShopTubDescriptionDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  gap: ${spacings.spacing48};
  padding: ${spacings.spacing32};
  background-color: ${colours.mainWhiteTextColour};
  box-shadow: ${colours.boxShadowCardColour};
  box-sizing: border-box;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${spacings.spacing32};
`;
const TextComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  gap: ${spacings.spacing16};
`;
const TextHeading = styled.h2`
  font-family: ${fonts.bebasNeue};
  font-size: ${fonts.fontSize48};
  line-height: ${fonts.lineHeight48};
  margin: 0;
  color: ${colours.primaryColour};
`;
const TextParagraph = styled.p`
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize16};
  line-height: ${fonts.lineHeight24};
  margin: 0;
  color: ${colours.textColour};
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${spacings.spacing32};
`;
const SupplementFactImage = styled.img`
  width: 100%;
`;
const Spacer = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: ${colours.secondaryGrayColour};
`;
