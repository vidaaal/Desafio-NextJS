import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled: boolean;
}

export default function Button({ children, disabled, ...rest }: IButton) {
  return (
    <Container disabled={disabled}>
      <button {...rest}>
        {children}
      </button>
    </Container>
  );
}
