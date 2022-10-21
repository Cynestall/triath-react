import React from "react";
import styled from "styled-components";

import * as colours from "../utils/colors";
import * as fonts from "../utils/fonts";
import * as spacings from "../utils/spacings";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const TubCard = ({ img, title, subtitle, price, buttonText }) => {
  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <TubCardDiv>
      <Wrapper>
        <Image alt={`tub-image-${title}`} src={img} />
        <Content>
          <TubTitle>{title}</TubTitle>
          <TubSubtitle>{subtitle}</TubSubtitle>
          <Price>{price}</Price>
        </Content>
        <Button onClick={navigateToShop}>{buttonText}</Button>
      </Wrapper>
    </TubCardDiv>
  );
};

const TubCardDiv = styled.div`
  padding: ${spacings.spacing32} ${spacings.spacing16};
  flex: 1;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  max-width: 20rem;
  margin-bottom: ${spacings.spacing16};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacings.spacing4} 0;
`;

const TubTitle = styled.h2`
  font-family: ${fonts.bebasNeue};
  color: ${colours.textColour};
  font-size: ${fonts.fontSize48};
  line-height: ${fonts.lineHeight48};
  margin: 0;
`;

const TubSubtitle = styled.p`
  font-family: ${fonts.montserrat};
  color: ${colours.mainGrayTextColour};
  font-size: ${fonts.fontSize20};
  line-height: ${fonts.lineHeight24};
  text-align: center;
  margin: 0;
`;

const Price = styled.p`
  font-family: ${fonts.montserrat};
  color: ${colours.primaryColour};
  font-size: ${fonts.fontSize24};
  line-height: ${fonts.lineHeight24};
  margin: ${spacings.spacing8} 0 ${spacings.spacing4} 0;
`;
