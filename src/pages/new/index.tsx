import Link from 'next/link';
import {
  FormEvent, useEffect, useState, ChangeEvent,
} from 'react';
import axios from 'axios';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Success from '../../components/Success';
import { api } from '../../services/api';
import useErrors from '../../hooks/useError';
import formatCep from '../../utils/formatCep';
import isCepValid from '../../utils/isCepValid';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Select from '../../components/Select';

import {
  Container, Form, Wrapper,
} from './styles';
import Loader from '../../components/Loader';
import formatHouseNumber from '../../utils/formatHouseNumber';

export default function newCard() {
  const [isToast, setIsToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [condition, setCondition] = useState('Lançamento');
  const [name, setName] = useState('');
  const [type, setType] = useState('Residencial');
  const [cep, setCep] = useState('');
  const [houseNumber, setHouseNumber] = useState('');

  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  const isFormValid = (name && cep && houseNumber && errors.length === 0);

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);

    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome do empreendimento é obrigatório!' });
    } else {
      removeError('name');
    }
  }

  async function handleCepChange(e: ChangeEvent<HTMLInputElement>) {
    setCep(formatCep(e.target.value));

    if (!e.target.value || !isCepValid(e.target.value) || e.target.value.length !== 8) {
      setError({ field: 'cep', message: 'CEP inválido!' });
    } else {
      removeError('cep');
    }

    // if (e.target.value.length === 8) {
    //   const response = await axios.post('https://viacep.com.br/ws/01001000/json/');
    // }
  }

  function handleHouseNumber(e: ChangeEvent<HTMLInputElement>) {
    setHouseNumber(formatHouseNumber(e.target.value));

    if (!e.target.value) {
      setError({ field: 'houseNumber', message: 'Número do empreendimento é obrigatório!' });
    } else {
      removeError('houseNumber');
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsToast(false);
    }, 1000);
  }, [isToast]);

  const address = `Rua alguma coisa - ${houseNumber} awdaw`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
    } catch {
      return;
    }
  }

  return (
    <Container>
      {isToast && <Success message="Empreendimento cadastrado com sucesso!" />}
      {isLoading && <Loader />}

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
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <div className="title">
            <h3>Informações</h3>
          </div>

          <FormGroup>
            <Select
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setCondition(e.target.value)}
              value={condition}
              name="codition"
            >
              <option value="Lançamento">Lançamento</option>
              <option value="Breve Lançamento">Breve lançamento</option>
              <option value="Em obras">Em obras</option>
              <option value="Pronto pra morar">Pronto pra morar</option>
            </Select>
          </FormGroup>

          <FormGroup error={getErrorMessageByFieldName('name')}>
            <Input
              placeholder="Nome do empreendimento *"
              value={name}
              onChange={handleNameChange}
              error={getErrorMessageByFieldName('name')}
            />
          </FormGroup>

          <FormGroup>
            <Select
              value={type}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}
            >
              <option value="Residencial">Residencial</option>
              <option value="Comercial">Comercial</option>
            </Select>
          </FormGroup>

          <FormGroup error={getErrorMessageByFieldName('cep')}>
            <Input
              placeholder="CEP *"
              value={cep}
              onChange={handleCepChange}
              maxLength={9}
              error={getErrorMessageByFieldName('cep')}
            />
          </FormGroup>

          <FormGroup error={getErrorMessageByFieldName('houseNumber')}>
            <Input
              placeholder="Número da residência *"
              value={houseNumber}
              onChange={handleHouseNumber}
              error={getErrorMessageByFieldName('houseNumber')}
            />
          </FormGroup>

        </Wrapper>

        <Button type="submit" disabled={!isFormValid}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}