import { templateProps } from "@Type/.";
import { Container } from "./style";

const SkillSetTemplate = ({ index }: templateProps) => {
  const myIndex = 6;
  const zIndex = index === myIndex ? -1 : myIndex;
  return <Container zIndex={zIndex}>a</Container>;
};

export default SkillSetTemplate;
