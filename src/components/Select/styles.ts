import styled from 'styled-components';

export const Container = styled.div`
  select {
    width: 100%;
    height: 52px;
    font-size: 1rem;
  }
  
  .input-border {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.outline.gray_dark};

  }
`;
