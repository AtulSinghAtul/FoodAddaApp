import React, { useState } from "react";
import { RES_LIST_URL } from "../utility/constant";
import useFetchlist from "../hooks/useFetchlist";
import { useSelector } from "react-redux";
import ResListCard from "./ResListCard";

const ResList = () => {
  // const [data, setData] = useState();

  useFetchlist(RES_LIST_URL);

  const resList = useSelector((store) => store?.app?.resListData);

  console.log("res list");
  return resList === null ? (
    <h1>Loading...</h1>
  ) : (
    <div className=" mt-8">
      {resList[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((card) => (
        <ResListCard key={card?.card?.card?.title} resListCard={card} />
      ))}
    </div>
  );
};

export default ResList;
