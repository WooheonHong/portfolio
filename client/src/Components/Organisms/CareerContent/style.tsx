import { AlginCenterBetween, DefaultGreyColor } from "@Style/.";
import styled from "styled-components";
import { Text } from "@Atoms/Text";

interface Props {
  color: string;
}
export const Container = styled.div`
  display: flex;
  ${AlginCenterBetween}
  height: 20vh;
  width: 95%;
  &::after {
    content: "";
    display: block;
    position: absolute;
    border-bottom: 1px solid ${DefaultGreyColor};
    width: 80%;
    margin-top: 14vh;
  }
`;

export const Date = styled(Text)<Props>`
  width: 20%;
`;

export const Title = styled(Text)<Props>`
  width: 20%;
`;

export const Info = styled(Text)<Props>`
  width: 60%;
  color: ${DefaultGreyColor};
  &:hover {
    color: white;
  }
`;

export const Link = styled.a`
  width: 60%;
  &:hover {
    color: white;
  }
`;
