import React from "react";
import styled from "styled-components";

import * as colours from "../../utils/colors";
import * as fonts from "../../utils/fonts";
import * as spacings from "../../utils/spacings";

import { Button } from "../../shared/Button";

import { olympusAdvertisementImage } from "../../images/consts";
import { useNavigate } from "react-router-dom";

export const Advertisement = () => {
  const navigate = useNavigate();
  return (
    <AdvertisementDiv>
      <LeftSide>
        <Container>
          <TextBlock>
            <TextLarge>
              reign <br />
              triumphant
            </TextLarge>
            <TextSmall>Olympus Pre-Workout</TextSmall>
          </TextBlock>
          <Button
            large={true}
            onClick={() => {
              navigate("/collection");
            }}
          >
            BUY NOW
          </Button>
        </Container>
      </LeftSide>
      <RightSide>
        <AdvertisementImage
          src={olympusAdvertisementImage}
          alt="tub-advert-large"
        />
      </RightSide>
    </AdvertisementDiv>
  );
};

const AdvertisementDiv = styled.div`
  width: 100%;
  background-color: ${colours.backgroundColour};
  display: flex;
  justify-content: center;
`;
const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${spacings.spacing32};
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const TextLarge = styled.h2`
  font-family: ${fonts.bebasNeue};
  color: ${colours.textColour};
  font-size: ${fonts.fontSize144};
  line-height: ${fonts.lineHeight128};
  margin: 0;
`;
const TextSmall = styled.p`
  font-family: ${fonts.montserrat};
  color: ${colours.primaryColour};
  font-size: ${fonts.fontSize24};
  line-height: ${fonts.lineHeight32};
  margin: 0;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const AdvertisementImage = styled.img`
  width: 37.5rem;
`;
