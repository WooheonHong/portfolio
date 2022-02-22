import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
  body{
    font-size:1rem;
  }
  button {
    &:hover{
      cursor:pointer;
    }
  }
`;
export default GlobalStyle;
