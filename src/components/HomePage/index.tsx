import Link from 'next/link';
import {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import { api } from '../../services/api';

import Card from '../Card';
import Header from '../Header';
import Loader from '../Loader';

import {
  Container, Wrapper, InputSearchContainer, MainContent,
} from './styles';

interface IEnterpriseInfo {
  id: string;
  name: string;
  address: string;
  type: string;
  state: string;
}

export default function Home() {
  const [enterprises, setEnterprises] = useState<IEnterpriseInfo[]>();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const filteredEnterprises = useMemo(() => enterprises?.filter((enterprise) => {
    enterprise.name.toLocaleLowerCase().includes(searchTerm.toLowerCase());
  }), []);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const { data } = await api('/posts');
        setEnterprises(data);
      } catch (err: any) {
        console.log(err.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function handleChangeSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Header>
        <h2>Empreendimentos</h2>
        <Link href="/newenterprise">
          <a className="add-button">
            Adicionar +
          </a>
        </Link>
      </Header>
      <Wrapper>
        <InputSearchContainer>
          <div className="input-container">
            <img src="/images/InputIcon.svg" alt="bussola" />
            <input
              type="text"
              placeholder="Buscar"
              onChange={handleChangeSearchTerm}
            />
          </div>
          <div className="input-border" />
        </InputSearchContainer>

        <MainContent>
          {filteredEnterprises?.map((enterprise) => (
            <Card
              key={enterprise.id}
              name={enterprise.name}
              address={enterprise.address}
              state={enterprise.state}
              type={enterprise.type}
            />
          ))}
        </MainContent>
      </Wrapper>
    </Container>
  );
}
