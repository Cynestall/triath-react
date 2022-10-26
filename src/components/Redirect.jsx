import React, { useEffect, useMemo } from "react";
import { decodeToken } from "../utils/paymentApi";
import PulseLoader from "react-spinners/PulseLoader";

import * as colours from "../utils/colors";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Redirect = () => {
  const navigate = useNavigate();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );

  useEffect(() => {
    const getPayload = async () => {
      //if (!urlSearchParams) window.location = "/collection";
      const payment_token = urlSearchParams.get("payment_token");
      //if (!payment_token) window.location = "/collection";
      const payload = await decodeToken(payment_token);

      // should check expiration date as well, unix time
      if (payload.status === "finalized") {
        console.log("successful");
        console.log(payload);
        navigate("/success", { state: { payload } });
      } else {
        console.log("failed");
      }
    };

    getPayload();
  }, [urlSearchParams, navigate]);

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
