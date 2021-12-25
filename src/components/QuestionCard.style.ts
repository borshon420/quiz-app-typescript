import styled from "styled-components"

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
  };

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 18px;
    background: ${({ correct, userClicked }) =>
      correct
        ? '#00ff00'
        : !correct && userClicked
        ? '#ff0000'
        : 'D3D3D3'};
    border-radius: 10px;
    color: #000000;
  }
`;