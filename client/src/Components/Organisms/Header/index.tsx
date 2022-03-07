import MenuIcon from "@Atoms/Menu";
import { PAGE_INFO } from "@Constant/.";
import { useNavigate } from "react-router-dom";
import { Container, Title, ContentText } from "./style";

const Header = ({ logoText, infoText, pageName = "AboutMe" }: { logoText: string; infoText: string; pageName: string }) => {
  const { fontColor } = PAGE_INFO[pageName];
  const navigator = useNavigate();
  return (
    <Container>
      <Title
        onClick={() => {
          navigator("/AboutMe");
        }}
        color={fontColor}
      >
        {logoText}
      </Title>
      <ContentText color={fontColor}>{infoText}</ContentText>
      <MenuIcon />
    </Container>
  );
};

export default Header;
