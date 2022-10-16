import React from "react";
import styled from "styled-components";
import { TubCard } from "../../shared/TubCard";
import * as images from "../../images/consts";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
`;

export const ProductSelection = () => {
  return (
    <Wrapper>
      <TubCard
        title="essentials"
        subtitle="Beginner Series Workout"
        price="29.99€"
        img={images.essentialsBlueberryImage}
        buttonText="DETAILS"
      />
      <TubCard
        title="tartarus"
        subtitle="Intermediate Series Workout"
        price="34.99€"
        img={images.tartarusSpartansImage}
        buttonText="DETAILS"
      />
      <TubCard
        title="olympus"
        subtitle="Elite Series Workout"
        price="44.99€"
        img={images.olympusElixirImage}
        buttonText="DETAILS"
      />
    </Wrapper>
  );
};
