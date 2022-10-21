import React from "react";
import styled from "styled-components";
import heroBanner from "../../images/hero-banner.png";

import * as colours from "../../utils/colors";
import * as fonts from "../../utils/fonts";

import { Navbar } from "../../shared/Navbar";
const HeroDiv = styled.div`
  width: 100%;
  background-image: url(${heroBanner});
  background-size: cover;
  background-position: center;
  background-color: ${colours.textColour};
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroTextContainer = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  place-items: center;
  color: ${colours.mainWhiteTextColour};
  font-family: ${fonts.bebasNeue};
`;
const HeroText = styled.h1`
  font-family: ${fonts.bebasNeue};
  font-size: 192px;
  line-height: 192px;
  text-align: center;
  margin: 0;
  color: white;
  background: linear-gradient(90deg, #ffa125 0%, #4dffb2 50%, #ffa125 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @keyframes background-pan {
    from {
      background-position: 0% center;
    }
    to {
      background-position: -200% center;
    }
  }
  animation: background-pan 7s linear infinite;
  background-size: 200%;
`;

export const Hero = () => {
  return (
    <HeroDiv>
      <Navbar transparent={true} />
      <HeroTextContainer>
        <HeroText>
          unleash your <br />
          full potential
        </HeroText>
      </HeroTextContainer>
    </HeroDiv>
  );
};
