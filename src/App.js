import Body from "./components/Body";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ResList from "./components/ResList";
import Contact from "./components/Contact";
import About from "./components/About";
import { Suspense, lazy } from "react";

const Cart = lazy(() => import("./components/Cart"));

const App = () => {
  return (
    <div className="w-[100vw] h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />

        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route
          path={"/cart"}
          element={
            <Suspense fallback={"Loading...."}>
              <Cart />
            </Suspense>
          }
        />

        <Route path={"/reslist/:resId"} element={<ResList />} />
      </Routes>
    </div>
  );
};

export default App;
