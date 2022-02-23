import { AlginCenterBetween, DefaultGreyColor, DefaultWhiteColor } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
`;

export const TitleContianer = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  ${AlginCenterBetween}
`;
export const Organization = styled.p`
  width: 20%;
  font-size: 0.8rem;
  color: ${DefaultGreyColor};
`;
export const Date = styled.p`
  font-size: 1rem;
  color: ${DefaultWhiteColor};
  &::after {
    content: "";
    display: block;
    width: 100%;
    margin-top: 2vh;
    border: 1px solid ${DefaultGreyColor};
  }
`;

export const Info = styled.p`
  margin: 5vh 0;
  font-size: 1.2rem;
  line-height: 1.5;
  color: ${DefaultWhiteColor};
  white-space: pre-line;
`;
