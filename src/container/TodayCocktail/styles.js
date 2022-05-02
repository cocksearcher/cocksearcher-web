import styled from "styled-components";

export const EmotionBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
`;

export const Outer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const NextLevel = styled.button`
  margin-top: 100px;
  width: 350px;
  height: 50px;

  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;
  outline: none;
  border: none;
  background-color: white;

  &:hover {
    border: 1px solid #0f6347;
  }

  &:active {
    background-color: #0f6347;
  }
`;
