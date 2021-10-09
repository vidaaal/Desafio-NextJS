import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 622px;
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 32px;
  border-radius: 8px;
  width: 100%;
  background: ${({ theme }) => theme.background.white};

  .title {
    margin-bottom: 30px;
  }

  button {
    margin-top: 100px;
  }
`;
