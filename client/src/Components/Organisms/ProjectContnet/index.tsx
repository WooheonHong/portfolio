import { BasicTitleText } from "@Atoms/Text";
import { PROJECT_INFOS } from "@Constant/.";
import githubIcon from "@asset/github.png";
import Logo from "@Atoms/Logo";
import { useParams } from "react-router-dom";
import { Container, TitleContianer, Date, Info, Organization } from "./style";

const ProjectContent = () => {
  const { projectId: index } = useParams();
  const temp = useParams();
  console.log(temp);
  console.log(index);
  const { title, date, organization, info, link } = PROJECT_INFOS[Number(index)];
  console.log(title, date, organization);
  return (
    <Container>
      <TitleContianer>
        <BasicTitleText color="#FFFFFF">{title}</BasicTitleText>
        <Organization>{organization}</Organization>
      </TitleContianer>
      <Date>{date}</Date>
      <Info>{info}</Info>
      <Logo width="8%" src={githubIcon} alt="project link" href={link} radius="30%" backgroundColor="white" />
    </Container>
  );
};

export default ProjectContent;
