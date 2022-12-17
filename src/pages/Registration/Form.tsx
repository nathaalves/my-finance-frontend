import styled from 'styled-components';
import { FormFrame, Input, Button } from '../../components';
import { useRegistrationMutation } from '../../hooks/mutations/useRegistrationMutation';
import { useForm } from '../../hooks/useForm';
import { useToglePassword } from '../../hooks/useTogglePassword';
import { ErrorMessageContainer } from './ErrorMessageContainer';

export function Form() {
  const [passwordState, toglePassword] = useToglePassword();
  const [confirmPasswordState, togleConfirmPassword] = useToglePassword();
  const [form, handleForm] = useForm({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const { isLoading, isError, error, mutate } = useRegistrationMutation(form);

  return (
    <Container>
      <FormFrame onSubmit={mutate}>
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
        <ErrorMessageContainer isError={isError} error={error} />
        <Button isActive={!isLoading}>Registre-se</Button>
      </FormFrame>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;
