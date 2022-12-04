import styled from 'styled-components';

type FormeFrameProps = {
  children: React.ReactNode;
  onSubmit: () => void;
};

export function FormFrame({ children, onSubmit: callback }: FormeFrameProps) {
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    callback();
  }

  return <Container onSubmit={submitForm}>{children}</Container>;
}

const Container = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 16px;
`;
