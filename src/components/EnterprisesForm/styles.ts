import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  max-width: 622px;
  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.background.white};

  .title {
    margin-bottom: 30px;
  }
`;
