import { templateProps } from "@Type/.";
import { Container } from "./style";

const ExprienceTemplate = ({ index }: templateProps) => {
  const myIndex = 2;
  const zIndex = index === myIndex ? -1 : myIndex;
  return <Container zIndex={zIndex}>a</Container>;
};

export default ExprienceTemplate;
