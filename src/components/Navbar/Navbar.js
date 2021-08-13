import React from "react";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  LogoText,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavWrapper,
} from "./Navbar.styles";
import { IconContext } from "react-icons/lib";
import { Button } from "../../helpers/globalStyle";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const logoText = "<Pramod />";

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>

        <NavWrapper>
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
                  <NavLinks to="/blogs">Blogs</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/projects">Projects</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/interview-questions">
                    Interview Questions
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/">
                    <Button>Request Referral</Button>
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </NavWrapper>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
