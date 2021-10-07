import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

import { Container } from './styles';

export default function EnterprisesForm() {
  return (
    <Container>
      <div className="title">
        <h3>Informações</h3>
      </div>

      <FormGroup>
        <Select>
          <option value="">Lançamento</option>
          <option value="">Breve lançamento</option>
          <option value="">Em obras</option>
          <option value="">Pronto pra morar</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Input placeholder="Nome do empreendimento" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="">Residencial</option>
          <option value="">Comercial</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Input placeholder="CEP" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Número da residência" />
      </FormGroup>
    </Container>

  );
}
