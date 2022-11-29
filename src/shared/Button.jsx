import React from "react";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

import * as colours from "../utils/colors";
import * as fonts from "../utils/fonts";
import * as spacings from "../utils/spacings";

export const Button = (props) => {
  if (props.large) {
    if (props.isDisabled) {
      return (
        <MainButtonLargeDisabled>{props.children}</MainButtonLargeDisabled>
      );
    }
    return (
      <MainButtonLarge onClick={props.onClick}>
        {props.children}
      </MainButtonLarge>
    );
  }
  if (props.isLoading) {
    return (
      <MainButtonLoading>
        <PulseLoader
          color={colours.mainWhiteTextColour}
          loading={true}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </MainButtonLoading>
    );
  }
  if (props.isDisabled) {
    return <MainButtonDisabled>{props.children}</MainButtonDisabled>;
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
  &:hover {
    background-color: ${colours.primaryHoverColour};
  }
  transition: 200ms;
`;
const MainButtonDisabled = styled.button`
  color: ${colours.mainWhiteTextColour};
  font-family: ${fonts.bebasNeue};
  font-size: ${fonts.fontSize24};
  line-height: ${fonts.lineHeight32};
  padding: ${spacings.spacing4} ${spacings.spacing24};
  border: none;
  border-radius: 0.625rem;
  background-color: ${colours.primaryDisabledColour};
  cursor: not-allowed;
  transition: 200ms;
`;
const MainButtonLoading = styled.button`
  color: ${colours.mainWhiteTextColour};
  font-family: ${fonts.bebasNeue};
  font-size: ${fonts.fontSize24};
  line-height: ${fonts.lineHeight32};
  padding: ${spacings.spacing4} ${spacings.spacing24};
  border: none;
  border-radius: 0.625rem;
  background-color: ${colours.primaryColour};
  cursor: not-allowed;
  transition: 200ms;
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
  &:hover {
    background-color: ${colours.primaryHoverColour};
  }
  transition: 200ms;
`;

const MainButtonLargeDisabled = styled.button`
  color: ${colours.mainWhiteTextColour};
  font-family: ${fonts.bebasNeue};
  font-size: ${fonts.fontSize48};
  line-height: ${fonts.lineHeight48};
  padding: ${spacings.spacing12} ${spacings.spacing48};
  border: none;
  border-radius: 0.625rem;
  background-color: ${colours.primaryDisabledColour};
  cursor: not-allowed;
  transition: 200ms;
`;
