import styled from 'styled-components';
import { Text } from '../../components/Text';

type NoteProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function Note({ value, onChange }: NoteProps) {
  return (
    <Container>
      <Text fontSize="xl" bold>
        Nota
      </Text>
      <TextArea value={value} onChange={onChange} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
`;

const TextArea = styled.textarea`
  all: unset;
  width: 100%;
  height: 100px;
  padding: 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.input.active};
  box-sizing: border-box;

  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-size: ${({ theme }) => theme.text.size.lg};
  word-wrap: break-word;

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.primary};
  }
`;
