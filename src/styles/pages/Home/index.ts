import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;

  margin-top: 30px;

  padding: 0 18px 24px 18px;

  .load-more {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
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

export const Card = styled.div`
  & + & {
    margin-top: 32px;
  }

  max-width: 1140px;
  width: 100%;
  background: ${({ theme }) => theme.background.white};
  height: 114px;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);

  display: flex;
  justify-content: space-between;
  
  @media (max-width: 480px) {
    flex-direction: column;
    height: 150px;
  }

  @media (max-width: 700px) {
    padding: 24px;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .address {
      display: flex;

      h3 {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.text.primary};
        text-overflow: ellipsis;

        @media (max-width: 500px) {
          font-size: 1rem;
        }
      }

      .actions {
        margin-left: 18px;
        display: flex;
        align-items: center;

        button {
          display: flex;
          align-items: center;

          background: transparent;
        }

        > button {
          margin-left: 10px;
        }

        a {
          display: flex;
          align-items: center;
        }
      }
    }

    p {
      color: ${({ theme }) => theme.text.secondary};
      font-size: 0.875rem;

      @media (max-width: 500px) {
        margin-top: 4px;
        font-size: 0.8rem;
      }
    }
  }

  aside {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media (max-width: 630px) {
      flex-direction: column;
    }

    @media (max-width: 480px) {
      flex-direction: row;
    }

    .tag {
      width: 120px;
      height: 35px;
      border: 1px solid ${({ theme }) => theme.brandcolor.primary_light};
      border-radius: 71px;

      display: flex;
      align-items: center;
      justify-content: center;

     

      p {
        font-size: 0.75rem;
      }
    }

    .tag + .tag {
      margin-left: 16px;

      @media (max-width: 630px) {
        margin-top: 3px;
      }
    }
  }
`;
