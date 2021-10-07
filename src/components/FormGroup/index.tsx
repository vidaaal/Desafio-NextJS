import { ReactNode } from 'react';

import { Container } from './styles';

interface IFormGroup {
  children: ReactNode;
}

export default function FormGroup({ children }: IFormGroup) {
  return (
    <Container>
      {children}
    </Container>
  );
}
