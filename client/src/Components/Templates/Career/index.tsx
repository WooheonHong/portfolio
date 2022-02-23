import { PAGE_INFO } from "@Constant/.";
import CareerContent from "@Organisms/CareerContent";
import CareerHeader from "@Organisms/CareerHeader";
import { Container, ContentContainer } from "./style";

const CareerTemplate = ({ pageName }: { pageName: string }) => {
  const { fontColor } = PAGE_INFO[pageName];
  return (
    <Container>
      <CareerHeader index={1} color={fontColor} />
      <ContentContainer>
        {new Array(5).fill(1).map(() => (
          <CareerContent color={fontColor} />
        ))}
      </ContentContainer>
    </Container>
  );
};

export default CareerTemplate;
