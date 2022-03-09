import Logo from "@Atoms/Logo";
import githubIcon from "@asset/github.png";
import { PROJECT_INFOS } from "@Constant/.";
import { DefaultOrangeColor, DefaultGreenColor } from "@Style/.";
import { Container, Title, TitleContainer, TextContainer, Detail, Date, LogoContainer } from "./style";

const ProjectInfos = ({ index }: { index: number }) => {
  const { title, organization, date, info, link } = PROJECT_INFOS[index - 1];

  return (
    <Container>
      <TitleContainer>
        <Title color={DefaultOrangeColor}>{title}</Title>
        <Date>{date}</Date>
      </TitleContainer>
      <Title color={DefaultGreenColor}>{organization}</Title>
      <TextContainer>
        <Detail>{info}</Detail>
      </TextContainer>
      <LogoContainer>
        <Logo width="100%" src={githubIcon} alt="project link" href={link} radius="30%" backgroundColor="white" />
      </LogoContainer>
    </Container>
  );
};

export default ProjectInfos;
