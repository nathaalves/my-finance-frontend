import styled from 'styled-components';

type ConfirmModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

export function ConfirmModal({ onCancel, onConfirm }: ConfirmModalProps) {
  return (
    <Container onClick={onCancel}>
      <MessageBox onClick={(e) => e.stopPropagation()}>
        <Header>Confirmação</Header>
        <Message>Realmente deseja excluir esta transação?</Message>
        <ButtonContainer>
          <TextButton onClick={onCancel}>Cancelar</TextButton>
          <TextButton onClick={onConfirm} confirm>
            Confirmar
          </TextButton>
        </ButtonContainer>
      </MessageBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  animation: modal 300ms ease forwards;

  @keyframes modal {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 10px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 70px;
  padding-left: 16px;
  background: linear-gradient(
    315deg,
    ${({ theme }) => theme.color.secondary},
    ${({ theme }) => theme.color.primary}
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0 0;

  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-size: ${({ theme }) => theme.text.size['2xl']};
  font-weight: 500;
  color: #ffffff;
`;

const Message = styled.div`
  margin: 16px;
  font-family: ${({ theme }) => theme.text.fontFamily.base};
  font-size: ${({ theme }) => theme.text.size.base};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px;
`;

type ButtonProps = {
  confirm?: boolean | undefined;
};

const TextButton = styled.button<ButtonProps>`
  background-color: #ffffff;
  border: 2px solid;
  border-radius: 8px;
  padding: 0.75rem;

  font-family: ${({ theme }) => theme.text.fontFamily};
  font-size: ${({ theme }) => theme.text.size.base};
  font-weight: 600;
  color: ${({ theme, confirm }) => (confirm ? 'red' : theme.color.primary)};
  cursor: pointer;

  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: #a29aff22;
  }
`;
