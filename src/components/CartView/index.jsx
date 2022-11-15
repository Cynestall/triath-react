import React from "react";
import styled from "styled-components";
import { Navbar } from "../../shared/Navbar";

import tubShopTopLeft from "../../icons/tubShopTopLeft.svg";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import * as fonts from "../../utils/fonts";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { Button } from "../../shared/Button";
import { formatPrice } from "../../utils/priceFormatter";
import { Footer } from "../../shared/Footer";

export const CartView = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <CartViewDiv>
      <Navbar />
      <Content>
        <ShoppingCart>
          <TitleOfSection>Shopping Cart</TitleOfSection>
          <TableDescription>
            <TableLabels>
              <Label style={{ flex: "3" }}>Product</Label>
              <Label style={{ flex: "1", textAlign: "center" }}>Price</Label>
              <Label style={{ flex: "1", textAlign: "center" }}>Quantity</Label>
              <Label style={{ flex: "1", textAlign: "end" }}>Subtotal</Label>
            </TableLabels>
            <Divider />
          </TableDescription>
          {cart.tubs.length > 0
            ? cart.tubs.map((tub) => {
                return <CartItem key={tub.id} tub={tub} />;
              })
            : "empty"}
        </ShoppingCart>

        <CartTotalWrapper>
          <CartTotal>
            <TitleOfSection>Cart Total</TitleOfSection>
            <CartTextWrapper>
              <CartText>Subtotal</CartText>
              <CartText>{formatPrice(cart.totalAmount)}</CartText>
            </CartTextWrapper>
            <Divider />
            <CartTextWrapper>
              <CartText>Shipping</CartText>
              <CartText>{formatPrice(5.99)}</CartText>
            </CartTextWrapper>
            <Divider />
            <CartTextWrapper style={{ paddingBottom: `${spacings.spacing8}` }}>
              <CartTextTotal>Total</CartTextTotal>
              <CartTextTotal>
                {cart.tubs.length > 0
                  ? formatPrice(cart.totalAmount + 5.99)
                  : formatPrice(0)}
              </CartTextTotal>
            </CartTextWrapper>
            {cart.tubs.length > 0 ? (
              <Button>CHECKOUT</Button>
            ) : (
              <Button isDisabled>CHECKOUT</Button>
            )}
          </CartTotal>
        </CartTotalWrapper>
      </Content>
      <Footer />
    </CartViewDiv>
  );
};

const CartViewDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacings.spacing80};
  background-color: ${colours.backgroundColour};
  min-height: 100vh;
  background-size: 53vw;
  background-repeat: no-repeat;
  background-image: url(${tubShopTopLeft});
`;
const Content = styled.div`
  display: flex;
  width: 1000px;
  gap: ${spacings.spacing32};
`;

const ShoppingCart = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: ${spacings.spacing32};
  gap: ${spacings.spacing32};
  background-color: ${colours.mainWhiteTextColour};
  border-radius: 10px;
  box-shadow: ${colours.boxShadowCardColour};
`;

const TitleOfSection = styled.h1`
  font-family: ${fonts.bebasNeue};
  font-size: ${fonts.fontSize32};
  line-height: ${fonts.lineHeight32};
  font-weight: 400;
  margin: 0;
`;

const TableDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing8};
  width: 100%;
  align-items: center;
`;

const TableLabels = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 ${spacings.spacing16};
`;

const Label = styled.p`
  margin: 0;
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize14};
  line-height: ${fonts.lineHeight20};
  color: ${colours.mainGrayTextColour};
`;

const Divider = styled.div`
  width: 100%;
  background-color: ${colours.secondaryGrayColour};
  height: ${spacings.spacing1};
`;

const CartTotalWrapper = styled.div`
  flex: 1.1;
`;

const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacings.spacing32};
  gap: ${spacings.spacing16};
  background-color: ${colours.mainWhiteTextColour};
  border-radius: 10px;
  box-shadow: ${colours.boxShadowCardColour};
`;

const CartTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartText = styled.p`
  color: ${colours.textColour};
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize16};
  font-weight: 400;
  line-height: ${fonts.lineHeight20};
  margin: 0;
`;

const CartTextTotal = styled.p`
  color: ${colours.textColour};
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize16};
  font-weight: 700;
  line-height: ${fonts.lineHeight20};
  margin: 0;
`;
