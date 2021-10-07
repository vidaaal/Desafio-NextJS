import { ReactNode } from 'react';

import { Container } from './styles';

interface ISelect {
  children: ReactNode;
}

export default function Select({ children }: ISelect) {
  return (
    <Container>
      <select>
        {children}
      </select>
      <div className="input-border" />
    </Container>
  );
}
