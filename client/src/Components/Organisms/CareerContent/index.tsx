import { Container, Date, Title, Info } from "./style";

const CareerContent = ({ color }: { color: string }) => {
  return (
    <Container>
      <Date color={color}>2021.01</Date>
      <Title color={color}>홍우헌</Title>
      <Info color={color}>대구광역시 달서구 용산서로 37대구광역시 달서구 용산서로 37대구광역시 달서구 용산서로 37대구광역시 달서구 용산서로 37</Info>
    </Container>
  );
};

export default CareerContent;
