import styled, { css } from 'styled-components';

interface IFormGroup {
  error: string;
}

export const Container = styled.div`
  & + & {
    margin-top: 45px;
  }

  small {
    color: ${({ theme }) => theme.danger.main};
    font-size: 14px;
    display: block;
    margin-top: 8px;
    padding-left: 2px;
  }

`;
