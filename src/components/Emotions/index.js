import { useState } from "react";
import * as S from "./styles";

const Emotions = ({ emotionText }) => {
  const [isClick, setisClick] = useState(false);

  const onClick = () => {
    setisClick(true);

    setTimeout(() => {
      setisClick(false);
    }, 3000);
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
