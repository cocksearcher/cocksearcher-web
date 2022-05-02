import { useEffect } from "react";
import { Instance } from "../../axios";

const Recommend = ({ countEmotion }) => {
  const a = countEmotion.map((element) => {
    element.
  })  

  useEffect(() => {
    const req = async () => {
      const res = await Instance.get("/cocktail/today", {
        angry: 3,
        exciting: 4,
        happy: 1,
        hungry: 2,
        sad: 6,
      });

      console.log(res.data);
    };

    req();
  }, []);
};

export default Recommend;
