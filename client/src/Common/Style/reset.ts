import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { DefaultFontFamily, HoverPoitner } from ".";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
    text-decoration: none;
    color: #000000;
  }
  *::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  p{
    line-height: 1.15;
  }
  body{
    font-size:1rem;
    font-family: ${DefaultFontFamily};
  }
  button,svg {
    ${HoverPoitner}
  }
  button{
    background:none;
  }
`;
export default GlobalStyle;
