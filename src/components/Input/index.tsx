import {
  InputHTMLAttributes, useEffect, useRef, WheelEvent,
} from 'react';
import { Container } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: string;
  type?: string;
}

export default function Input({
  placeholder, error, type, ...rest
}: IInput) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (type === 'number') {
      inputRef.current?.addEventListener('mousewheel', () => {
        inputRef.current?.blur();
      });
    }
  }, []);

  return (
    <Container error={error}>
      <input
        placeholder={placeholder}
        {...rest}
        ref={inputRef}
        type={type}
      />
      <div className="input-border" />
    </Container>
  );
}
