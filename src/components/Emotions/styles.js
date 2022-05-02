import styled, { keyframes, css } from "styled-components";

const putInAnimation = keyframes`
  0% { top: -10px; perspective: 400px; transform: rotateY(360deg) }
  10% {top: -30px;}
  20% { top: -40px;}
  30% {top: -60px}
  40% { top: -100px; }
  70% { display:none;}
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
      animation-duration: .5s;
      animation-fill-mode: forwards;
    `}
`;
