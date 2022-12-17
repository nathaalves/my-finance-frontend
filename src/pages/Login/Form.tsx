import styled from 'styled-components';
import { FormFrame, Input, Button } from '../../components';
import { useLoginMutation } from '../../hooks/mutations/useLoginMutation';
import { useForm } from '../../hooks/useForm';
import { useToglePassword } from '../../hooks/useTogglePassword';
import { LoginBody } from '../../types';
import { ErrorMessageContainer } from './ErrorMessageContainer';

export function Form() {
  const [passwordState, toglePassword] = useToglePassword();
  const [form, handleForm] = useForm<LoginBody>({
    email: '',
    password: '',
  });

  const { isLoading, isError, mutate } = useLoginMutation(form);

  return (
    <Container>
      <FormFrame onSubmit={mutate}>
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
        <ErrorMessageContainer isError={isError} />
        <Button isActive={!isLoading}>Entrar</Button>
      </FormFrame>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;
