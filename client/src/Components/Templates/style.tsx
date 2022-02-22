import styled from "styled-components";

interface Props {
  zIndex: number;
}
export const Container = styled.div<Props>`
  width: 100vw;
  height: 100vh;
`;
