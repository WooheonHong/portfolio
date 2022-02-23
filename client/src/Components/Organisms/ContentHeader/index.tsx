import { BasicTitleText } from "@Atoms/Text";
import { IndexAction } from "@Hook/.";
import { Button, Container, Text, TextContainer } from "./style";

// eslint-disable-next-line react/require-default-props
const ContenHeader = ({ title, index, color, setIndex = () => {} }: { title: string; index: number; color: string; setIndex?: React.Dispatch<IndexAction> }) => {
  const handleDecrement = () => setIndex({ type: "DECREMENT" });
  const handleIncrement = () => setIndex({ type: "INCREMENT" });

  return (
    <Container>
      <BasicTitleText color={color}>{title}</BasicTitleText>
      {index !== -1 && (
        <TextContainer>
          <Button onClick={handleDecrement}>⟵</Button>
          <Text>{` ${index + 1}/4 `}</Text>
          <Button onClick={handleIncrement}>⟶</Button>
        </TextContainer>
      )}
    </Container>
  );
};

export default ContenHeader;
