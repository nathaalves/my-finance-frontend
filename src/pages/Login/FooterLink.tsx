import styled from 'styled-components';
import { Text, Link } from '../../components';

export function FooterLink() {
  return (
    <LinkContainer>
      <Text>Ainda não possui uma conta?</Text>
      <Link to="/registration">Registre-se</Link>
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
  padding-bottom: 40px;
`;
