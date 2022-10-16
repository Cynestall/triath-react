import React from "react";
import styled from "styled-components";

import * as colours from "../utils/colors";
import * as fonts from "../utils/fonts";
import * as spacings from "../utils/spacings";

export const Button = (props) => {
  if (props.large) {
    return (
      <MainButtonLarge onClick={props.onClick}>
        {props.children}
      </MainButtonLarge>
    );
  }
  return <MainButton onClick={props.onClick}>{props.children}</MainButton>;
};

const MainButton = styled.button`
  color: ${colours.mainWhiteTextColour};
  font-family: ${fonts.bebasNeue};
  font-size: ${fonts.fontSize24};
  line-height: ${fonts.lineHeight32};
  padding: ${spacings.spacing4} ${spacings.spacing24};
  border: none;
  border-radius: 0.625rem;
  background-color: ${colours.primaryColour};
  cursor: pointer;
`;

const MainButtonLarge = styled.button`
  color: ${colours.mainWhiteTextColour};
  font-family: ${fonts.bebasNeue};
  font-size: ${fonts.fontSize48};
  line-height: ${fonts.lineHeight48};
  padding: ${spacings.spacing12} ${spacings.spacing48};
  border: none;
  border-radius: 0.625rem;
  background-color: ${colours.primaryColour};
  cursor: pointer;
`;
