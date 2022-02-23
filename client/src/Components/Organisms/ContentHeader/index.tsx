import { BasicTitleText } from "@Atoms/Text";
import { Button, Container, Text, TextContainer } from "./style";

const ContenHeader = ({ title, index, color }: { title: string; index: number; color: string }) => {
  return (
    <Container>
      <BasicTitleText color={color}>{title}</BasicTitleText>
      {index !== 0 && (
        <TextContainer>
          <Button>⟵</Button>
          <Text>{` ${index}/3 `}</Text>
          <Button>⟶</Button>
        </TextContainer>
      )}
    </Container>
  );
};

export default ContenHeader;
