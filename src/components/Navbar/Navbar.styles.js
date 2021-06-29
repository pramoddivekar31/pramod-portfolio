import styled from "styled-components";
import { mediaQuery } from "../../helpers/styleHelper";
import { Link } from "react-router-dom";
import { DiApple } from "react-icons/di";

export const NavWrapper = styled.div`
  background-color: #101522;
  height: 60px;
  /* padding-top: 3px; */
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  max-width: 1140px;
  margin: auto;
  height: 100%;
`;

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0px 25px;
`;

export const NavLogo = styled(Link)`
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  font-size: 20px;
  align-items: center;
`;

export const LogoText = styled.span`
  display: block;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(DiApple)`
  display: flex;
  align-items: center;
  /* border-bottom: 3px solid transparent; */
`;

export const MobileIcon = styled.div`
  display: flex;

  ${mediaQuery.mobile`
    cursor: pointer;
    font-size: 20px;
  `}

  ${mediaQuery.tablet`
    display:none;
  `}

  ${mediaQuery.tablet`
    display:none;
  `}
`;

export const NavMenu = styled.ul`
  display: flex;

  ${mediaQuery.mobile`
      display:flex;
      flex-direction:column;
      background-color: #101522;
      width:100%;
      height: 100vh;
      top:60px;
      position:absolute;
      left: ${({ click }) => (click ? 0 : `-100%`)};
      transition: all 0.5s ease;
      opacity:1;
      padding:10px 30px;
  `}

  ${mediaQuery.tablet`
    width:75%;
    justify-content: space-between;
  `}

  ${mediaQuery.desktop`
    width:60%;
    justify-content: space-between;
  `}
`;

export const NavItem = styled.li`
  list-style: none;
  cursor: pointer;
  height: 65px;
  /* border-bottom: 3px solid transparent; */
  padding: 5px 0px;

  &:hover {
    /* border-bottom: 3px solid orange; */
    /* border-bottom-left-radius: 3px; */
  }

  ${mediaQuery.mobile`
    width:100%;

    &:hover {
        background-color: #111829;
        // border-bottom: 3px solid transparent;
    }
  `}
`;

export const NavLinks = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  height: 100%;
`;
