import React from "react";
import styled from "styled-components";

import * as images from "../../images/consts";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import * as fonts from "../../utils/fonts";
import { flavourNames } from "../../utils/flavours";

export const FlavourDescription = ({ selectedFlavour }) => {
  return (
    <FlavourDescriptionDiv>
      <FlavourImage src={images.dictOfFlavours[selectedFlavour]} />
      <FlavourTextContainer>
        <FlavourName>{flavourNames[selectedFlavour]}</FlavourName>
        <FlavourDescriptionText>
          Mix of apple, orange, cherry, strawberry, and pomegranate.
        </FlavourDescriptionText>
      </FlavourTextContainer>
    </FlavourDescriptionDiv>
  );
};

const FlavourDescriptionDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacings.spacing8};
  width: 100%;
`;
const FlavourImage = styled.img`
  width: 30%;
  max-width: 5rem;
`;
const FlavourTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing2};
  flex: 1;
  justify-content: center;
`;
const FlavourName = styled.p`
  font-family: ${fonts.montserrat};
  color: ${colours.primaryColour};
  line-height: ${fonts.lineHeight24};
  font-size: ${fonts.fontSize20};
  margin: 0;
`;
const FlavourDescriptionText = styled.p`
  font-family: ${fonts.montserrat};
  color: ${colours.textColour};
  line-height: ${fonts.lineHeight24};
  font-size: ${fonts.fontSize16};
  margin: 0;
`;
