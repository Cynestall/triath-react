import React, { useEffect, useState } from "react";
import styled from "styled-components";

import tubShopTopLeft from "../../icons/tubShopTopLeft.svg";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import * as fonts from "../../utils/fonts";
import { Navbar } from "../../shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/priceFormatter";
import { updateCredential } from "../../reducers/credentialsReducer";
import { Button } from "../../shared/Button";
import { generatePaymentPayload, generateToken } from "../../utils/paymentApi";

import * as images from "../../images/consts";

import { addItella, addOmniva } from "../../reducers/locationsReducer";
import { omniva_places_info } from "../../mocks/mockOmniva";
import { itella_places_info } from "../../mocks/mockItella";

import { setTransaction } from "../../firebase";

export const Checkout = () => {
  const credentialsInfo = useSelector((state) => state.credentials.info);
  const cart = useSelector((state) => state.cart);
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  const updateField = (type, input) => {
    dispatch(updateCredential({ type, input }));
  };

  const validateInputFields = () => {
    if (credentialsInfo.firstName === "") {
      return false;
    }
    if (credentialsInfo.lastName === "") {
      return false;
    }
    if (credentialsInfo.email === "") {
      return false;
    }
    if (credentialsInfo.phoneNumber === "") {
      return false;
    }
    if (credentialsInfo.cityCounty === "") {
      return false;
    }
    if (credentialsInfo.zipCode === "") {
      return false;
    }
    if (credentialsInfo.address === "") {
      return false;
    }
    if (credentialsInfo.courier === "") {
      return false;
    }
    if (
      credentialsInfo.parcelMachine === "" ||
      credentialsInfo.parcelMachine === "Select parcel machine"
    ) {
      return false;
    }
    return true;
  };

  const handleSubmitPurchase = (event) => {
    event.preventDefault();
    if (validateInputFields()) {
      submit();
    } else {
      setError(true);
    }
  };

  const submit = async () => {
    const data = {
      totalAmount: cart.totalAmount,
      firstName: credentialsInfo.firstName,
      lastName: credentialsInfo.lastName,
      email: credentialsInfo.email,
      phoneNumber: credentialsInfo.phoneNumber,
      cityCounty: credentialsInfo.cityCounty,
      zipCode: credentialsInfo.zipCode,
      address: credentialsInfo.address,
      courier: credentialsInfo.courier,
      parcelMachine: credentialsInfo.parcelMachine,
    };

    const transactionId = await setTransaction(data);

    const dataWithId = {
      ...data,
      transactionId,
    };

    const payload = generatePaymentPayload(dataWithId);

    const token = await generateToken(payload);
    window.location = `https://sandbox-payments.montonio.com?payment_token=${token}`;
  };

  const [error, setError] = useState(false);

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
            <CredentialInputs>
              <InputNameWrapper>
                <InputWrapperForNames>
                  <InputLabel>First Name</InputLabel>
                  <Input
                    type="text"
                    value={credentialsInfo.firstName}
                    required
                    onChange={(event) => {
                      updateField("firstName", event.target.value);
                    }}
                  />
                </InputWrapperForNames>
                <InputWrapperForNames>
                  <InputLabel>Last Name</InputLabel>
                  <Input
                    type="text"
                    value={credentialsInfo.lastName}
                    required
                    onChange={(event) => {
                      updateField("lastName", event.target.value);
                    }}
                  />
                </InputWrapperForNames>
              </InputNameWrapper>
              <InputWrapper>
                <InputLabel>Email Address</InputLabel>
                <Input
                  type="email"
                  value={credentialsInfo.email}
                  required
                  onChange={(event) => {
                    updateField("email", event.target.value);
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <InputLabel>Phone Number</InputLabel>
                <Input
                  type="tel"
                  value={credentialsInfo.phoneNumber}
                  required
                  onChange={(event) => {
                    updateField("phoneNumber", event.target.value);
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <InputLabel>City / County</InputLabel>
                <Input
                  type="text"
                  value={credentialsInfo.cityCounty}
                  required
                  onChange={(event) => {
                    updateField("cityCounty", event.target.value);
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <InputLabel>Zip Code</InputLabel>
                <Input
                  type="text"
                  value={credentialsInfo.zipCode}
                  required
                  onChange={(event) => {
                    updateField("zipCode", event.target.value);
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <InputLabel>Address</InputLabel>
                <Input
                  type="text"
                  value={credentialsInfo.address}
                  required
                  onChange={(event) => {
                    updateField("address", event.target.value);
                  }}
                />
              </InputWrapper>
              <InputWrapper>
                <InputLabel>Parcel Delivery</InputLabel>
                <RadioInputWrapper>
                  <RadioInputLabel>
                    <RadioInput
                      type="radio"
                      name="courier"
                      value="omniva"
                      required
                      onChange={(e) => {
                        updateField("courier", e.currentTarget.value);
                        updateField("parcelMachine", "");
                      }}
                    />
                    <CourierImage src={images.omnivaImage} />
                  </RadioInputLabel>
                  <RadioInputLabel>
                    <RadioInput
                      type="radio"
                      name="courier"
                      value="itella"
                      required
                      onChange={(e) => {
                        updateField("courier", e.currentTarget.value);
                        updateField("parcelMachine", "");
                      }}
                    />
                    <CourierImage src={images.itellaImage} />
                  </RadioInputLabel>
                </RadioInputWrapper>
                <LocationSelector
                  value={credentialsInfo.parcelMachine}
                  onChange={(e) => {
                    updateField("parcelMachine", e.target.value);
                  }}
                >
                  <option>Select parcel machine</option>
                  {credentialsInfo.courier === "itella"
                    ? Object.keys(locations.itella).map((key, index) => {
                        return (
                          <optgroup label={key} key={key}>
                            {locations.itella[key].map((location) => {
                              return (
                                <option value={location} key={location}>
                                  {location}
                                </option>
                              );
                            })}
                          </optgroup>
                        );
                      })
                    : credentialsInfo.courier === "omniva" &&
                      Object.keys(locations.omniva).map((key, index) => {
                        return (
                          <optgroup label={key} key={key}>
                            {locations.omniva[key].map((location) => {
                              return (
                                <option value={location} key={location}>
                                  {location}
                                </option>
                              );
                            })}
                          </optgroup>
                        );
                      })}
                </LocationSelector>
              </InputWrapper>
            </CredentialInputs>
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
              <CartText>TBD</CartText>
            </CartTextWrapper>
            <Divider />
            <CartTextWrapper style={{ paddingBottom: `${spacings.spacing8}` }}>
              <CartTextTotal>Total</CartTextTotal>
              <CartTextTotal>{formatPrice(cart.totalAmount)}</CartTextTotal>
            </CartTextWrapper>
            <Button type="submit">Continue</Button>
            <Error visible={error}>An error has occurred.</Error>
          </OrderSummary>
        </OrderSummaryWrapper>
      </Content>
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

const CredentialInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing16};
  width: 100%;
`;

const InputNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 26rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing8};
  box-sizing: border-box;
  max-width: 26rem;
  width: 100%;
`;

const InputWrapperForNames = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing8};
  box-sizing: border-box;
  max-width: 12.5rem;
  width: 100%;
`;

const InputLabel = styled.label`
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize14};
  line-height: ${fonts.lineHeight16};
  font-weight: 400;
  &::after {
    content: " *";
    color: red;
  }
`;

const Input = styled.input`
  padding: ${spacings.spacing12} ${spacings.spacing16};
  border: 1px solid ${colours.secondaryGrayColour};
  border-radius: 10px;
  width: 100%;
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize16};
  box-sizing: border-box;
`;
const RadioInputWrapper = styled.div`
  display: flex;
  gap: ${spacings.spacing32};
`;

const RadioInputLabel = styled.label`
  display: flex;
  gap: ${spacings.spacing12};
  align-items: center;
`;

const CourierImage = styled.img`
  height: 2.5rem;
`;
const RadioInput = styled.input`
  border: 1px solid ${colours.secondaryGrayColour};
  border-radius: 10px;
  width: 1rem;
  height: 1rem;
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize16};
  box-sizing: border-box;
`;

const LocationSelector = styled.select`
  padding: ${spacings.spacing12} ${spacings.spacing16};
  border: 1px solid ${colours.secondaryGrayColour};
  border-radius: 10px;
  width: 100%;
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize16};
  box-sizing: border-box;
`;
