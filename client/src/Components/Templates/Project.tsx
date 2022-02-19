import { templateProps } from "@Type/.";
import { Container } from "./style";

const ProjectTemplate = ({ index }: templateProps) => {
  const myIndex = 5;
  const zIndex = index === myIndex ? -1 : myIndex;
  return <Container zIndex={zIndex}>a</Container>;
};

export default ProjectTemplate;
