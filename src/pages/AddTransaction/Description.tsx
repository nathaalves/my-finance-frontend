import styled from 'styled-components';
import { Input } from '../../components/Input';
import { Text } from '../../components/Text';

type DescriptionProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Description({ value, onChange }: DescriptionProps) {
  return (
    <Container>
      <Text fontSize="xl" bold>
        Descrição
      </Text>
      <Input value={value} onChange={onChange} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
