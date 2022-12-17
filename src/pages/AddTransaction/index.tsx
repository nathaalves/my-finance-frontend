import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Note } from './Note';
import { DatePicker } from './DatePicker';
import { Description } from './Description';
import { Header } from './Header';
import { Value } from './Value';
import { Categories } from './Categories';
import { useAddTransactionMutation } from '../../hooks/mutations/useAddTransactionMutation';

export function AddTransaction() {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState('');

  function inputMask(value: string) {
    value = value.replace(',', '');
    value = value.replaceAll('.', '');

    let amount = Number(value) / 100;

    return {
      numericValue: amount,
      stringifiedValue: Number(amount).toLocaleString('pt-br', {
        minimumFractionDigits: 2,
      }),
    };
  }

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { numericValue, stringifiedValue } = inputMask(e.target.value);

    if (isNaN(numericValue)) return;
    if (numericValue > 999999999.99) return;

    setInputValue(stringifiedValue);
    setValue(numericValue * 100);
  }

  const { mutate } = useAddTransactionMutation({
    value,
    description,
    categoryId,
    date,
    note,
  });

  return (
    <Container>
      <Header />
      <ScrollContainer>
        <Value value={inputValue} onChange={handleInputValue} />
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
        <Description
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <DatePicker value={date} onChange={(date) => setDate(date)} />
        <Note value={note} onChange={(e) => setNote(e.target.value)} />
        <Button onClick={() => mutate()}>Salvar</Button>
      </ScrollContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const ScrollContainer = styled.div`
  overflow-y: scroll;
  padding: 0 16px;
  padding-bottom: 30px;
`;
