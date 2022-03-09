import styled from "styled-components";

interface Props {
  backgroundColor: string;
}
export const Container = styled.div<Props>`
  min-width: 820px;
  width: 100vw;
  margin: 5vh auto;
  height: 110vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #ffffff;
`;

export const NavigatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 88vw;
  top: 45vh;
  height: 17vh;
  width: 5vw;
  transition: 1s;
`;
