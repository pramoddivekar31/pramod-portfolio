import React from "react";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Wrapper,
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  LogoText,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.styles";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const logoText = "<Pramod />";

  return (
    <>
      <Wrapper></Wrapper>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              <LogoText>{logoText}</LogoText>
            </NavLogo>
            <MobileIcon onClick={() => setClick(!click)}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu click={click}>
              <NavItem>
                <NavLinks to="/">Blogs</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Interview Questions</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
