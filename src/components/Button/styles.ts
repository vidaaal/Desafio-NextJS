import styled from 'styled-components';

interface IButton {
  disabled: boolean;
}

export const Container = styled.div<IButton>`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 176px;
    height: 36px;
    border-radius: 71px;
    background: ${({ theme }) => theme.brandcolor.primary_default};
    color: ${({ theme }) => theme.text.white};
    font-size: 1rem;
    font-weight: 700;

    text-decoration: none;

    &[disabled] {
      background: #ccc;
      cursor: default;
    }
  }

  margin-top: 38px;
`;
