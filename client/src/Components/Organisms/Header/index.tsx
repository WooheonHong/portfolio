import MenuIcon from "@Atoms/Menu";
import { PAGE_INFO } from "@Constant/.";
import { Container, Title, ContentText } from "./style";

const Header = ({ logoText, infoText, pageName }: { logoText: string; infoText: string; pageName: string }) => {
  const { fontColor } = PAGE_INFO[pageName];

  return (
    <Container>
      <Title color={fontColor}>{logoText}</Title>
      <ContentText color={fontColor}>{infoText}</ContentText>
      <MenuIcon />
    </Container>
  );
};

export default Header;
