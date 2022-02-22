import MenuIcon from "@Atoms/Menu";
import { Container, Title, Text } from "./style";

const Header = ({ logoText, infoText }: { logoText: string; infoText: string }) => {
  return (
    <Container>
      <Title>{logoText}</Title>
      <Text>{infoText}</Text>
      <MenuIcon />
    </Container>
  );
};

export default Header;
