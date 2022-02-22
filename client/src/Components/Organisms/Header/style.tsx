import { AlignCenterAround, HoverPoitner } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  ${AlignCenterAround}
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  margin-left: -5%;
  ${HoverPoitner}
`;

export const Text = styled.p`
  font-size: 0.25rem;
  margin-left: -10%;
  width: 50%;
`;
