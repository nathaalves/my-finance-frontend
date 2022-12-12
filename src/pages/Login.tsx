import styled from 'styled-components';
import { Input } from '../components/Input';
import { FormFrame } from '../components/FormFrame';
import { useForm } from '../hooks/useForm';
import { useToglePassword } from '../hooks/useTogglePassword';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { useRequest } from '../hooks/useRequest';
import { ErrorMessage } from '../components/ErrorMessage';
import { Navigate } from 'react-router-dom';

type FormValues = {
  email: string;
  password: string;
};

export function Login() {
  const [form, handleForm] = useForm<FormValues>({
    email: '',
    password: '',
  });
  const [passwordState, toglePassword] = useToglePassword();

  const { request, response, error, isLoading } = useRequest(
    {
      url: '/auth/signin',
      method: 'post',
      data: form,
    },
    true
  );

  if (response) {
    localStorage.setItem('tokens', JSON.stringify(response));
  }

  return (
    <>
      {!response ? (
        <Container>
          <LogoContainer>
            <Logo>MyFinance</Logo>
          </LogoContainer>
          <FormContainer>
            <FormFrame onSubmit={request}>
              <Input
                label="E-mail"
                type="text"
                name="email"
                icon="MdEmail"
                value={form.email}
                disabled={isLoading}
                onChange={handleForm}
              />
              <Input
                label="Senha"
                type={passwordState.type}
                name="password"
                icon={passwordState.icon}
                value={form.password}
                disabled={isLoading}
                onChange={handleForm}
                onIconClick={toglePassword}
              />
              <ErrorMessageContainer>
                {error && <ErrorMessage>E-mail ou senha inválido</ErrorMessage>}
              </ErrorMessageContainer>
              <Button isActive={!isLoading}>Entrar</Button>
            </FormFrame>
          </FormContainer>
          <LinkContainer>
            <Text>Ainda não possui uma conta?</Text>
            <Link to="/registration">Registre-se</Link>
          </LinkContainer>
        </Container>
      ) : (
        <Navigate to="/" />
      )}
    </>
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

const FormContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
  padding-bottom: 40px;
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;
