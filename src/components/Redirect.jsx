import React, { useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import * as colours from "../utils/colors";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { deleteTransaction } from "../firebase";
import { deleteCart } from "../reducers/cartReducer";
import { useDispatch } from "react-redux";
import { saveCartToStorage } from "../utils/cartSave";

export const Redirect = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);

    const getPayload = async () => {
      if (!urlSearchParams) window.location = "/collection";
      const payment_token = urlSearchParams.get("payment_token");
      if (!payment_token) window.location = "/collection";

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: payment_token }),
      };
      fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/decode-token`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "finalized") {
            dispatch(deleteCart());
            saveCartToStorage();
            navigate("/collection", { state: { success: true, data } });
          } else {
            deleteTransaction(data.merchant_reference);
            navigate("/collection", { state: { success: false } });
          }
        });
    };

    getPayload();
  }, [dispatch, navigate]);

  return (
    <Center>
      <div>
        <PulseLoader
          color={colours.primaryColour}
          loading={true}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </Center>
  );
};

const Center = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
