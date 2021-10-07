import Link from 'next/link';

import Card from '../Card';
import Header from '../Header';

import { Container, InputSearchContainer, MainContent } from './styles';

export default function Home() {
  return (
    <>
      <Header>
        <h2>Empreendimentos</h2>
        <Link href="/newcard">
          <a className="add-button">
            Adicionar +
          </a>
        </Link>
      </Header>
      <Container>
        <InputSearchContainer>
          <div className="input-container">
            <img src="/images/InputIcon.svg" alt="bussola" />
            <input type="text" placeholder="Buscar" />
          </div>
          <div className="input-border" />
        </InputSearchContainer>

        <MainContent>
          <Card
            title="Villega Vila Velha"
            address="Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha"
          />
        </MainContent>
      </Container>
    </>
  );
}
