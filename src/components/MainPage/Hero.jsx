import React from "react";
import styled from "styled-components";
import heroBanner from "../../images/hero-banner.png";

import * as colours from "../../utils/colors";

import { Navbar } from "../../shared/Navbar";
const HeroDiv = styled.div`
  width: 100%;
  background-image: url(${heroBanner});
  background-size: cover;
  background-position: center;
  background-color: ${colours.textColour};
  background-repeat: no-repeat;
  height: 100vh;
`;

export const Hero = () => {
  return (
    <HeroDiv>
      <Navbar transparent={true} />
    </HeroDiv>
  );
};
