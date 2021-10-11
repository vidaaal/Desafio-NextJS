import {
  FormEvent, useState,
} from 'react';
import { useRouter } from 'next/router';
import { Container } from '../../styles/pages/New';

import EnterprisesForm from '../../components/EnterprisesForm';
import { api } from '../../services/api';
import Success from '../../components/Success';
import Loader from '../../components/Loader';

interface INewSubmit {
  condition: string;
  name: string;
  type: string;
  address: string;
  cep: string;
  houseNumber: string;
}

export default function newCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [isToast, setIsToast] = useState(false);

  const { push } = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>, {
    condition,
    name,
    type,
    address,
    cep,
    houseNumber,
  }: INewSubmit) {
    e.preventDefault();

    const data = {
      condition,
      name,
      type,
      address,
      cep,
      houseNumber,
    };

    try {
      setIsLoading(true);
      await api.post('/posts/', data);
      setIsLoading(false);
      setIsToast(true);
      setTimeout(() => {
        setIsToast(false);

        if (!isToast) {
          push('/');
        }
      }, 1800);
    } catch {
      return;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      {isToast && <Success message="Empreendimento cadastrado com sucesso" />}
      {isLoading && <Loader />}

      <EnterprisesForm title="Cadastro de" buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </Container>
  );
}
