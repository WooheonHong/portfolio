import { AlginCenterBetween } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40vw;
  height: 60vh;
  margin: 10vh 0 0 20vw;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 20vw;
  height: 20vh;
  margin-top: 60vh;
  margin-left: 10vw;
  ${AlginCenterBetween}
`;
