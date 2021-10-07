import { Container } from './styles';

interface ICard {
  title: string;
  address: string;
}

export default function Card({ title, address }: ICard) {
  return (
    <Container>
      <main>
        <div className="address">
          <h3>{title}</h3>
          <div className="actions">
            <button type="button">
              <img src="/images/EditIcon.svg" alt="Ícone de Edição" />
            </button>
            <button type="button">
              <img src="/images/DeleteIcon.svg" alt="Ícone de Lixeira" />
            </button>
          </div>
        </div>
        <p>{address}</p>
      </main>
      <aside>
        <div className="tag">
          <p>Lançamento</p>
        </div>
        <div className="tag">
          <p>Residencial</p>
        </div>
      </aside>
    </Container>
  );
}
