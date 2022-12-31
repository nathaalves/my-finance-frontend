import styled from 'styled-components';
import { MdExitToApp } from 'react-icons/md';
import { Text } from './Text';
import { useLogoutMutation } from '../hooks/mutations/useLogoutMutation';

export function SideMenuButton() {
  const { mutate } = useLogoutMutation();

  return (
    <Container onClick={() => mutate()}>
      <ExitIcon />
      <Text>Sair</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
  padding: 0 5%;
  gap: 16px;
  overflow-x: hidden;

  background-color: transparent;
  transition: background-color 200ms ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: rgba(204, 204, 204, 0.204);
  }
`;

const ExitIcon = styled(MdExitToApp)`
  font-size: 30px;
  color: #ba1111;
`;
