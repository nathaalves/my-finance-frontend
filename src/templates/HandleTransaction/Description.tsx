import styled from 'styled-components';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';

type DescriptionProps = {
  value: string;
  handleForm: (key: string, value: string) => void;
};

export function Description({ value, handleForm }: DescriptionProps) {
  return (
    <Container>
      <Text fontSize="xl" bold>
        Descrição
      </Text>
      <Input
        value={value}
        onChange={(e) => handleForm('description', e.target.value)}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
