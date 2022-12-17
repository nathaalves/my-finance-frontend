import styled from 'styled-components';
import { Text } from '../../components/Text';

type ValueProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Value({ value, onChange }: ValueProps) {
  return (
    <InputContainer>
      <Text fontSize="3xl" bold>
        R$
      </Text>
      <ValueInput value={value} onChange={onChange} />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  width: 70%;
  padding-bottom: 4px;
  margin: 20px auto 0 auto;
  border-bottom: 4px solid ${({ theme }) => theme.color.primary};
`;

const ValueInput = styled.input`
  all: unset;

  width: calc(100% - 50px);
  padding-left: 12px;

  text-align: right;
  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-size: ${({ theme }) => theme.text.size['3xl']};
  line-height: ${({ theme }) => theme.text.lineHeight['3xl']};
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
`;
