import { EXPRIENCE_INFOS } from "@Constant/.";
import { DefaultOrangeColor, DefaultGreenColor } from "@Style/.";
import { Container, Title, TitleContainer, TextContainer, Detail, Date, SubTitle } from "./style";

const ExprienceInfos = () => {
  const { title, date, organization, subtitle, detail } = EXPRIENCE_INFOS;

  return (
    <Container>
      <TitleContainer>
        <Title color={DefaultOrangeColor}>{organization}</Title>
        <Date>{date}</Date>
      </TitleContainer>
      <Title color={DefaultGreenColor}>{title}</Title>
      <TextContainer>
        <SubTitle>{subtitle[0]}</SubTitle>
        <SubTitle>{subtitle[1]}</SubTitle>
        <Detail>{detail[0]}</Detail>
        <Detail>{detail[1]}</Detail>
        <Detail>{detail[2]}</Detail>
      </TextContainer>
    </Container>
  );
};

export default ExprienceInfos;
