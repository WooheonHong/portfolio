import { IdxReducer, useScroll } from "@Hook/.";
import ContentHeader from "@Organisms/ContentHeader";
import { ContentContainer } from "@Templates/Career/style";
import { useReducer } from "react";
import { PAGE_INFO } from "@Constant/.";
import { Outlet } from "react-router-dom";
import { Container } from "./style";

const ProjectTemplate = ({ pageName }: { pageName: string }) => {
  const [index, setIndex] = useReducer(IdxReducer, 0);
  const { fontColor } = PAGE_INFO[pageName];
  useScroll({ beforePage: "Career", afterPage: "Learned" });

  return (
    <Container>
      <ContentContainer>
        <ContentHeader color={fontColor} title="Project" index={index} setIndex={setIndex} />
        <Outlet />
      </ContentContainer>
    </Container>
  );
};

export default ProjectTemplate;
