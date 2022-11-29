import React, { useEffect, useState } from "react";
import { Navbar } from "../../shared/Navbar";
import { Footer } from "../../shared/Footer";
import styled from "styled-components";
import { getTubs } from "../../firebase";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import { TubCardShop } from "./TubCardShop";
import { addProduct } from "../../reducers/productsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Modal } from "../../shared/Modal";

export const Shop = () => {
  const dispatch = useDispatch();
  const tubsFromState = useSelector((state) => state.products.tubs);
  const [showModal, setShowModal] = useState(true);
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  console.log(location.state);

  useEffect(() => {
    const loadTubs = async () => {
      const tubsData = await getTubs();
      tubsData.docs.map((doc) =>
        dispatch(addProduct({ ...doc.data(), id: doc.id }))
      );
      setLoading(false);
    };

    if (tubsFromState.length === 0) {
      loadTubs();
    } else {
      setLoading(false);
    }

    let wasSuccessful;
    if (location.state) {
      ({ success: wasSuccessful } = location.state);

      if (wasSuccessful) {
        setSuccess(true);
        setShowModal(true);
      } else {
        setSuccess(false);
        setShowModal(false);
      }
    }
    // getPayload();
  }, []);

  return (
    <ShopDiv>
      <Navbar />
      <Wrapper>
        <TubSelection>
          {tubsFromState.map((tub) => {
            return (
              <TubCardShop
                key={tub.id}
                tubId={tub.id}
                title={tub.title}
                price={tub.price}
                subtitle={tub.subtitle}
                flavours={tub.flavours}
              />
            );
          })}
        </TubSelection>
      </Wrapper>
      <Footer />
    </ShopDiv>
  );
};

const ShopDiv = styled.div`
  background-color: ${colours.backgroundColour};
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing32};
`;

const TubSelection = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${spacings.spacing32};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
