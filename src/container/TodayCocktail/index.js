import { useEffect, useState } from "react";
import Emotions from "../../components/Emotions";
import Shaker from "../../components/Shaker";
import { EMOTIONS } from "../../constant";
import * as S from "./styles";

const TodayCocktailContainer = () => {
  const [countEmotion, setCountEmotion] = useState(EMOTIONS);

  return (
    <div>
      <S.Outer>
        <Shaker countEmotion={countEmotion}></Shaker>
        <S.EmotionBox>
          {EMOTIONS.map((emotion) => (
            <Emotions
              key={emotion.id}
              emotionText={emotion.emotion}
              setCountEmotion={setCountEmotion}
            ></Emotions>
          ))}
        </S.EmotionBox>
      </S.Outer>
    </div>
  );
};

export default TodayCocktailContainer;
