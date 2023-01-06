import { AxiosError } from 'axios';
import styled from 'styled-components';
import { ErrorMessage } from '../../components';
import type { SchemaResponseError } from '../../types';

type ErrorContainerProps = {
  isError: boolean;
  error: AxiosError<SchemaResponseError> | null;
};

export function ErrorMessageContainer({ isError, error }: ErrorContainerProps) {
  return (
    <Container>
      {isError &&
        error?.response?.data?.details?.map((details, index) => (
          <ErrorMessage key={index}>{details}</ErrorMessage>
        ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;
