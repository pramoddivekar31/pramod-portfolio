import styled from "styled-components";
import { mediaQuery } from "../../helpers/styleHelper";
import { Link } from "react-router-dom";
import { DiApple } from "react-icons/di";

export const Wrapper = styled.div`
  /* ${mediaQuery.mobile`
        background-color: orange;
  `}

  ${mediaQuery.tablet`
        background-color: yellow;
  `}

   ${mediaQuery.desktop`
        background-color: green;
   `} */
`;

export const Nav = styled.nav`
  background-color: #101522;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  max-width: 1140px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0px 15px;
`;

export const NavLogo = styled(Link)`
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  font-size: 2rem;
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
  border-bottom: 3px solid transparent;
`;

export const MobileIcon = styled.div`
  display: flex;

  ${mediaQuery.mobile`
    cursor: pointer;
    font-size: 2rem;
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
      height: 90vh;
      top:70px;
      position:absolute;
      left: ${({ click }) => (click ? 0 : `-100%`)};
      transition: all 0.5s ease;
      opacity:1;
  `}

  ${mediaQuery.tablet`
    width:50%;
    justify-content: space-between;
  `}

  ${mediaQuery.desktop`
    width:40%;
    justify-content: space-between;
  `}
`;

export const NavItem = styled.li`
  height: 70px;
  list-style: none;
  cursor: pointer;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid orange;
  }

  ${mediaQuery.mobile`
    width:100%;

    &:hover {
        background-color: #111829;
        border-bottom: 3px solid transparent;
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
