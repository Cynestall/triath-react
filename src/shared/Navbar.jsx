import styled from "styled-components";
import * as colours from "../utils/colors";
import * as fonts from "../utils/fonts";

const Header = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  color: ${colours.textColour};
  font-family: ${fonts.bebasNeue};
`;
const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-size: ${fonts.fontSize48};
`;
const Nav = styled.nav`
  font-size: ${fonts.fontSize32};
`;
const Cart = styled.div`
  font-size: ${fonts.fontSize32};
`;

export const Navbar = (props) => {
  return (
    <Header>
      <Wrapper>
        <Logo>Logo</Logo>
        <Nav>MAIN SHOP</Nav>
        <Cart>0.00$</Cart>
      </Wrapper>
    </Header>
  );
};
