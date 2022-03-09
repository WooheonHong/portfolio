import styled from "styled-components";
import { Text } from "@Atoms/Text";
import { DefaultBlackColor, AlginCenterBetween, DefaultGreyColor, DefaultBlueColor } from "@Style/.";

interface Props {
  color: string;
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 90%;
  transition: 1s;
  min-width: 820px;
  margin: auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 80%;
  height: 20%;
  ${AlginCenterBetween};
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 55%;
    margin-top: 6vh;
    border: 1px solid ${DefaultGreyColor};
  }
`;
export const Arrow = styled.button`
  position: absolute;
  left: 10%;
  top: 50%;
  font-size: 3rem;
  font-weight: bold;
  color: ${DefaultBlackColor};
`;

export const Title = styled(Text)<Props>`
  font-size: 1.25rem;
`;

export const Date = styled.p`
  font-size: 0.8125rem;
  color: ${DefaultGreyColor};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  width: 100%;
`;

export const SubTitle = styled.p`
  width: 100%;
  font-size: 1rem;
  color: ${DefaultBlueColor};
  margin-bottom: 4vh;
`;

export const Detail = styled.p`
  width: 70%;
  font-size: 0.8125rem;
  margin-bottom: 1vh;
  margin-left: 3%;
  line-height: 25px;
  color: ${DefaultBlackColor};
`;

export const LogoContainer = styled.div`
  position: absolute;
  min-width: 50px;
  width: 5vw;
  left: 60vw;
  top: 70vh;
`;
