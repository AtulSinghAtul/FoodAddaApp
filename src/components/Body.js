import React, { useEffect, useState } from "react";
import ResContainer from "./ResContainer";
import { RES_DATA_URL } from "../utility/constant";
import useFecthData from "../hooks/useFecthData";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { addFilterData } from "../slices/resDataSlice";
import { Outlet } from "react-router-dom";

const Body = () => {
  const [inputText, setInputText] = useState("");

  //! custom hook
  useFecthData(RES_DATA_URL);
  console.log("body render");

  //! subscribing to the store
  const resData = useSelector((store) => store.app.resData);
  const filterResData = useSelector((store) => store.app.filterData);

  const dispatch = useDispatch();

  //^ handle search input
  function handleSearchRestaurants() {
    console.log(resData);

    const resList = resData?.filter((data) => {
      if (data?.info?.name.startsWith(inputText)) {
        return data;
      } else {
        if (data?.info?.name.toLowerCase().startsWith(inputText)) {
          return data;
        }
      }
    });
    console.log(resList);

    dispatch(addFilterData(resList));
  }

  //^ handle top rated res
  function handleClick(e) {
    const resList = resData?.filter((data) => {
      return data?.info?.avgRating > 4.4;
    });

    dispatch(addFilterData(resList));
  }

  //! conditional rendering
  return resData === null ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col justify-start items-center w-full h-full mt-8 px-12">
      <Outlet />
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
          Top Reated
        </button>
      </div>
      {/* res container */}
      <div className="flex flex-wrap justify-center items-center gap-8 w-full pb-12">
        {filterResData?.map((res) => {
          return <ResContainer key={res.info.id} resList={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
