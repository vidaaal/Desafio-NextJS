import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: string;
}

export default function Input({
  placeholder, error, ...rest
}: IInput) {
  return (
    <Container error={error}>
      <input
        placeholder={placeholder}
        {...rest}
      />
      <div className="input-border" />
    </Container>
  );
}
