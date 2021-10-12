import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FormEvent, useEffect, useState, ChangeEvent, forwardRef,
} from 'react';

import axios from 'axios';
import Button from '../Button';
import Header from '../Header';
import useErrors from '../../hooks/useError';
import formatCep from '../../utils/formatCep';
import isCepValid from '../../utils/isCepValid';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import formatHouseNumber from '../../utils/formatHouseNumber';
import Loader from '../Loader';

import { Form, Wrapper } from './styles';

interface AddressInterface {
  cep?: string;
  number?: string;
  street?: string;
  state?: string;
  city?: string;
  district?: string;
  formatedAddress?: string;
}

interface IData {
  id?: number;
  name: string;
  status: string;
  purpose: string;
  address: AddressInterface;
}

interface IEnterprisesForm {
  title: string;
  buttonLabel: string
  data?: IData | undefined;
  onSubmit(e: FormEvent, {
    status,
    name,
    purpose,
    address,
  }: IData): Promise<void>;
}

interface ICepData {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function EnterpriseForm({
  title, buttonLabel, data, onSubmit,
}: IEnterprisesForm) {
  const [isLoading, setIsLoading] = useState(false);

  const [status, setStatus] = useState('Lançamento');
  const [name, setName] = useState('');
  const [purpose, setPurpose] = useState('Residencial');
  const [cep, setCep] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [cepData, setCepData] = useState<ICepData>();

  const { query, push } = useRouter();

  useEffect(() => {
    (async () => {
      if (!data) {
        return;
      }

      setIsLoading(true);
      setStatus(data.purpose);
      setName(data.name);
      setPurpose(data.purpose);
      setCep(formatCep(data.address.cep!));
      setHouseNumber(data.address.number!);

      if (data.address) {
        try {
          const response = await axios(`https://viacep.com.br/ws/${data.address.cep}/json/`);
          setCepData(response.data);
        } catch {
          return;
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, [data]);

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

    if (e.target.value.replace('-', '').length === 8) {
      try {
        setIsLoading(true);
        const response = await axios(`https://viacep.com.br/ws/${e.target.value.replace('-', '')}/json/`);
        setCepData(response.data);
        setIsLoading(false);
      } catch {
        return;
      }
    }
  }

  function handleHouseNumber(e: ChangeEvent<HTMLInputElement>) {
    setHouseNumber(formatHouseNumber(e.target.value));

    if (!e.target.value) {
      setError({ field: 'houseNumber', message: 'Número do empreendimento é obrigatório!' });
    } else {
      removeError('houseNumber');
    }
  }

  const formatedAddress = `${cepData?.logradouro}, ${houseNumber} - ${cepData?.bairro}`;

  return (
    <>
      {isLoading && <Loader />}

      <Header>
        <main>
          <Link href="/">
            <a>
              <img src="/images/ArrowIcon.svg" alt="" />
              <h2>
                {title}
                {' '}
                empreendimento
              </h2>
            </a>

          </Link>

        </main>
        <div />
      </Header>
      <Form onSubmit={(e) => onSubmit(e, {
        status,
        name,
        purpose,
        address: {
          cep: cepData?.cep,
          city: cepData?.localidade,
          district: cepData?.uf,
          street: cepData?.logradouro,
          number: houseNumber,
          state: cepData?.uf,
          formatedAddress,
        },
      })}
      >
        <Wrapper>
          <div className="title">
            <h3>Informações</h3>
          </div>

          <FormGroup>
            <Select
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value)}
              value={status}
              name="status"
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
              value={purpose}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setPurpose(e.target.value)}
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

          {cepData && (
            <div className="cep-container">
              <p>{cepData.logradouro}</p>
              <p>{cepData.bairro}</p>
              <p>{cepData.localidade}</p>
              <p>{cepData.uf}</p>
            </div>
          )}

          <FormGroup error={getErrorMessageByFieldName('houseNumber')}>
            <Input
              placeholder="Número da residência *"
              value={houseNumber}
              onChange={handleHouseNumber}
              error={getErrorMessageByFieldName('houseNumber')}
            />
          </FormGroup>

        </Wrapper>

        <Button
          type="submit"
          disabled={!isFormValid}
        >
          {buttonLabel}
        </Button>
      </Form>
    </>
  );
}
