import { BasicTitleText, SkillText } from "@Atoms/Text/";
import { Container } from "./style";

const TitleText = ({ title, text, color }: { title: string; text: string; color: string }) => {
  return (
    <Container>
      <BasicTitleText color={color}>{title}</BasicTitleText>
      <SkillText color={color}>{text}</SkillText>
    </Container>
  );
};

export default TitleText;
