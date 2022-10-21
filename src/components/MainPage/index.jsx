import React from "react";
import { Hero } from "./Hero";
import { ProductSelection } from "./ProductSelection";
import { Footer } from "../../shared/Footer";
import { Advertisement } from "./Advertisement";
import styled from "styled-components";

import * as spacings from "../../utils/spacings";

const MainPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacings.spacing80};
`;

export const MainPage = ({ cart }) => {
  return (
    <MainPageDiv>
      <Hero />
      <ProductSelection />
      <Advertisement />
      <Footer />
    </MainPageDiv>
  );
};
