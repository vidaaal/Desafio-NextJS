import styled from 'styled-components';

export default styled.header`
  min-width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.background.white};

  display: flex;
  align-items: center;
  justify-content: space-around;

  color: ${({ theme }) => theme.brandcolor.primary_default};

  .add-button {
    
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
  }
  
  main {
    display: flex;

    a {
      margin-right: 10px;
      background: transparent;
      
      display: flex;
      
      padding: 4px 6px;
      text-decoration: none;
    }

    h2 {
      margin-left: 16px;
    }
  }
`;
