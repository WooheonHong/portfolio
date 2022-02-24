import styled from "styled-components";

interface Props {
  backgroundColor: string;
}
export const Container = styled.div<Props>`
  width: 100vw;
  height: 110vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #ffffff;
`;
