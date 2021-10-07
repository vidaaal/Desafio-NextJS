import styled from 'styled-components';

export const Container = styled.div`
  .input-border {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.outline.gray_dark};
    margin-top: 16px;
  }
`;
