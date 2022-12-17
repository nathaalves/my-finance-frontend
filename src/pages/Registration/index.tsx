import styled from 'styled-components';
import { Logo } from '../../components';
import { FooterLink } from './FooterLink';
import { Form } from './Form';

export function Registration() {
  return (
    <Container>
      <LogoContainer>
        <Logo>MyFinance</Logo>
      </LogoContainer>
      <Form />
      <FooterLink />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 0 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 80px;
  margin-bottom: 24px;
`;
