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
