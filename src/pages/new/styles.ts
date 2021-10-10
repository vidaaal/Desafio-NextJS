import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  padding: 32px;
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
`;
