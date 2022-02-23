import { CareerInfoType } from "@Type/.";
import { Container, Date, Info, Link } from "./style";

const CareerContent = ({ color, date, info, link = "" }: { color: string } & CareerInfoType) => {
  return (
    <Container>
      <Date color={color}>{date}</Date>
      {link === "" && <Info color={color}>{info}</Info>}
      {link !== "" && (
        <Link href={link}>
          <Info color={color}>{info}</Info>
        </Link>
      )}
    </Container>
  );
};

export default CareerContent;
