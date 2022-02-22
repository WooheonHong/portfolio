import { AlginCenterBetween } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  ${AlginCenterBetween}
`;

export const Title = styled.p`
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 0.8125rem;
`;
