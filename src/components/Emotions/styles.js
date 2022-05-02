import styled, { keyframes, css } from "styled-components";

const putInAnimation = keyframes`
  0% { top: -1px; }
  30% {top: -20px}
  50% { top: -30px; }
  100% { top: -500px;}
`;

export const Emotion = styled.div`
  cursor: pointer;
  position: relative;

  font-size: 50px;
  margin-right: 10px;
  margin-left: 10px;

  ${(props) =>
    props.isClick &&
    css`
      animation-name: ${putInAnimation};
      animation-duration: 3s;
      animation-fill-mode: forwards;
    `}
`;
