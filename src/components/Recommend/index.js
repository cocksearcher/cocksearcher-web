import { useEffect } from "react";
import { Instance } from "../../axios";

const Recommend = ({ countEmotion }) => {
  useEffect(() => {
    const req = async () => {
      const emotionObj = {
        happy: 1,
        exciting: 4,
        hungry: 2,
        sad: 6,
        angry: 3,
      };

      const params = Object.keys(emotionObj).map(
        (key, idx) => (emotionObj[key] = countEmotion[idx].count)
      );

      const res = await Instance.get("/cocktail/today", params);

      console.log(res.data);
    };

    req();
  }, [countEmotion]);

  return  (
    <div>
      <div>sfjksfhjksebfjksb</div>
    </div>
  )
};

export default Recommend;
