import { useState } from 'react';
import styled from 'styled-components';
import { Text } from '../../components/Text';

type ValueProps = {
  value: number;
  handleForm: (key: string, value: number) => void;
};

export function Value({ value, handleForm }: ValueProps) {
  const [inputValue, setInputValue] = useState(
    value === 0
      ? ''
      : (value / 100).toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        })
  );

  function inputMask(value: string) {
    value = value.replace(',', '');
    value = value.replaceAll('.', '');

    let amount = Number(value) / 100;

    return {
      numericValue: amount,
      stringifiedValue: amount.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
      }),
    };
  }

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { numericValue, stringifiedValue } = inputMask(e.target.value);

    if (isNaN(numericValue)) return;
    if (numericValue > 999999999.99) return;

    setInputValue(stringifiedValue);
    handleForm('value', numericValue * 100);
  }

  return (
    <InputContainer>
      <Text fontSize="3xl" bold>
        R$
      </Text>
      <ValueInput value={inputValue} onChange={handleInputValue} />
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
