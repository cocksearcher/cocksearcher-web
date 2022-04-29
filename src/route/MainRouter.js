import { TodayCocktailContainer } from "../container";
import { Routes, Route } from "react-router-dom";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TodayCocktailContainer />} />
    </Routes>
  );
};

export default MainRouter;
