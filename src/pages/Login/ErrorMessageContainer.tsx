import styled from 'styled-components';
import { ErrorMessage } from '../../components';

export function ErrorMessageContainer({ isError }: { isError: boolean }) {
  return (
    <Container>
      {isError && <ErrorMessage>E-mail ou senha inválido</ErrorMessage>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;
