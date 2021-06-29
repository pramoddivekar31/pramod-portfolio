import styled, { createGlobalStyle } from "styled-components";
import { mediaQuery } from "./styleHelper";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Avenir, Arial, sans-serif;
}
`;

export const Button = styled.button`
  border-radius: 10px;
  white-space: nowrap;
  border: 2px solid orange;
  background-color: #101522;
  outline: none;
  padding: 5px 15px;
  font-size: 15px;
  color: orange;
  cursor: pointer;

  ${mediaQuery.mobile`
    padding:8px 10px;
    width: 100%;
    font-size: 20px
  `}

  &:hover {
    background-color: orange;
    color: #fff;
    transition: all 0.3s ease-out;
  }
`;

export default GlobalStyle;
