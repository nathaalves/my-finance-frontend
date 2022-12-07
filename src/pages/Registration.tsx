import styled from 'styled-components';
import { Input } from '../components/Input';
import { FormFrame } from '../components/FormFrame';
import { useForm } from '../hooks/useForm';
import { useToglePassword } from '../hooks/useTogglePassword';
import { Button } from '../components/Button';
import { Link } from '../components/Link';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { useRequest } from '../hooks/useRequest';
import { ErrorMessage } from '../components/ErrorMessage';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export function Registration() {
  const [form, handleForm] = useForm<FormValues>({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [passwordState, toglePassword] = useToglePassword();
  const [confirmPasswordState, togleConfirmPassword] = useToglePassword();
  const navigate = useNavigate();

  const { request, response, error, isLoading } = useRequest(
    {
      url: '/auth/signup',
      method: 'post',
      data: form,
    },
    true
  );

  if (response) {
    navigate('/login');
  }

  return (
    <Container>
      <LogoContainer>
        <Logo>MyFinance</Logo>
      </LogoContainer>
      <FormContainer>
        <FormFrame onSubmit={request}>
          <Input
            label="Nome"
            type="text"
            name="name"
            icon="MdPerson"
            value={form.name}
            disabled={isLoading}
            onChange={handleForm}
          />
          <Input
            label="E-mail"
            type="email"
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
          <Input
            label="Confirmar senha"
            type={confirmPasswordState.type}
            name="confirm_password"
            icon={confirmPasswordState.icon}
            value={form.confirm_password}
            disabled={isLoading}
            onChange={handleForm}
            onIconClick={togleConfirmPassword}
          />
          <ErrorMessageContainer>
            {error?.data.details &&
              error?.data.details.map((details) => (
                <ErrorMessage>{details}</ErrorMessage>
              ))}
            {error?.status === 409 && (
              <ErrorMessage>Usuário já cadastrado.</ErrorMessage>
            )}
          </ErrorMessageContainer>
          <Button isActive={!isLoading}>Registre-se</Button>
        </FormFrame>
      </FormContainer>
      <LinkContainer>
        <Text>Já possui uma conta?</Text>
        <Link to="/login">Faça login</Link>
      </LinkContainer>
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
