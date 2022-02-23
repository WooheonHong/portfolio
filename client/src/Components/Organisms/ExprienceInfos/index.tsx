import { EXPRIENCE_INFOS } from "@Constant/.";
import { DefaultOrangeColor, DefaultGreenColor } from "@Style/.";
import { Arrow, Container, Title, TitleContainer, TextContainer, Detail, Date, SubTitle } from "./style";

const ExprienceInfos = ({ onClick }: { onClick: () => void }) => {
  const { title, date, organization, subtitle, detail } = EXPRIENCE_INFOS;
  console.log(organization, subtitle, detail);

  return (
    <Container>
      <TitleContainer>
        <Title color={DefaultOrangeColor}>{organization}</Title>
        <Date>{date}</Date>
      </TitleContainer>
      <Title color={DefaultGreenColor}>{title}</Title>
      <Arrow onClick={onClick}>{"<"}</Arrow>
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
