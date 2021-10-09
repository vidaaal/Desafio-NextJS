import { ReactNode } from 'react';

import { Container } from './styles';

interface IFormGroup {
  children: ReactNode;
  error?: string;
}

export default function FormGroup({ children, error }: IFormGroup) {
  return (
    <Container>
      {children}

      {error && <small>{error}</small>}
    </Container>
  );
}
