import { useState } from "react";
import Emotions from "../../components/Emotions";
import Recommend from "../../components/Recommend";
import Shaker from "../../components/Shaker";
import { EMOTIONS } from "../../constant";
import * as S from "./styles";

const TodayCocktailContainer = () => {
  const [countEmotion, setCountEmotion] = useState(EMOTIONS);
  const [isNext, setIsNext] = useState(false);

  return (
    <S.Outer>
      {!isNext ? (
        <div>
          <Shaker countEmotion={countEmotion}></Shaker>
          <S.NextLevel onClick={() => setIsNext(!isNext)}>
            칵테일 제조
          </S.NextLevel>
          <S.EmotionBox>
            {EMOTIONS.map((emotion) => (
              <Emotions
                key={emotion.id}
                countEmotion={countEmotion}
                emotionText={emotion.emotion}
                setCountEmotion={setCountEmotion}
              ></Emotions>
            ))}
          </S.EmotionBox>
        </div>
      ) : (
        <Recommend countEmotion={countEmotion} />
      )}
    </S.Outer>
  );
};

export default TodayCocktailContainer;
