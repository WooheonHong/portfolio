import { PAGE_INFO } from "@Constant/.";
import { useScroll } from "@Hook/.";
import ContenHeader from "@Organisms/ContentHeader";
import ExprienceInfos from "@Organisms/ExprienceInfos";
import ExprienceLogos from "@Organisms/ExprienceLogos";
import { Container } from "./style";

const ExprienceTemplate = ({ pageName }: { pageName: string }) => {
  const { fontColor } = PAGE_INFO[pageName];
  useScroll({ beforePage: "Project", afterPage: "Learned" });

  return (
    <Container>
      <ContenHeader title="Work Exprience" index={-1} color={fontColor} />
      <ExprienceLogos />
      <ExprienceInfos />
    </Container>
  );
};

export default ExprienceTemplate;
