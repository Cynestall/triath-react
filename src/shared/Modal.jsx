import React from "react";
import styled from "styled-components";

import * as colours from "../utils/colors";
import * as spacings from "../utils/spacings";
import * as fonts from "../utils/fonts";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export const Modal = ({ success, setShowModal }) => {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
  if (success) {
    return (
      <ModalContainer>
        <ModalWrapper>
          <CloseWrapper>
            <CloseIcon
              fontSize="large"
              sx={{ cursor: "pointer" }}
              onClick={setShowModal(false)}
            />
          </CloseWrapper>
          <CheckIcon color="success" sx={{ fontSize: 200 }} />
          <CheckoutHeading>SUCCESS</CheckoutHeading>
          <CheckoutText>
            Your purchase has been processed. <br />
            You will receive an email shortly.
          </CheckoutText>
        </ModalWrapper>
      </ModalContainer>
    );
  } else {
    return (
      <ModalContainer>
        <ModalWrapper>False</ModalWrapper>
      </ModalContainer>
    );
  }
};

const ModalContainer = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: grid;
  place-items: center;
`;

const ModalWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  padding: ${spacings.spacing32};
  border-radius: 10px;
  background-color: ${colours.mainWhiteTextColour};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CheckoutHeading = styled.h1`
  font-family: ${fonts.bebasNeue};
  font-size: ${fonts.fontSize32};
  line-height: ${fonts.lineHeight32};
`;

const CheckoutText = styled.p`
  text-align: center;
  font-family: ${fonts.montserrat};
  font-size: ${fonts.fontSize16};
  line-height: ${fonts.lineHeight20};
`;
