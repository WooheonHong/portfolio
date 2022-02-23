import { SkillTitleText, SkillText } from "@Atoms/Text/";
import { Container } from "./style";

const TitleText = ({ title, text, color }: { title: string; text: string; color: string }) => {
  return (
    <Container>
      <SkillTitleText color={color}>{title}</SkillTitleText>
      <SkillText color={color}>{text}</SkillText>
    </Container>
  );
};

export default TitleText;
