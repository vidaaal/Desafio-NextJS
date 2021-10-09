import styled, { css } from 'styled-components';

interface IInput {
  error?: string;
}

export const Container = styled.div<IInput>`
  input {
    border: 0;
    width: 100%;
    font-size: 1rem;
    padding-left: 2px;
    appearance: none;
    -moz-appearance: textfield;

    ::placeholder {
      color: ${({ theme }) => theme.text.primary};

      color: ${({ error, theme }) => error && theme.danger.main};
    }

    
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  
  .input-border {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.outline.gray_dark};
    margin-top: 16px;

    ${({ error }) => error && css`
      background: ${({ theme }) => theme.danger.main};
    `}
  }
`;
