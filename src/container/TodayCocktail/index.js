import Emotions from "../../components/Emotions";
import Shaker from "../../components/Shaker";
import { EMOTIONS } from "../../constant";
import * as S from "./styles";

const TodayCocktailContainer = () => {
  return (
    <div>
      <Shaker></Shaker>
      <S.EmotionBox>
        {EMOTIONS.map((emotion) => (
          <Emotions key={emotion.id} emotionText={emotion.emotion}></Emotions>
        ))}
      </S.EmotionBox>
    </div>
  );
};

export default TodayCocktailContainer;
