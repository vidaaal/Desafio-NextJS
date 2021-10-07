import FormGroup from '../FormGroup';
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
    </Container>
  );
}
