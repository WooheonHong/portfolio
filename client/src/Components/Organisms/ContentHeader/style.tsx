import { AlginCenterBetween, DefaultGreyColor, DefaultWhiteColor } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  ${AlginCenterBetween}
  height: 10%;
  width: 80%;
  margin: 1vh auto;
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${DefaultGreyColor};
`;

export const Button = styled.button`
  font-size: 1rem;
  width: 5vw;
  color: ${DefaultGreyColor};
  &:hover {
    cursor: pointer;
    color: ${DefaultWhiteColor};
  }
`;
