import {
  FormEvent, useState,
} from 'react';
import { useRouter } from 'next/router';
import { Container } from '../../styles/pages/New';

import EnterprisesForm from '../../components/EnterprisesForm';
import { api } from '../../services/api';
import Success from '../../components/Success';
import Loader from '../../components/Loader';

interface AddressInterface {
  cep: string;
  number: string;
  street: string;
  state: string;
  city: string;
  district: string;
}

interface INewSubmit {
  id: number;
  name: string;
  status: string;
  purpose: string;
  address: AddressInterface;
}

export default function newCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [isToast, setIsToast] = useState(false);

  const { push } = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>, {
    status,
    name,
    purpose,
    address,
  }: INewSubmit) {
    e.preventDefault();

    const data = {
      status,
      name,
      purpose,
      address,
    };

    try {
      setIsLoading(true);
      await api.post('/enterprises/', data);
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
