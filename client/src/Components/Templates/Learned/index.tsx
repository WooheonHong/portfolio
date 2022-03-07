import { Image } from "@Atoms/Image";
import { BOOK_LIST, PAGE_INFO, STUDIED_IFNO } from "@Constant/.";
import ContentHeader from "@Organisms/ContentHeader";
import { useScroll } from "@Hook/.";
import { BooksContainer, Container, ContentContainer, LinkContainer, Link } from "./style";

const LearnedTemplate = ({ pageName }: { pageName: string }) => {
  const { fontColor } = PAGE_INFO[pageName];
  useScroll({ beforePage: "Exprience" });
  return (
    <Container>
      <ContentHeader color={fontColor} title="Studied" index={-1} />
      <ContentContainer>
        <BooksContainer>
          {BOOK_LIST.map((Book) => (
            <Image src={Book} alt="book image" width="29%" radius="5%" margin="2vh" />
          ))}
        </BooksContainer>
        <LinkContainer>
          {STUDIED_IFNO.map(({ title, link }) => (
            <Link href={link}>{title}</Link>
          ))}
        </LinkContainer>
      </ContentContainer>
    </Container>
  );
};

export default LearnedTemplate;
