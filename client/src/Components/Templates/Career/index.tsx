import { PAGE_INFO, CAREER_INFOS } from "@Constant/.";
import CareerContent from "@Organisms/CareerContent";
import ContenHeader from "@Organisms/ContentHeader";
import { useScroll } from "@Hook/.";
import { Container, ContentContainer } from "./style";

const CareerTemplate = ({ pageName }: { pageName: string }) => {
  const { fontColor } = PAGE_INFO[pageName];
  useScroll({ beforePage: "SkillSet", afterPage: "Project" });
  return (
    <Container>
      <ContenHeader title="Career" index={-1} color={fontColor} />
      <ContentContainer>
        {CAREER_INFOS.map(({ date, info, link }) => (
          <CareerContent color={fontColor} date={date} info={info} link={link} />
        ))}
      </ContentContainer>
    </Container>
  );
};

export default CareerTemplate;
