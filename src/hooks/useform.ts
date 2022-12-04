import { useState } from 'react';

type Target = {
  name: string;
  value: string;
};

export function useForm<T>(
  initialState: T
): [T, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [form, setForm] = useState<T>(initialState);

  function handleForm({ target: { name, value } }: { target: Target }): void {
    setForm({
      ...form,
      [name]: value,
    });
  }

  return [form, handleForm];
}
