import React from "react";

import styled from "styled-components";
import logoImage from "../icons/triathBlackLogoLarge.svg";
import { Navbar } from "../shared/Navbar";

import * as colours from "../utils/colors";
import * as fonts from "../utils/fonts";

export const NoMatch = () => {
  return (
    <Container>
      <Navbar />
      <Center>
        <Wrapper>
          <Logo src={logoImage} />
          <TextBebas>404</TextBebas>
          <Text>The page you are looking for does not exist.</Text>
        </Wrapper>
      </Center>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

const Center = styled.div`
  flex: 1;
  width: 100%;
  display: grid;
  place-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  width: 10rem;
`;
const TextBebas = styled.h1`
  color: ${colours.textColour};
  font-family: ${fonts.bebasNeue}
  font-size: ${fonts.fontSize64};
  line-height: ${fonts.lineHeight64};
  margin-bottom: 0;
`;
const Text = styled.h1`
  color: ${colours.textColour};
  font-family: ${fonts.montserrat}
  font-size: ${fonts.fontSize24};
  line-height: ${fonts.lineHeight24};
`;
