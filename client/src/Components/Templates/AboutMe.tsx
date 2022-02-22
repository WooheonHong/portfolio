import { templateProps } from "@Type/.";
import { Container } from "./style";

const AboutMeTemplate = ({ index }: templateProps) => {
  const myIndex = 0;
  const zIndex = index === myIndex ? -1 : myIndex;
  return <Container zIndex={zIndex}>about</Container>;
};

export default AboutMeTemplate;
