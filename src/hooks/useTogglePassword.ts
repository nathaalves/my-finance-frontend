import { useState } from 'react';

type PasswordState = {
  type: string;
  icon: string;
};

export function useToglePassword(): [PasswordState, () => void] {
  const [passwordState, setPasswordState] = useState<PasswordState>({
    type: 'password',
    icon: 'MdLock',
  });

  function toglePassword() {
    if (passwordState.type === 'password')
      setPasswordState({
        type: 'text',
        icon: 'MdLockOpen',
      });
    if (passwordState.type === 'text')
      setPasswordState({
        type: 'password',
        icon: 'MdLock',
      });
  }

  return [passwordState, toglePassword];
}
