import React from "react";
import { useMemo, useState } from "react";
import { Navbar } from "../../shared/Navbar";
import { Footer } from "../../shared/Footer";
import styled from "styled-components";
import { getTubs } from "../../firebase";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import { TubCardShop } from "./TubCardShop";

export const Shop = () => {
  const [tubs, setTubs] = useState([]);

  useMemo(() => {
    const loadTubs = async () => {
      const tubsData = await getTubs();
      setTubs(tubsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    loadTubs();
  }, []);

  return (
    <ShopDiv>
      <Navbar />
      <Wrapper>
        <TubSelection>
          {tubs.map((tub) => {
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
