import { templateProps } from "@Type/.";
import { Container } from "./style";

const CareerTemplate = ({ index }: templateProps) => {
  const myIndex = 1;
  const zIndex = index === myIndex ? -1 : myIndex;
  return <Container zIndex={zIndex}>a</Container>;
};

export default CareerTemplate;
