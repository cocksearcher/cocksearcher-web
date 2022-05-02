import * as S from "./styles";
import Cup1 from "../../assets/img/shakerCup.svg";
import Cup2 from "../../assets/img/whiteCup.svg";
import { useMemo } from "react";

const Shaker = ({ countEmotion }) => {
  const a = useMemo(() => {
    countEmotion.map((element) => {
      const { id, emotion, count } = element;

      return (
        <div>
          {id} {emotion} {count}
        </div>
      );
    });
  }, [countEmotion]);

  return (
    <S.CupBox>
      <S.ShakerCup src={Cup1}></S.ShakerCup>
      <S.WhiteShakerCup src={Cup2}></S.WhiteShakerCup>
      {a}
    </S.CupBox>
  );
};

export default Shaker;
