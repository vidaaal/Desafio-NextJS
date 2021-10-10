import { ReactNode, SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;

}

export default function Select({ children, ...rest }: ISelect) {
  return (
    <Container>
      <select {...rest}>
        {children}
      </select>
      <div className="input-border" />
    </Container>
  );
}
