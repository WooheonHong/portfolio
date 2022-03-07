import { AlignCenterAround } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50vw;
  height: 60vh;
  margin: 10vh auto 0 auto;
  min-width: 820px;
`;

export const SkillSetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20%;
`;

export const SkillIconContainer = styled.div`
  display: flex;
  ${AlignCenterAround}
  width: 100%;
`;
