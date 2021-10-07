import styled from 'styled-components';

export const Container = styled.div`
  input {
    border: 0;
    width: 100%;
    font-size: 1rem;
    padding-left: 2px;

    ::placeholder {
      color: ${({ theme }) => theme.text.primary};
    }
  }
  
  .input-border {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.outline.gray_dark};
    margin-top: 16px;
  }
`;
