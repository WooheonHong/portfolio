import { AlignCenterAround, DefaultOrangeColor } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  width: 70vw;
  height: 50vh;
  margin: 5vh 25vw 5vh 15vw;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 70vw;
  height: 50vh;
`;

export const BooksContainer = styled.div`
  display: flex;
  width: 35vw;
  height: 100%;
  flex-wrap: wrap;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 100%;
  ${AlignCenterAround};
`;

export const Link = styled.a`
  font-size: 1rem;
  margin: auto;
  color: ${DefaultOrangeColor};
`;
