import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0 12px 18px 12px;
`;

export const Wrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  max-width: 622px;
  width: 100%;
  background: ${({ theme }) => theme.background.white};

  .title {
    margin-bottom: 30px;
  }

  button {
    margin-top: 100px;
  }

  .cep-container {
    margin: 40px 0;
  }
`;
