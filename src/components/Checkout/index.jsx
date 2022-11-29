import React, { useEffect, useState } from "react";
import styled from "styled-components";

import tubShopTopLeft from "../../icons/tubShopTopLeft.svg";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import * as fonts from "../../utils/fonts";
import { Navbar } from "../../shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/priceFormatter";
import { Button } from "../../shared/Button";
import { generatePaymentPayload } from "../../utils/paymentApi";

import { addItella, addOmniva } from "../../reducers/locationsReducer";
import { omniva_places_info } from "../../mocks/mockOmniva";
import { itella_places_info } from "../../mocks/mockItella";

import { setTransaction } from "../../firebase";
import { CredentialsInput } from "./CredentialsInput.jsx";
import { Footer } from "../../shared/Footer";

const validateInputFields = (credentialsInfo) => {
  if (!credentialsInfo.firstName) {
    return false;
  }
  if (!credentialsInfo.lastName) {
    return false;
  }
  if (!credentialsInfo.email) {
    return false;
  }
  if (!credentialsInfo.phoneNumber) {
    return false;
  }
  if (!credentialsInfo.cityCounty) {
    return false;
  }
  if (!credentialsInfo.zipCode) {
    return false;
  }
  if (!credentialsInfo.address) {
    return false;
  }
  if (!credentialsInfo.courier) {
    return false;
  }
  if (
    !credentialsInfo.parcelMachine ||
    credentialsInfo.parcelMachine === "Select parcel machine"
  ) {
    return false;
  }
  return true;
};

const shippingText = (courier) => {
  const textValue = shippingPrice(courier);
  if (textValue) return formatPrice(textValue);
  return "TBD";
};

// pricing hard coded since using package sizes from respective couriers
const shippingPrice = (courier) => {
  console.log(courier);
  if (!courier) return null;
  if (courier === "omniva") {
    return 3.85;
  }
  if (courier === "itella") {
    return 2.99;
  }
};

export const Checkout = () => {
  const credentialsInfo = useSelector((state) => state.credentials.info);
  const cart = useSelector((state) => state.cart);
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    const products = cart.tubs.map((tub) => {
      return {
        product_name: tub.id,
        product_price: tub.price,
        quantity: tub.amount,
      };
    });
    const totalAmount =
      cart.totalAmount + shippingPrice(credentialsInfo.courier);

    const data = {
      totalAmount,
      firstName: credentialsInfo.firstName,
      lastName: credentialsInfo.lastName,
      email: credentialsInfo.email,
      phoneNumber: credentialsInfo.phoneNumber,
      cityCounty: credentialsInfo.cityCounty,
      zipCode: credentialsInfo.zipCode,
      address: credentialsInfo.address,
      courier: credentialsInfo.courier,
      parcelMachine: credentialsInfo.parcelMachine,
      products,
    };

    const transactionId = await setTransaction(data);

    const dataWithId = {
      ...data,
      transactionId,
    };

    const payload = generatePaymentPayload(dataWithId);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/payment-token`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location = `https://sandbox-payments.montonio.com?payment_token=${data}`;
      });
  };

  const handleSubmitPurchase = (event) => {
    event.preventDefault();
    if (validateInputFields(credentialsInfo)) {
      submit();
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (
      !!!Object.keys(locations.omniva).length ||
      !!!Object.keys(locations.itella).length
    ) {
      const allItellaLocations = itella_places_info;

      const itellaObject = {};
      for (const location of allItellaLocations) {
        if (itellaObject[location.group_name]) {
          itellaObject[location.group_name].push(location.name);
        } else {
          itellaObject[location.group_name] = [location.name];
        }
      }

      dispatch(addItella(itellaObject));

      const allOmnivaLocations = omniva_places_info;

      const omnivaObject = {};
      for (const location of allOmnivaLocations) {
        if (omnivaObject[location.A1_NAME]) {
          omnivaObject[location.A1_NAME].push(location.NAME);
        } else {
          omnivaObject[location.A1_NAME] = [location.NAME];
        }
      }

      dispatch(addOmniva(omnivaObject));
    }
  }, []);

  return (
    <CheckoutDiv>
      <Navbar />
      <Content onSubmit={handleSubmitPurchase}>
        <CredentialsWrapper>
          <Credentials>
            <TitleOfSection>ENTER CREDENTIALS</TitleOfSection>
            <CredentialsInput />
          </Credentials>
        </CredentialsWrapper>

        <OrderSummaryWrapper>
          <OrderSummary>
            <TitleOfSection>ORDER SUMMARY</TitleOfSection>
            <CartTextWrapper>
              <CartText>Subtotal</CartText>
              <CartText>{formatPrice(cart.totalAmount)}</CartText>
            </CartTextWrapper>
            <Divider />
            <CartTextWrapper>
              <CartText>Shipping</CartText>
              <CartText>{shippingText(credentialsInfo.courier)}</CartText>
            </CartTextWrapper>
            <Divider />
            <CartTextWrapper style={{ paddingBottom: `${spacings.spacing8}` }}>
              <CartTextTotal>Total</CartTextTotal>
              <CartTextTotal>
                {formatPrice(
                  cart.totalAmount + shippingPrice(credentialsInfo.courier)
                )}
              </CartTextTotal>
            </CartTextWrapper>
            <Button type="submit" isLoading={loading}>
              Continue
            </Button>
            <Error visible={error}>An error has occurred.</Error>
          </OrderSummary>
        </OrderSummaryWrapper>
      </Content>
      <Footer />
    </CheckoutDiv>
  );
};

const Error = styled.p`
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize16};
  font-weight: 400;
  line-height: ${fonts.lineHeight20};
  color: red;
  margin: 0;
  text-align: center;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const CheckoutDiv = styled.div`
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

const Content = styled.form`
  display: flex;
  width: 100%;
  max-width: 1000px;
  gap: ${spacings.spacing32};
`;

const Credentials = styled.div`
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

const Divider = styled.div`
  width: 100%;
  background-color: ${colours.secondaryGrayColour};
  height: ${spacings.spacing1};
`;

const OrderSummaryWrapper = styled.div`
  position: relative;
  flex: 1.1;
`;
const CredentialsWrapper = styled.div`
  flex: 2;
`;

const OrderSummary = styled.div`
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
