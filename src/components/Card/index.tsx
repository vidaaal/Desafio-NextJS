import { Container } from './styles';

interface ICard {
  name: string;
  address: string;
  type: string;
  state: string
}

export default function Card({
  name, address, type, state,
}: ICard) {
  return (
    <Container>
      <main>
        <div className="address">
          <h3>{name}</h3>
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
          <p>{state}</p>
        </div>
        <div className="tag">
          <p>{type}</p>
        </div>
      </aside>
    </Container>
  );
}
