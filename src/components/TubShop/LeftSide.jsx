import React from "react";
import styled from "styled-components";

import * as images from "../../images/consts";

import * as spacings from "../../utils/spacings";

export const LeftSide = ({ image, title }) => {
  return (
    <LeftSideDiv>
      <MainImage src={images.dictOfImages[image]} alt={`tub-${title}`} />
      <ImageSelection disabled={true}>
        <SmallImage src={images.dictOfImages[image]} />
        <SmallImage src={images.dictOfImages[image]} />
        <SmallImage src={images.dictOfImages[image]} />
      </ImageSelection>
    </LeftSideDiv>
  );
};

const LeftSideDiv = styled.div`
  padding: ${spacings.spacing16};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainImage = styled.img`
  width: 100%;
  max-width: 320px;
  padding: ${spacings.spacing24} ${spacings.spacing48};
`;
const ImageSelection = styled.div`
  display: ${(props) => (props.disabled ? "none" : "flex")};
  justify-content: space-between;
  max-width: 500px;
  width: 80%;
`;

const SmallImage = styled.img`
  padding: ${spacings.spacing24} ${spacings.spacing32};
  width: 15%;
`;
