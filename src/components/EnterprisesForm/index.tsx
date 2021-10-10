import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import useErrors from '../../hooks/useError';
import formatCep from '../../utils/formatCep';
import isCepValid from '../../utils/isCepValid';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

import { Container, Wrapper } from './styles';

interface handleSubmit {
  e: FormEvent<HTMLFormElement>;
  condition: string;
  name: string;
  type: string;
  address: string;
}

interface IEnterprisesForm {
  onSubmitNew?({
    e, condition, name, type, address,
  }: handleSubmit): Promise<void>;
}

interface IEditData {
  conditionData: string;
  nameData: string;
  typeData: string;
  cepData: string;
  houseNumberData: string;
}

export default function EnterprisesForm({ onSubmitNew }: IEnterprisesForm) {
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

    if (e.target.value.length === 8) {
      const response = await axios.post('https://viacep.com.br/ws/01001000/json/');
      console.log(response);
    }
  }

  function handleHouseNumber(e: ChangeEvent<HTMLInputElement>) {
    setHouseNumber(e.target.value);

    if (!e.target.value) {
      setError({ field: 'houseNumber', message: 'Número do empreendimento é obrigatório!' });
    } else {
      removeError('houseNumber');
    }
  }

  const address = `Rua alguma coisa - ${houseNumber} awdaw`;

  function handleEditPage({
    conditionData, nameData, typeData, cepData, houseNumberData,
  }: IEditData) {
    setCondition(conditionData);
    setName(nameData);
    setType(typeData);
  }

  return (
    <Container onSubmit={(e) => onSubmitNew({
      e, condition, name, type, address,
    })}
    >

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
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('houseNumber')}>
          <Input
            placeholder="Número da residência *"
            value={houseNumber}
            onChange={handleHouseNumber}
            type="number"
          />
        </FormGroup>

      </Wrapper>

      
    </Container>
  );
}
