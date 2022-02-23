import { PAGE_INFO } from "@Constant/.";
import ContenHeader from "@Organisms/ContentHeader";
import ExprienceInfos from "@Organisms/ExprienceInfos";
import ExprienceLogos from "@Organisms/ExprienceLogos";
import { useState } from "react";
import { Container } from "./style";

const ExprienceTemplate = ({ pageName }: { pageName: string }) => {
  const { fontColor } = PAGE_INFO[pageName];
  const [index, setIndex] = useState(0);

  const handleIncrease = () => setIndex(1);
  const handleDecrease = () => setIndex(0);

  return (
    <Container>
      <ContenHeader title="Work Exprience" index={-1} color={fontColor} />
      {index === 0 && <ExprienceLogos onClick={handleIncrease} />}
      {index === 1 && <ExprienceInfos onClick={handleDecrease} />}
    </Container>
  );
};

export default ExprienceTemplate;
