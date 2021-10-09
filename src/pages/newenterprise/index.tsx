import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';

import EnterprisesForm from '../../components/EnterprisesForm';
import Header from '../../components/Header';
import Success from '../../components/Success';
import { api } from '../../services/api';

import { Container, Wrapper } from './styles';

interface IHandleSubmit {
  e: FormEvent<HTMLFormElement>;
  condition: string;
  name: string;
  type: string;
  address: string;
}

export default function newCard() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  async function handleSubmit({
    e, condition,
    name,
    type,
    address,
  }: IHandleSubmit) {
    e.preventDefault();

    const data = {
      condition,
      name,
      type,
      address,
    };

    console.log(data);

    try {
      await api.post('/posts', data);
      setIsLoading(true);
    } catch (err: any) {
      console.log(err.response);
    }
  }

  return (
    <Container>
      {isLoading && <Success />}

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
      <Wrapper>
        <EnterprisesForm onSubmit={handleSubmit} />
      </Wrapper>
    </Container>
  );
}
