import Link from 'next/link';

import EnterprisesForm from '../../components/EnterprisesForm';
import Header from '../../components/Header';

import { Container } from './styles';

export default function newCard() {
  return (
    <>
      <Header>
        <main>
          <Link href="/">
            <a>
              <img src="/images/ArrowIcon.svg" alt="" />
              <h2>Cadastro de empreendimento</h2>
            </a>

          </Link>

        </main>
        <div />
      </Header>
      <Container>
        <EnterprisesForm />
      </Container>
    </>
  );
}
