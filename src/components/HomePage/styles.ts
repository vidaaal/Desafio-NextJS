import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;

  margin-top: 38px;

  padding: 0 36px;
`;

export const InputSearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  .input-container {
    display: flex;
    align-items: center;

    img {
      margin-right: 18px;
    }
  
    input {
      width: 100%;
      border: 0;
      background: transparent;
    }
  }

  .input-border {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.outline.gray_dark};
    margin-top: 16px;
  }
`;

export const MainContent = styled.main`
  margin-top: 51px;
`;
