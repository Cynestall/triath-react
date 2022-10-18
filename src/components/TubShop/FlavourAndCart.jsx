import React from "react";
import styled from "styled-components";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import * as fonts from "../../utils/fonts";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "../../shared/Button";

export const FlavourAndCart = () => {
  return (
    <FlavourAndCartDiv>
      <Button>
        <ButtonWrapper>
          ADD TO CART
          <ShoppingCartOutlinedIcon fontSize="medium" />
        </ButtonWrapper>
      </Button>
    </FlavourAndCartDiv>
  );
};

const FlavourAndCartDiv = styled.div`
  width: 100%;
  background-color: ${colours.mainWhiteTextColour};
  box-shadow: ${colours.boxShadowCardColour};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacings.spacing16} 0;
`;

const FlavourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing4};
  padding-bottom: ${spacings.spacing16};
`;
const FlavourLabel = styled.p`
  font-size: ${fonts.fontSize14};
  font-family: ${fonts.montserrat};
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.spacing8};
`;
