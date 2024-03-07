import Body from "./components/Body";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ResList from "./components/ResList";

const App = () => {
  return (
    <div className="w-[100vw] h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path={"/reslist/:resId"} element={<ResList />} />
      </Routes>
    </div>
  );
};

export default App;
