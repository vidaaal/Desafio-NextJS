import { GetServerSideProps, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import EnterprisesForm from '../../components/EnterprisesForm';
import Header from '../../components/Header';

import { Container } from './styles';

export default function editEnterprise() {
  const { query } = useRouter();

  function handleEditSubmit() {
    console.log('a');
  }

  return (
    <>
      <Header>
        <main>
          <Link href="/">
            <a>
              <img src="/images/ArrowIcon.svg" alt="" />
              <h2>Editar empreendimento</h2>
              {query.id}
            </a>

          </Link>

        </main>
        <div />
      </Header>
      <Container>
        <EnterprisesForm onSubmit={handleEditSubmit} />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = () => {

};
