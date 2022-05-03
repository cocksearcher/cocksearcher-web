import { useState } from "react";
import * as S from "./styles";

const Emotions = ({ countEmotion, emotionText, setCountEmotion }) => {
  const [isClick, setisClick] = useState(false);
  const [count, setCount] = useState(0);

  const onClick = () => {
    setisClick(true);

    setTimeout(() => {
      setisClick(false);
    }, 500);

    setCount((count) => count + 1);

    setCountEmotion(
      countEmotion.map((emotion) =>
        emotion.emotion === emotionText
          ? { ...emotion, count: count }
          : emotion
      )
    );
  };

  return (
    <div>
      <S.Emotion onClick={onClick} isClick={isClick}>
        {emotionText}
      </S.Emotion>
    </div>
  );
};

export default Emotions;
