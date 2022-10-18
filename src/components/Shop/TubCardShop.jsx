import React from "react";
import styled from "styled-components";

import * as colours from "../../utils/colors";
import * as fonts from "../../utils/fonts";
import * as spacings from "../../utils/spacings";
import * as images from "../../images/consts";

import { Button } from "../../shared/Button";
import { useNavigate } from "react-router-dom";

export const TubCardShop = ({
  tubId,
  title,
  price,
  subtitle,
  flavours,
  image,
}) => {
  const navigate = useNavigate();
  console.log(tubId);
  const redirectToItem = () => {
    navigate(`/tub?tubId=${tubId}&tubName=${title}`);
  };
  return (
    <TubCardShopDiv>
      <Wrapper>
        <Image src={images.dictOfImages[image]} alt={`tub-image-${title}`} />
        <Bottom>
          <DescriptionContainer>
            <ProductName>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </ProductName>
            <Price>{price}€</Price>
          </DescriptionContainer>
          <Button onClick={redirectToItem}>BUY NOW</Button>
          <Flavours>
            Flavours:
            <FlavourContainer>
              {flavours.map((flavour) => {
                return <FlavourBubble key={flavour}></FlavourBubble>;
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
  background-color: green;
`;
