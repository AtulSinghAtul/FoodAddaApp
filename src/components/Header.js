import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import { useSelector } from "react-redux";

const Header = () => {
  const online = useOnline();
  // console.log(online);
  const [login, setLogin] = useState(true);
  const cartData = useSelector((store) => store.cart.cartData);

  // console.log(cartData);
  // console.log(cartData.length);

  return (
    <div className="w-[100vw] h-fit fixed top-0 left-0 bg-slate-50 z-30">
      <header className="py-4 w-full h-full  px-5 flex justify-between items-center shadow-md">
        <div className="grid-cols-1">
          <Link to="/">
            <img
              src={require("../assets/res-logo.jpeg")}
              alt="res-logo"
              className="w-20 "
            />
          </Link>
        </div>

        <div>status: {online ? "🟢" : "🔴"}</div>

        <ul className="flex justify-between items-center gap-4 text-xl font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Atul Singh</li>
          <li>
            <Link to={"/cart"}>Cart({cartData.length})</Link>
          </li>
        </ul>
        <button
          onClick={() => setLogin(!login)}
          className="bg-gray-300 px-4 py-2 rounded-md"
        >
          {login ? "Login" : "Logout "}
        </button>
      </header>
    </div>
  );
};

export default Header;
