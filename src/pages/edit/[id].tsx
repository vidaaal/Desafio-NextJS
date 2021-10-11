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

interface IEditData {
  id: number;
  condition: string;
  name: string;
  type: string;
  address: string;
  cep: string;
  houseNumber: string;
}

interface IEditSubmit {
  condition: string;
  name: string;
  type: string;
  address: string;
  cep: string;
  houseNumber: string;
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
      const { data } = await api(`/posts/${query.id}`);
      setEditData(data);
      setIsLoading(false);
    })();
  }, [query]);

  useEffect(() => {
    setTimeout(() => {
      setIsToast(false);

      if (isToast) {
        push('/');
      }
    }, 2000);
  }, [isToast]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>, {
    condition,
    name,
    type,
    address,
    cep,
    houseNumber,
  }: IEditSubmit) {
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
      await api.put(`/posts/${query.id}`, data);
      setIsLoading(false);
      setIsToast(true);
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
