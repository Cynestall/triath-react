import React, { useState } from "react";
import styled from "styled-components";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import * as fonts from "../../utils/fonts";

import CloseIcon from "@mui/icons-material/Close";

import * as images from "../../images/consts";
import * as flavourConstants from "../../utils/flavours";
import { formatPrice } from "../../utils/priceFormatter";
import { useDispatch } from "react-redux";

import { removeFromCart, setAmount } from "../../reducers/cartReducer";
import { saveCartToStorage } from "../../utils/cartSave";

export const CartItem = ({ tub }) => {
  const title = tub.id.split("-")[0];
  const flavour = tub.id.split("-")[1];
  const dispatch = useDispatch();

  const [newAmount, setNewAmount] = useState(tub.amount);

  return (
    <CartItemDiv>
      <ProductSection>
        <CloseIcon
          onClick={() => {
            dispatch(removeFromCart(tub.id));
            saveCartToStorage();
          }}
          fontSize="small"
          style={{ color: `${colours.mainGrayTextColour}`, cursor: "pointer" }}
        />
        <TubImage src={images.dictOfImages[title]} />
        <VerticalWrapper>
          <TubTitle>{title}</TubTitle>
          <TubFlavour>
            Flavour: {flavourConstants.flavourNames[flavour]}
          </TubFlavour>
        </VerticalWrapper>
      </ProductSection>
      <PriceSection>
        <NormalText>{formatPrice(tub.price)}</NormalText>
      </PriceSection>
      <QuantitySection>
        <AmountInput
          type="text"
          maxLength="3"
          oninput="this.value=this.value.replace(/[^0-9]/g,'')"
          value={newAmount}
          onKeyUp={(event) => {
            if (event.keyCode === 13) {
              event.preventDefault();
              event.target.blur();
            }
          }}
          onBlur={() => {
            const payload = {
              id: tub.id,
              amount: newAmount,
            };
            dispatch(setAmount(payload));
            saveCartToStorage();
          }}
          onChange={(event) => {
            const newValue = event.target.value.replace(/[^0-9]/g, "");
            setNewAmount(newValue);
          }}
        />
      </QuantitySection>
      <SubtotalSection>
        <NormalText>{formatPrice(tub.price * tub.amount)}</NormalText>
      </SubtotalSection>
    </CartItemDiv>
  );
};

const CartItemDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 ${spacings.spacing16};
  box-sizing: border-box;
`;

const ProductSection = styled.div`
  display: flex;
  flex: 3;
  align-items: center;
  gap: ${spacings.spacing16};
`;

const TubImage = styled.img`
  width: 100%;
  max-width: 4rem;
`;

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TubTitle = styled.h2`
  font-family: ${fonts.bebasNeue};
  font-size: ${fonts.fontSize24};
  line-height: ${fonts.lineHeight32};
  margin: 0;
  color: ${colours.textColour};
`;
const TubFlavour = styled.p`
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize14};
  line-height: ${fonts.lineHeight20};
  margin: 0;
  color: ${colours.mainGrayTextColour};
`;

const PriceSection = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const QuantitySection = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const SubtotalSection = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const AmountInput = styled.input`
  width: 100%;
  max-width: 2.625rem;
  margin: 0 ${spacings.spacing16};
  text-align: center;
  padding: ${spacings.spacing8} 0;
  border-radius: 10px;
  border: 1px solid ${colours.secondaryGrayColour};
  color: ${colours.textColour};
  font-size: ${fonts.fontSize20};
  line-height: ${fonts.lineHeight20};
  font-family: ${fonts.bebasNeue};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const NormalText = styled.p`
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize14};
  line-height: ${fonts.lineHeight20};
  color: ${colours.textColour};
  margin: 0;
`;
