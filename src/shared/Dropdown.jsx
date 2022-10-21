import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import * as colours from "../utils/colors";
import * as spacings from "../utils/spacings";
import * as fonts from "../utils/fonts";
import listenForOutsideClicks from "../utils/listenForOutsideClicks";

import { flavourNames, flavourColourDict } from "../utils/flavours";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const Dropdown = ({ flavours, selectedFlavour, setSelectedFlavour }) => {
  const [open, setOpen] = useState(false);

  // Close dropdown when clicking away from it
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  useEffect(listenForOutsideClicks(listening, setListening, menuRef, setOpen));

  return (
    <DropdownWrapper ref={menuRef}>
      <DropdownContainer isOpen={open}>
        <DropdownLabel>Flavour</DropdownLabel>
        <DropdownMenu
          onClick={() => {
            setOpen(!open);
          }}
          isOpen={open}
          className={"transition"}
        >
          <SelectedFlavourWrapper>
            <FlavourBubble flavourColour={flavourColourDict[selectedFlavour]} />
            <FlavourText>{flavourNames[selectedFlavour]}</FlavourText>
          </SelectedFlavourWrapper>
          <ArrowWrapper isOpen={open}>
            <KeyboardArrowUpIcon />
          </ArrowWrapper>
        </DropdownMenu>
      </DropdownContainer>
      <DropdownSelection isOpen={open}>
        {flavours.map((flavour) => {
          return (
            <DropdownFlavourContainer
              key={flavour}
              onClick={() => {
                setSelectedFlavour(flavour);
                setOpen(false);
              }}
            >
              <FlavourBubble flavourColour={flavourColourDict[flavour]} />
              <FlavourText>{flavourNames[flavour]}</FlavourText>
            </DropdownFlavourContainer>
          );
        })}
      </DropdownSelection>
    </DropdownWrapper>
  );
};
const DropdownWrapper = styled.div`
  width: 30%;
  max-width: 15rem;
  position: relative;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing4};
  padding-bottom: ${spacings.spacing18};
  width: 100%;
  .transition {
    transition-delay: ${(props) => (props.isOpen ? "0ms" : "200ms")}, 0ms;
    transition-property: border-radius, background-color;
  }
`;

const DropdownLabel = styled.p`
  font-size: ${fonts.fontSize14};
  line-height: ${fonts.lineHeight14};
  font-family: ${fonts.montserrat};
  color: ${colours.secondaryGrayColour};
  margin: 0;
`;

const DropdownMenu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${(props) => (props.isOpen ? "10px 10px 0 0" : "10px")};
  color: ${colours.mainWhiteTextColour};
  background-color: ${colours.primaryColour};
  padding: ${spacings.spacing8} ${spacings.spacing16};
  &:hover {
    background-color: ${colours.primaryHoverColour};
  }
  transition: 200ms;
`;

const SelectedFlavourWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.spacing8};
`;

const FlavourBubble = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 2rem;
  border: 1px solid ${colours.mainWhiteTextColour};
  background: ${(props) => props.flavourColour || "white"};
`;

const FlavourText = styled.p`
  font-size: ${fonts.fontSize20};
  line-height: ${fonts.lineHeight20};
  margin: 0;
  font-family: ${fonts.bebasNeue};
`;

const DropdownSelection = styled.div`
  width: 100%;
  display: flex;
  transition: max-height 0.25s ease-in;
  background-color: ${colours.backgroundColour};
  position: absolute;
  top: calc(100% - ${spacings.spacing18});
  box-sizing: border-box;
  border-radius: 0 0 10px 10px;
  flex-direction: column;
  max-height: ${(props) => (props.isOpen ? "30rem" : "0")};
  transition: max-height 0.2s;
  overflow: hidden;
  color: ${colours.textColour};
`;

const DropdownFlavourContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: ${spacings.spacing8};
  padding: ${spacings.spacing16};
  cursor: pointer;
  &:hover {
    background-color: ${colours.secondrayGrayHoverColour};
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  transition: 200ms;
  place-items: center;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
`;
