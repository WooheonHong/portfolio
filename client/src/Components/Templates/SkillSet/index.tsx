import Icon from "@Atoms/Icon";
import { BasicTitleText, Title } from "@Atoms/Text";
import { HelloMessage, PAGE_INFO, SkillSetIcons, SkillSetInfo } from "@Constant/.";
import { useScroll } from "@Hook/.";
import TitleText from "@Organisms/TitleText";
import { Container, SkillSetContainer, SkillIconContainer } from "./style";

const SkillSetTemplate = ({ pageName }: { pageName: string }) => {
  const { fontColor } = PAGE_INFO[pageName];
  useScroll({ beforePage: "AboutMe", afterPage: "Career" });
  return (
    <Container>
      <Title color={fontColor}>{HelloMessage}</Title>
      <SkillSetContainer>
        {SkillSetInfo.map(({ text, title }) => (
          <TitleText text={text} title={title} color={fontColor} />
        ))}
      </SkillSetContainer>
      <SkillIconContainer>
        <BasicTitleText color={fontColor}>프로그래밍 언어</BasicTitleText>
        {SkillSetIcons.map((src: string) => (
          <Icon src={src} alt="1" />
        ))}
      </SkillIconContainer>
    </Container>
  );
};

export default SkillSetTemplate;
