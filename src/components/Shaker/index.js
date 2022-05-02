import * as S from "./styles";
import Cup1 from "../../assets/img/shakerCup.svg"
import Cup2 from "../../assets/img/whiteCup.svg"

const Shaker = () => {
  return (
    <S.CupBox>
      <S.ShakerCup src={Cup1}></S.ShakerCup>
      <S.WhiteShakerCup src={Cup2}></S.WhiteShakerCup>
    </S.CupBox>
  );
};

export default Shaker;
