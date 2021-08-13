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
  border-radius: 5px;
  white-space: nowrap;
  color: #fff;
  border: 2px solid #7510f7;
  background-color: #7510f7;
  outline: none;
  padding: 5px 15px;
  font-size: 15px;
  cursor: pointer;

  ${mediaQuery.mobile`
    padding:8px 10px;
    width: 100%;
    font-size: 20px
  `}

  ${mediaQuery.desktop`
    color:#fff;
    border: 2px solid #7510f7;
    background-color: #7510f7;
  `}
`;

export default GlobalStyle;
