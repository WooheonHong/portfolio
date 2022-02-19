import { templateProps } from "@Type/.";
import { Container } from "./style";

const IntroductionTemplate = ({ index }: templateProps) => {
  const myIndex = 3;
  const zIndex = index === myIndex ? -1 : myIndex;
  return <Container zIndex={zIndex}>a</Container>;
};

export default IntroductionTemplate;
