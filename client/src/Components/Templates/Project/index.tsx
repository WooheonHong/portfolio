import { useScroll } from "@Hook/.";
import ContentHeader from "@Organisms/ContentHeader";
import { ContentContainer } from "@Templates/Career/style";
import { PAGE_INFO } from "@Constant/.";
import { Outlet, useParams } from "react-router-dom";
import { getProjectBeforeAfter } from "@Util/.";
import { Container } from "./style";

const ProjectTemplate = ({ pageName }: { pageName: string }) => {
  const { fontColor } = PAGE_INFO[pageName];
  const { projectId: index } = useParams();
  const [beforePage, afterPage] = getProjectBeforeAfter(Number(index));

  useScroll({ beforePage, afterPage });

  return (
    <Container>
      <ContentContainer>
        <ContentHeader color={fontColor} title="Project & Exprience" index={-1} />
        <Outlet />
      </ContentContainer>
    </Container>
  );
};

export default ProjectTemplate;
