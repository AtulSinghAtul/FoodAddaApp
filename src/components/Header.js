import React, { useState } from "react";

const Header = () => {
  const [online, setOnline] = useState("🟢");
  const [login, setLogin] = useState(true);

  return (
    <div className="w-[100vw] h-fit">
      <header className="py-4 w-full h-full  px-5 flex justify-between items-center shadow-md">
        <div className="grid-cols-1">
          <img
            src={require("../assets/res-logo.jpeg")}
            alt="res-logo"
            className="w-20 "
          />
        </div>

        <div>status: {online}</div>

        <ul className="flex justify-between items-center gap-4 text-xl font-semibold">
          <li>Offers</li>
          <li>Help</li>
          <li>Atul Singh</li>
          <li>Cart</li>
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
