import React from "react";
import styled from "styled-components";

import * as colours from "../utils/colors";
import * as fonts from "../utils/fonts";
import * as spacings from "../utils/spacings";

import logo from "../icons/triathWhiteLogoLarge.svg";

import instagram from "../icons/instagram.svg";
import twitter from "../icons/twitter.svg";
import facebook from "../icons/facebook.svg";

export const Footer = () => {
  return (
    <FooterDiv>
      <Wrapper>
        <LeftSide>
          <Logoimg src={logo} alt="logo" />
          <TriathTitle>TRIATHSUPPS.COM</TriathTitle>
          <SocialMedia>
            <SocialMediaImg src={instagram} />
            <SocialMediaImg src={twitter} />
            <SocialMediaImg src={facebook} />
          </SocialMedia>
        </LeftSide>
        <RightSide>
          <InfoText>info@triathsupps.com</InfoText>
          <InfoText>Tallinna tee 38</InfoText>
          <InfoText bold>TRIATH OÜ</InfoText>
        </RightSide>
      </Wrapper>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  width: 100%;
  background-color: ${colours.textColour};
  padding: ${spacings.spacing32} 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logoimg = styled.img`
  height: 8rem;
`;

const TriathTitle = styled.h1`
  font-size: ${fonts.fontSize32};
  line-height: ${fonts.lineHeight48};
  font-family: ${fonts.bebasNeue};
  color: ${colours.mainWhiteTextColour};
`;
const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacings.spacing16};
`;

const SocialMediaImg = styled.img`
  width: 3rem;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${spacings.spacing16};
`;

const InfoText = styled.div`
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize24};
  line-height: ${fonts.lineHeight24};
  color: ${colours.mainWhiteTextColour};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
`;
