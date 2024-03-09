import React, { useState } from "react";
import { RES_LIST_URL } from "../utility/constant";
import useFetchlist from "../hooks/useFetchlist";
import { useSelector } from "react-redux";
import ResListCard from "./ResListCard";
import Shimmer from "./Shimmer";

const ResList = () => {
  // const [data, setData] = useState();

  useFetchlist(RES_LIST_URL);

  const resList = useSelector((store) => store?.app?.resListData);

  // console.log(resList);
  return resList === null ? (
    <Shimmer />
  ) : (
    <div className=" mt-8  flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold">{resList[0]?.card?.card?.text}</h1>
      {resList[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((card) => (
        <ResListCard
          key={card?.card?.card?.title}
          resListCard={card}
          resName={resList[0]?.card?.card?.text}
        />
      ))}
    </div>
  );
};

export default ResList;
