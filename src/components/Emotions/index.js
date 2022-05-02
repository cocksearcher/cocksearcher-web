import { useState } from "react";
import * as S from "./styles";
import { EMOTIONS } from "../../constant";

const Emotions = ({ emotionText, setCountEmotion }) => {
  const [isClick, setisClick] = useState(false);
  const [count, setCount] = useState(0);

  const onClick = () => {
    setisClick(true);

    setTimeout(() => {
      setisClick(false);
    }, 500);

    setCount(count => count+1);

    setCountEmotion(
      EMOTIONS.map((emotion) =>
        emotion.emotion === emotionText ? { ...emotion, count: count } : emotion
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
