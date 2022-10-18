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

const aStyle = { textDecoration: "none", color: `${colours.textColour}` };
const aStyleWhite = {
  textDecoration: "none",
  color: `${colours.mainWhiteTextColour}`,
};

export const Navbar = ({ transparent }) => {
  if (transparent) {
    return (
      <Header transparent>
        <Wrapper>
          <Link to="/" style={aStyleWhite}>
            <LogoWhite>
              <img src={logoWhite} alt="logo" />
              <LogoText>TRIATH</LogoText>
            </LogoWhite>
          </Link>
          <NavWhite>
            <Link to="/shop">SHOP</Link>
            <Link to="/about">ABOUT US</Link>
          </NavWhite>
          <Cart transparent>
            <ShoppingCartOutlinedIcon fontSize="medium" />
            <Price />
          </Cart>
        </Wrapper>
      </Header>
    );
  }
  return (
    <Header>
      <Wrapper>
        <Link to="/" style={aStyle}>
          <Logo>
            <img src={logo} alt="logo" />
            <LogoText>TRIATH</LogoText>
          </Logo>
        </Link>
        <Nav>
          <Link to="/shop">SHOP</Link>
          <Link to="/about">ABOUT US</Link>
        </Nav>
        <Cart>
          <ShoppingCartOutlinedIcon fontSize="medium" />
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
  font-weight: 400;
`;
const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 ${spacings.spacing32};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacings.spacing16} 0;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    padding-right: ${spacings.spacing8};
    max-width: 1.75rem;
  }
  cursor: pointer;
`;

const LogoWhite = styled.div`
  display: flex;
  align-items: center;

  img {
    padding-right: ${spacings.spacing8};
    max-width: 1.75rem;
  }
  cursor: pointer;
`;

const LogoText = styled.h2`
  font-size: ${fonts.fontSize32};
  line-height: ${fonts.lineHeight32};
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-size: ${fonts.fontSize24};
  line-height: ${fonts.lineHeight24};
  a {
    text-decoration: none;
    padding: 0 ${spacings.spacing16};
    color: ${colours.textColour};
    transition: 200ms;
  }
  a:hover {
    color: ${colours.primaryColour};
  }
`;
const NavWhite = styled.nav`
  display: flex;
  align-items: center;
  font-size: ${fonts.fontSize24};
  line-height: ${fonts.lineHeight24};
  a {
    text-decoration: none;
    padding: 0 ${spacings.spacing16};
    color: ${colours.mainWhiteTextColour};
    transition: 200ms;
  }
  a:hover {
    color: ${colours.primaryColour};
  }
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fonts.fontSize24};
  line-height: ${fonts.lineHeight24};
  cursor: pointer;
  span {
    transition: 200ms;
    padding-left: ${spacings.spacing8};
  }
  span:hover {
    color: ${colours.primaryColour};
  }
`;
