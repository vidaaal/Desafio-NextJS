import { ReactNode, SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  error?: boolean;
}

export default function Select({ children, error, ...rest }: ISelect) {
  return (
    <Container error={error}>
      <select {...rest}>
        {children}
      </select>
      <div className="input-border" />
    </Container>
  );
}
