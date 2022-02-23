import { PAGE_INFO } from "@Constant/.";
import { Container } from "./style";

const ExprienceTemplate = ({ pageName }: { pageName: string }) => {
  const { fontColor } = PAGE_INFO[pageName];
  console.log(fontColor);
  return <Container>a</Container>;
};

export default ExprienceTemplate;
