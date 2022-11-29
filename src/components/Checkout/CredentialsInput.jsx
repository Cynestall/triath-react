import React from "react";
import styled from "styled-components";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import * as fonts from "../../utils/fonts";
import { useDispatch, useSelector } from "react-redux";
import { updateCredential } from "../../reducers/credentialsReducer";

import * as images from "../../images/consts";

export const CredentialsInput = () => {
  const credentialsInfo = useSelector((state) => state.credentials.info);
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  const updateField = (type, input) => {
    dispatch(updateCredential({ type, input }));
  };
  return (
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
  );
};

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
