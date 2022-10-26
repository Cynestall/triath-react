import React, { useState } from "react";
import styled from "styled-components";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import * as fonts from "../../utils/fonts";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "../../shared/Button";
import { Dropdown } from "../../shared/Dropdown";
import { generateToken } from "../../utils/paymentApi";

export const FlavourAndCart = ({
  tubId,
  title,
  flavours,
  cart,
  setCart,
  selectedFlavour,
  setSelectedFlavour,
}) => {
  const [amount, setAmount] = useState(1);
  const PaymentOnClick = async () => {
    const token = await generateToken();
    window.location = `https://sandbox-payments.montonio.com?payment_token=${token}`;
  };

  return (
    <FlavourAndCartDiv>
      <Dropdown
        flavours={flavours}
        selectedFlavour={selectedFlavour}
        setSelectedFlavour={setSelectedFlavour}
      ></Dropdown>
      <CartAndAmount>
        <AmountSelection>
          <Hover>
            <KeyboardArrowUpIcon
              onClick={() => {
                if (amount < 9) {
                  setAmount(Number(amount) + 1);
                }
              }}
            />
          </Hover>
          <Input
            type="text"
            min="0"
            max="2"
            maxLength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'')"
            placeholder="1"
            onChange={(event) => {
              const newValue = event.target.value.replace(/[^0-9]/g, "");
              setAmount(newValue);
            }}
            value={amount}
          />
          <Flip>
            <Hover>
              <KeyboardArrowUpIcon
                onClick={() => {
                  if (amount > 1) {
                    setAmount(Number(amount) - 1);
                  }
                }}
              />
            </Hover>
          </Flip>
        </AmountSelection>
        <Button
          onClick={() => {
            PaymentOnClick();
          }}
        >
          <ButtonWrapper>
            ADD TO CART
            <ShoppingCartOutlinedIcon fontSize="medium" />
          </ButtonWrapper>
        </Button>
      </CartAndAmount>
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
  justify-content: space-evenly;
  padding: ${spacings.spacing16} 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.spacing8};
`;

const AmountSelection = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colours.secondaryGrayColour};
  align-items: center;
`;

const Flip = styled.div`
  transform: rotate(180deg);
  height: auto;
`;
const Hover = styled.div`
  &:hover {
    color: ${colours.mainGrayTextColour};
    transform: scale(1.3);
  }
  transition: 200ms;
  max-height: 1.5rem;
`;

const Input = styled.input`
  color: ${colours.textColour};
  font-size: ${fonts.fontSize20};
  line-height: ${fonts.lineHeight20};
  font-family: ${fonts.bebasNeue};
  max-width: 2.5rem;
  width: 2.5rem;
  padding: ${spacings.spacing6} 0;
  box-sizing: border-box;
  border: 1px solid ${colours.secondaryGrayColour};
  border-radius: 10px;
  text-align: center;
  &::placeholder {
    color: ${colours.textColour};
  }
`;
const CartAndAmount = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacings.spacing8};
`;
