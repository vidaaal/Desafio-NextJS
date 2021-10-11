import styled, { css } from 'styled-components';

export const Container = styled.div`
  select {
    width: 100%;
    height: 38px;
    font-size: 1rem;

    option {
      width: 100%;
    }
  }
  
  .input-border {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.outline.gray_dark};
  }
`;
