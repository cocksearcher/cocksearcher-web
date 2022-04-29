import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default RootRouter;
