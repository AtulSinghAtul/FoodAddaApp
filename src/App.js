import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./store/appStore";

const App = () => {
  return (
    <div className="w-[100vw] h-screen">
      <Provider store={store}>
        <Header />
        <Body />
        {/* {Header()}
        {Body()} */}
      </Provider>
    </div>
  );
};

export default App;
