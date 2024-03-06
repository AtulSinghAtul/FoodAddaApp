import React, { useEffect, useState } from "react";
import ResContainer from "./ResContainer";
import { RES_DATA_URL } from "../utility/constant";
import useFecthData from "../hooks/useFecthData";
import { useSelector } from "react-redux";

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [filterResData, setFilterResData] = useState(null);
  const [toggle, setToggle] = useState(false);
  //! subscribing to the store
  const resData = useSelector((store) => store.app.resData);
  // console.log(filterResData);

  //! custom hook
  useFecthData(RES_DATA_URL);

  function handleSearchRestaurants() {
    const resList = resData?.filter((data) => {
      console.log(data?.info?.name);
      return data?.info?.name;
    });
    console.log(resList);
    // console.log(inputText);
  }

  function handleClick(e) {
    // console.log(resData);
    const resList = resData?.filter((data) => {
      return data?.info?.avgRating > 4.4;
    });
    // console.log(resList);
    setFilterResData(resList);
    setToggle(!toggle);
  }

  return (
    <div className="flex flex-col justify-start items-center w-full h-full mt-8 px-12">
      <div className="w-full text-center ">
        <input
          type="text"
          className="bg-gray-400 w-[50%] text-white rounded-md px-12 py-4 outline-none placeholder:text-white text-center text-xl"
          placeholder="Search Restaurent"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md ml-2"
          onClick={handleSearchRestaurants}
        >
          Search Restaurent
        </button>

        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md ml-10"
          onClick={handleClick}
        >
          {toggle ? "All Restaurents" : "Best Restaurents"}
        </button>
      </div>
      {/* res container */}
      <div className="flex flex-wrap justify-between items-center w-full pb-12">
        {toggle
          ? filterResData?.map((resData) => (
              <ResContainer key={resData.info.id} resList={resData} />
            ))
          : resData?.map((resData) => (
              <ResContainer key={resData.info.id} resList={resData} />
            ))}
      </div>
    </div>
  );
};

export default Body;
