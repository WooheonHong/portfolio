import { AlignCenterAround, HoverPoitner } from "@Style/.";
import styled from "styled-components";
import { Text } from "@Atoms/Text";

interface Props {
  color: string;
}
export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  ${AlignCenterAround}
`;

export const Title = styled(Text)<Props>`
  font-weight: 700;
  font-size: 2.5rem;
  margin-left: -5%;
  ${HoverPoitner}
`;

export const ContentText = styled(Text)<Props>`
  font-size: 1rem;
  margin-left: -10%;
  width: 50%;
`;
