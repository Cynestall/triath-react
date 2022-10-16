import React from "react";
import styled from "styled-components";

import * as colours from "../utils/colors";
import * as fonts from "../utils/fonts";
import * as spacings from "../utils/spacings";

export const Button = (props) => {
  return <MainButton onClick={props.onClick}>DETAILS</MainButton>;
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
