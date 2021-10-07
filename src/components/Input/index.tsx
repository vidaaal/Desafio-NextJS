import { Container } from './styles';

export default function Input() {
  return (
    <Container>
      <input type="text" />
      <div className="input-border" />
    </Container>
  );
}
