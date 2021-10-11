import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  

  .modal {
    background: ${({ theme }) => theme.background.white};
    max-width: 453px;
    width: 100%;
    height: 204px;
    padding: 16px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    display: flex;
    align-items: center;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    main {
        > h2 {
          font-size: 1.375rem;
          color: ${({ theme }) => theme.danger.main};
          margin-bottom: 8px;
        }

        p {
          font-size: 1rem;
        }
      }

    .actions {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      align-items: center;

      .cancel-button {
        button {
          padding: 10px;
        }
      }

      .delete-button {
        button {
          width: 94px;
          height: 40px;
          background: ${({ theme }) => theme.danger.main};

          color: ${({ theme }) => theme.text.white};
          font-weight: 700;
          font-size: 1rem;
          margin-left: 10px;
          border-radius: 5px;
        }
      }
    }
  }
`;
