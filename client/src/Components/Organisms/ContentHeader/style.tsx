import { AlginCenterBetween, DefaultGreyColor, DefaultWhiteColor } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  ${AlginCenterBetween}
  height: 10%;
  width: 80vw;
  margin: 1vh auto;
  min-width: 820px;
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${DefaultGreyColor};
`;

export const Button = styled.button`
  font-size: 2rem;
  width: 3vw;
  color: ${DefaultGreyColor};
  &:hover {
    cursor: pointer;
    color: ${DefaultWhiteColor};
  }
`;
