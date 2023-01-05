import { AxiosError } from 'axios';
import styled from 'styled-components';
import { ErrorMessage } from '../../components';
import type { SignUpResponseError } from '../../types';

type ErrorContainerProps = {
  isError: boolean;
  error: AxiosError<SignUpResponseError> | null;
};

export function ErrorMessageContainer({ isError, error }: ErrorContainerProps) {
  return (
    <Container>
      {isError &&
        error?.response?.data?.details?.map((details, index) => (
          <ErrorMessage key={index}>{details}</ErrorMessage>
        ))}
      {error?.response?.status === 409 && (
        <ErrorMessage>Usuário já cadastrado.</ErrorMessage>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;
