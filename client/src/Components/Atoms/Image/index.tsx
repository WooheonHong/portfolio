import styled from "styled-components";

interface Props {
  width: string;
  radius: string;
  margin: string;
}
export const Image = styled.img<Props>`
  width: ${({ width }) => width};
  border-radius: ${({ radius }) => radius};
  margin: ${({ margin }) => margin};
`;
