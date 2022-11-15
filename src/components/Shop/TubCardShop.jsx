import React from "react";
import styled from "styled-components";

import * as colours from "../../utils/colors";
import * as fonts from "../../utils/fonts";
import * as spacings from "../../utils/spacings";
import * as images from "../../images/consts";
import * as flavourConstants from "../../utils/flavours";

import { Button } from "../../shared/Button";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/priceFormatter";

export const TubCardShop = ({ title, price, subtitle, flavours }) => {
  const navigate = useNavigate();
  const redirectToItem = () => {
    navigate(`/products/${title}`);
  };

  return (
    <TubCardShopDiv onClick={redirectToItem}>
      <Wrapper>
        <Image src={images.dictOfImages[title]} alt={`tub-image-${title}`} />
        <Bottom>
          <DescriptionContainer>
            <ProductName>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </ProductName>
            <Price>{formatPrice(price)}</Price>
          </DescriptionContainer>
          <Button>BUY NOW</Button>
          <Flavours>
            Flavours:
            <FlavourContainer>
              {flavours.map((flavour) => {
                return (
                  <FlavourBubble
                    key={flavour}
                    flavourColor={flavourConstants.flavourColourDict[flavour]}
                  >
                    <FlavourTooltip>
                      <nobr>{flavourConstants.flavourNames[flavour]}</nobr>
                    </FlavourTooltip>
                  </FlavourBubble>
                );
              })}
            </FlavourContainer>
          </Flavours>
        </Bottom>
      </Wrapper>
    </TubCardShopDiv>
  );
};

const TubCardShopDiv = styled.div`
  background-color: ${colours.mainWhiteTextColour};
  box-shadow: ${colours.boxShadowCardColour};
  max-width: 20rem;
  border-radius: 10px;
  transition: 200ms ease-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: ${colours.boxShadowCardColourHover};
  }
`;
const Wrapper = styled.div`
  padding: ${spacings.spacing32} ${spacings.spacing36};
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing16};
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 15rem;
`;

const Bottom = styled.div`
  display: flex;
  gap: ${spacings.spacing4};
  flex-direction: column;
  align-items: center;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing8};
  align-items: center;
  padding: ${spacings.spacing4} 0;
`;
const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-family: ${fonts.bebasNeue};
  font-size: ${fonts.fontSize32};
  line-height: ${fonts.lineHeight32};
  color: ${colours.textColour};
`;
const Subtitle = styled.p`
  margin: 0;
  text-align: center;
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize16};
  line-height: ${fonts.lineHeight20};
  color: ${colours.mainGrayTextColour};
`;
const Price = styled.p`
  margin: 0;
  text-align: center;
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize16};
  line-height: ${fonts.lineHeight20};
  color: ${colours.primaryColour};
`;
const Flavours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${fonts.montserrat};
  color: ${colours.mainGrayTextColour};
  font-size: ${fonts.fontSize16};
  line-height: ${fonts.lineHeight16};
  padding: ${spacings.spacing4} 0;
  gap: ${spacings.spacing4};
`;
const FlavourContainer = styled.div`
  display: flex;
  gap: ${spacings.spacing8};
`;
const FlavourBubble = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background: ${(props) => props.flavourColor || "red"};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    div {
      transform: scale(100%);
      opacity: 1;
    }
  }
`;
const FlavourTooltip = styled.div`
  transform: scale(0%);
  opacity: 0;
  background-color: ${colours.textColour};
  text-align: center;
  color: ${colours.mainWhiteTextColour};
  font-size: ${fonts.fontSize14};
  line-height: ${fonts.lineHeight16};
  font-family: ${fonts.montserrat};
  position: absolute;
  top: 150%;
  padding: ${spacings.spacing8} ${spacings.spacing12};
  transition: 200ms;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
`;
