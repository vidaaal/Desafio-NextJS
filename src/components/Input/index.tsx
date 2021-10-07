import { Container } from './styles';

interface IInput {
  placeholder: string;
}

export default function Input({ placeholder }: IInput) {
  return (
    <Container>
      <input type="text" placeholder={placeholder} />
      <div className="input-border" />
    </Container>
  );
}
