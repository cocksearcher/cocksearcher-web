import { useEffect } from "react";
import { Instance } from "../../axios";

const Recommend = ({ countEmotion }) => {
  useEffect(() => {
    const req = async () => {
      const emotionObj = {
        happy: 0,
        exciting: 0,
        hungry: 0,
        sad: 0,
        angry: 0,
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
