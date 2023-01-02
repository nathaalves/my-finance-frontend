import styled from 'styled-components';
import { Button } from '../../components/Button';
import { Note } from './Note';
import { DatePicker } from './DatePicker';
import { Description } from './Description';
import { Header } from './Header';
import { Value } from './Value';
import { Categories } from './Categories';
import { TransactionBody } from '../../types';
import { FormFrame } from '../../components';

type HandleTransactionProps = {
  form: TransactionBody;
  setForm: React.Dispatch<React.SetStateAction<TransactionBody>>;
  mutate: () => void;
};

export function HandleTransaction({
  form,
  setForm,
  mutate,
}: HandleTransactionProps) {
  function handleForm(key: string, value: any) {
    setForm((previous) => {
      return {
        ...previous,
        [key]: value,
      };
    });
  }

  return (
    <Container>
      <Header />
      <ScrollContainer>
        <FormFrame onSubmit={mutate}>
          <Value value={form.value} handleForm={handleForm} />
          <Categories categoryId={form.categoryId} handleForm={handleForm} />
          <Description value={form.description} handleForm={handleForm} />
          <DatePicker value={form.date} handleForm={handleForm} />
          <Note value={form.note} handleForm={handleForm} />
          <Button>Salvar</Button>
        </FormFrame>
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
