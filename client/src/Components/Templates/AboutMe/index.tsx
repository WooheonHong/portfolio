import { HeadText, Text } from "@Atoms/Text";
import { GithubLink, IntroductionMessage, LinkedInLink, PAGE_INFO } from "@Constant/.";
import githubLogo from "@asset/github.png";
import linkedInLogo from "@asset/linkedIn.png";
import Logo from "@Atoms/Logo";
import { useScroll } from "@Hook/.";
import { Container, TextContainer, LogoContainer } from "./style";

const AboutMeTemplate = ({ pageName }: { pageName: string }) => {
  const { fontColor } = PAGE_INFO[pageName];
  useScroll({ afterPage: "SkillSet" });
  return (
    <Container>
      <TextContainer>
        <Text color={fontColor}>{IntroductionMessage[3]}</Text>
        <HeadText color={fontColor}>{IntroductionMessage[0]}</HeadText>
        <HeadText color={fontColor}>{IntroductionMessage[1]}</HeadText>
        <HeadText color={fontColor}>{IntroductionMessage[2]}</HeadText>
      </TextContainer>
      <LogoContainer>
        <Logo src={githubLogo} alt="githubLogo" width="40%" href={GithubLink} />
        <Logo src={linkedInLogo} alt="linkedInLogo" width="40%" href={LinkedInLink} />
      </LogoContainer>
    </Container>
  );
};

export default AboutMeTemplate;
