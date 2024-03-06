import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./store/appStore";
import { Route, Routes } from "react-router-dom";
import ResList from "./components/ResList";

const App = () => {
  return (
    <div className="w-[100vw] h-screen">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="reslist" element={<ResList />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
