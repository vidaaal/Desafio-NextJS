import Link from 'next/link';
import {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import { api } from '../services/api';

import Header from '../components/Header';
import Loader from '../components/Loader';

import {
  Container, Wrapper, InputSearchContainer, MainContent, Card,
} from '../styles/pages/Home';
import ConfirmModal from '../components/ConfirmModal';
import Button from '../components/Button';

interface IEnterpriseInfo {
  id: string;
  name: string;
  address: string;
  type: string;
  condition: string;
}

export default function Home() {
  const [enterprises, setEnterprises] = useState<IEnterpriseInfo[]>();
  const [numOfItems, setNumOfItems] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  const filteredEnterprises = useMemo(() => enterprises?.filter((enterprise) => (
    enterprise?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )), [enterprises, searchTerm]);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const { data } = await api(`/posts?_limit=${numOfItems}`);
        setEnterprises(data);
      } catch {
        return;
      } finally {
        setIsLoading(false);
      }
    })();
  }, [numOfItems]);

  async function handleConfirmDelete(id: string) {
    setIsLoading(true);
    await api.delete(`/posts/${id}`);

    const { data } = await api('/posts');
    setEnterprises(data);
    setIsLoading(false);
    setIsDeleteVisible(false);
  }

  function handleCancelDelete() {
    setIsDeleteVisible(false);
  }

  function handleLoadMore() {
    setNumOfItems((prevState) => prevState + 5);
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
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <div className="input-border" />
        </InputSearchContainer>

        <MainContent>
          {filteredEnterprises?.map((enterprise) => (
            <Card key={enterprise.id}>
              <ConfirmModal
                name={enterprise.name}
                isVisible={isDeleteVisible}
                onConfirm={() => handleConfirmDelete(enterprise.id)}
                onCancel={handleCancelDelete}
              />
              <main>
                <div className="address">
                  <h3>{enterprise.name}</h3>
                  <div className="actions">
                    <Link href={`/edit/${enterprise.id}`}>
                      <a>
                        <img src="/images/EditIcon.svg" alt="Ícone de Edição" />
                      </a>
                    </Link>
                    <button type="button" onClick={() => setIsDeleteVisible(true)}>
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

        {filteredEnterprises?.length >= 5 && (
          <div className="load-more">
            <Button onClick={handleLoadMore}>
              Carregar mais
            </Button>
          </div>
        )}
      </Wrapper>
    </Container>
  );
}
