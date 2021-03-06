import styled from "styled-components";

interface Props {
  color: string;
}
export const Text = styled.p<Props>`
  color: ${({ color }) => color};
`;

export const HeadText = styled(Text)<Props>`
  font-size: 5rem;
`;

export const Title = styled(Text)<Props>`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
`;

export const BasicTitleText = styled(Text)<Props>`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SkillText = styled(Text)<Props>`
  width: 100%;
  font-size: 0.8rem;
  line-height: 1.5;
  margin-top: 2vh;
  color: #8a8a8a;
`;
