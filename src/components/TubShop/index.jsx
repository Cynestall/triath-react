import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { getTubByTitle, getTubDescriptionByTitle } from "../../firebase";
import { Footer } from "../../shared/Footer";
import { Navbar } from "../../shared/Navbar";

import tubShopTopLeft from "../../icons/tubShopTopLeft.svg";

import * as colours from "../../utils/colors";
import * as spacings from "../../utils/spacings";
import * as fonts from "../../utils/fonts";
import { LeftSide } from "./LeftSide";
import { FlavourDescription } from "./FlavourDescription";
import { PerformanceStats } from "./PerformanceStats";
import { FlavourAndCart } from "./FlavourAndCart";
import { ShopTubDescription } from "./ShopTubDescription";

export const TubShop = ({ cart, setCart }) => {
  const [tub, setTub] = useState([]);
  const [tubDescription, setTubDescription] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedFlavour, setSelectedFlavour] = useState("");

  const query = window.location.pathname;
  const titleOfProduct = query.substring(query.lastIndexOf("/") + 1);

  useMemo(() => {
    const getTub = async () => {
      setLoading(true);

      const filteredTub = await getTubByTitle(titleOfProduct);

      setTub({ ...filteredTub.data(), id: filteredTub.id });
      setSelectedFlavour(filteredTub.data().flavours[0]);

      setLoading(false);
    };

    const getTubDescription = async () => {
      setLoading(true);

      const filteredTub = await getTubDescriptionByTitle(titleOfProduct);

      setTubDescription({ ...filteredTub.data(), id: filteredTub.id });

      setLoading(false);
    };

    getTub();
    getTubDescription();
  }, [titleOfProduct]);

  return (
    <div>
      {!isLoading && (
        <TubShopDiv>
          <Navbar />
          <Content>
            <ShopMainComponent>
              <ShopImageAndDescription>
                <LeftSide title={tub.title} />
                <RightSide>
                  <ShortDescription>
                    <PreworkoutNameAndPrice>
                      <PreworkoutNameContainer>
                        <MainTitle>{tub.title} PRE-WORKOUT</MainTitle>
                        <MainSubtitle>{tub.subtitle}</MainSubtitle>
                      </PreworkoutNameContainer>
                      <PreworkoutPrice>{tub.price}€</PreworkoutPrice>
                    </PreworkoutNameAndPrice>
                    <Spacer />
                    <PerformanceStats
                      pump={tubDescription.pump}
                      energy={tubDescription.energy}
                      strength={tubDescription.strength}
                    />
                    <Spacer />
                    <ServingSize>
                      Serving size: {tubDescription.servings}
                    </ServingSize>
                    <Spacer />
                    <FlavourDescription selectedFlavour={selectedFlavour} />
                  </ShortDescription>
                </RightSide>
              </ShopImageAndDescription>
              <FlavourAndCart
                tubId={tub.id}
                title={tub.title}
                flavours={tub.flavours}
                cart={cart}
                setCart={setCart}
                selectedFlavour={selectedFlavour}
                setSelectedFlavour={setSelectedFlavour}
              ></FlavourAndCart>
            </ShopMainComponent>
            <ShopTubDescription
              title={tub.title}
              productDescription={tubDescription.description}
            />
          </Content>
          <Footer />
        </TubShopDiv>
      )}
    </div>
  );
};

const TubShopDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  width: 100%;
  background-color: ${colours.backgroundColour};
  background-size: 53vw;
  background-repeat: no-repeat;
  background-image: url(${tubShopTopLeft});
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacings.spacing48};
  padding: ${spacings.spacing48} 0;
`;
const ShopMainComponent = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing48};
`;
const ShopImageAndDescription = styled.div`
  display: flex;
`;
const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
const ShortDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing16};
  padding: ${spacings.spacing32};
  background-color: ${colours.mainWhiteTextColour};
  box-shadow: ${colours.boxShadowCardColour};
  border-radius: 10px;
  min-width: 28rem;
`;
const PreworkoutNameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.spacing16};
`;
const PreworkoutNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainTitle = styled.h1`
  font-family: ${fonts.bebasNeue};
  color: ${colours.textColour};
  line-height: ${fonts.lineHeight60};
  font-size: ${fonts.fontSize48};
  margin: 0;
`;
const MainSubtitle = styled.p`
  font-family: ${fonts.montserrat};
  color: ${colours.mainGrayTextColour};
  line-height: ${fonts.lineHeight24};
  font-size: ${fonts.fontSize24};
  margin: 0;
`;
const PreworkoutPrice = styled.p`
  font-family: ${fonts.montserrat};
  color: ${colours.primaryColour};
  line-height: ${fonts.lineHeight24};
  font-size: ${fonts.fontSize24};
  margin: 0;
`;

const Spacer = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: ${colours.secondaryGrayColour};
`;

const ServingSize = styled.p`
  font-family: ${fonts.montserrat};
  color: ${colours.textColour};
  line-height: ${fonts.lineHeight24};
  font-size: ${fonts.fontSize16};
  margin: 0;
`;
