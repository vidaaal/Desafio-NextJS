import Link from 'next/link';
import {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import { api } from '../../services/api';

import Header from '../Header';
import Loader from '../Loader';

import {
  Container, Wrapper, InputSearchContainer, MainContent, Card,
} from './styles';

interface IEnterpriseInfo {
  id: string;
  name: string;
  address: string;
  type: string;
  condition: string;
}

export default function Home() {
  const [enterprises, setEnterprises] = useState<IEnterpriseInfo[]>();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const filteredEnterprises = useMemo(() => enterprises?.filter((enterprise) => (
    enterprise?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )), [enterprises, searchTerm]);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const { data } = await api('/posts');
        setEnterprises(data);
      } catch {
        return;
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function handleChangeSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  async function handleRemoveEnterprise(id: string) {
    try {
      if (window.confirm('Tem certeza?')) {
        setIsLoading(true);
        await api.delete(`/posts/${id}`);

        const { data } = await api('/posts');
        setEnterprises(data);
      }
    } catch {
      return;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      {isLoading && <Loader />}

      <Header>
        <h2>Empreendimentos</h2>
        <Link href="/new">
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
            <Card key={enterprise.id}>
              <main>
                <div className="address">
                  <h3>{enterprise.name}</h3>
                  <div className="actions">
                    <Link href={`/edit/${enterprise.id}`}>
                      <a>
                        <img src="/images/EditIcon.svg" alt="Ícone de Edição" />
                      </a>
                    </Link>
                    <button type="button" onClick={() => handleRemoveEnterprise(enterprise.id)}>
                      <img src="/images/DeleteIcon.svg" alt="Ícone de Lixeira" />
                    </button>
                  </div>
                </div>
                <p>{enterprise.address}</p>
              </main>
              <aside>
                <div className="tag">
                  <p>{enterprise.condition}</p>
                </div>
                <div className="tag">
                  <p>{enterprise.type}</p>
                </div>
              </aside>
            </Card>
          ))}
        </MainContent>
      </Wrapper>
    </Container>
  );
}
