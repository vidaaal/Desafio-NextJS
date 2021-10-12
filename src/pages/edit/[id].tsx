import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  useEffect, useState, useRef, useImperativeHandle, FormEvent,
} from 'react';

import { Container } from '../../styles/pages/Edit';
import EnterprisesForm from '../../components/EnterprisesForm';
import Loader from '../../components/Loader';
import { api } from '../../services/api';
import Success from '../../components/Success';

interface AddressInterface {
  cep: string;
  number: string;
  street: string;
  state: string;
  city: string;
  district: string;
}

interface IEditData {
  id?: number;
  name: string;
  status: string;
  purpose: string;
  address: AddressInterface;
}

interface IEditSubmit {
  id?: number;
  name: string;
  status: string;
  purpose: string;
  address: AddressInterface;
}

export default function EditEnterprise() {
  const [isLoading, setIsLoading] = useState(true);
  const [isToast, setIsToast] = useState(false);
  const [editData, setEditData] = useState<IEditData>();

  const { query, push } = useRouter();

  useEffect(() => {
    (async () => {
      if (!query.id) {
        return;
      }

      setIsLoading(true);
      const { data } = await api(`/enterprises/${query.id}`);
      setEditData(data);
      setIsLoading(false);
    })();
  }, [query]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>, {
    status,
    name,
    purpose,
    address,
  }: IEditSubmit) {
    e.preventDefault();

    const data = {
      status,
      name,
      purpose,
      address,
    };

    try {
      setIsLoading(true);
      await api.put(`/enterprises/${query.id}`, data);
      setIsLoading(false);
      setIsToast(true);
      setTimeout(() => {
        setIsToast(false);

        if (!isToast) {
          push('/');
        }
      }, 2000);
    } catch {
      return;
    }
  }

  return (
    <Container>
      {isLoading && <Loader />}
      {isToast && <Success message="Empreendimento atualizado com sucesso" />}

      <EnterprisesForm title="Editar" buttonLabel="Atualizar" data={editData} onSubmit={handleSubmit} />
    </Container>
  );
}
