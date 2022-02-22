import { Container, Title, Text } from "./style";

const Header = ({ logoText, infoText }: { logoText: string; infoText: string }) => {
  return (
    <Container>
      <Title>{logoText}</Title>
      <Text>{infoText}</Text>
      <>
    </Container>
  );
};

export default Header;
