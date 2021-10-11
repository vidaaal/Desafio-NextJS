import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(246, 245, 252, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  

  .success {
    background: ${({ theme }) => theme.background.white};
    width: 300px;
    height: 100px;
    padding: 16px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    display: flex;
    align-items: center;

    .message-div {
      p {
        font-weight: 700;
        margin-left: 6px;
      }
    }
  }
`;
