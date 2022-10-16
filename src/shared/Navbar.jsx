import React from "react";
import styled from "styled-components";

import * as colours from "../utils/colors";
import * as fonts from "../utils/fonts";
import * as spacings from "../utils/spacings";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

import logo from "../icons/triathBlackLogo.svg";
import logoWhite from "../icons/triathWhiteLogo.svg";

const Price = () => {
  return <span>0.00$</span>;
};

export const Navbar = ({ transparent }) => {
  if (transparent) {
    return (
      <Header transparent>
        <Wrapper>
          <LogoWhite>
            <Link to="/">
              <img src={logoWhite} alt="logo" />
              TRIATH
            </Link>
          </LogoWhite>
          <NavWhite>
            <Link to="/shop">SHOP</Link>
            <Link to="/about">ABOUT US</Link>
          </NavWhite>
          <Cart transparent>
            <ShoppingCartOutlinedIcon fontSize="large" />
            <Price />
          </Cart>
        </Wrapper>
      </Header>
    );
  }
  return (
    <Header>
      <Wrapper>
        <Logo>
          <Link to="/">
            <img src={logo} alt="logo" />
            TRIATH
          </Link>
        </Logo>
        <Nav>
          <Link to="/shop">SHOP</Link>
          <Link to="/about">ABOUT US</Link>
        </Nav>
        <Cart>
          <ShoppingCartOutlinedIcon fontSize="large" />
          <Price />
        </Cart>
      </Wrapper>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) =>
    props.transparent ? colours.mainWhiteTextColour : colours.textColour};
  font-family: ${fonts.bebasNeue};
  background-color: ${(props) =>
    props.transparent ? null : colours.mainWhiteTextColour};
`;
const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 ${spacings.spacing32};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${spacings.spacing16};
`;
const Logo = styled.div`
  font-size: ${fonts.fontSize48};
  line-height: ${fonts.lineHeight56};
  display: flex;
  align-items: center;

  img {
    padding-right: ${spacings.spacing8};
  }
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${colours.textColour};
  }
`;
const LogoWhite = styled.div`
  font-size: ${fonts.fontSize48};
  line-height: ${fonts.lineHeight56};
  display: flex;
  align-items: center;

  img {
    padding-right: ${spacings.spacing8};
  }
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${colours.mainWhiteTextColour};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-size: ${fonts.fontSize32};
  line-height: ${fonts.lineHeight32};
  a {
    text-decoration: none;
    padding: 0 ${spacings.spacing16};
    color: ${colours.textColour};
  }
`;
const NavWhite = styled.nav`
  display: flex;
  align-items: center;
  font-size: ${fonts.fontSize32};
  line-height: ${fonts.lineHeight32};
  a {
    text-decoration: none;
    padding: 0 ${spacings.spacing16};
    color: ${colours.mainWhiteTextColour};
  }
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fonts.fontSize32};
  line-height: ${fonts.lineHeight32};
  cursor: pointer;
  span {
    padding-left: ${spacings.spacing8};
  }
`;
