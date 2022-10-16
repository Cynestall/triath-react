import React from "react";
import { Hero } from "./Hero";
import { ProductSelection } from "./ProductSelection";
import styled from "styled-components";

const MainPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainPage = () => {
  return (
    <MainPageDiv>
      <Hero />
      <ProductSelection />
    </MainPageDiv>
  );
};
