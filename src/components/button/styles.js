import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid #000;
  cursor: pointer;
  width: ${({ largura }) => `${largura}px`};
  height: ${({ altura }) => `${altura}px`};
  margin-top: 10px;
  border-radius: 5px;
  background-color: ${({ cor }) => `${cor}`};

  &:hover {
    background-color: red;
  }
`;
