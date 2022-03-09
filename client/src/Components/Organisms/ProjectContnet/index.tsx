import { PROJECT_INFOS } from "@Constant/.";
import { useParams } from "react-router-dom";
import ExprienceInfos from "@Organisms/ExprienceInfos";
import ProjectInfos from "@Organisms/ExprienceInfos/proejct";
import { Container } from "./style";

const ProjectContent = () => {
  const { projectId: index } = useParams();

  return <Container>{Number(index) >= PROJECT_INFOS.length ? <ExprienceInfos /> : <ProjectInfos index={Number(index)} />}</Container>;
};

export default ProjectContent;
