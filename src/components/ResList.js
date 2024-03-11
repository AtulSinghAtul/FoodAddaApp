import React, { useState } from "react";
import { RES_LIST_URL } from "../utility/constant";
import useFetchlist from "../hooks/useFetchlist";
import { useSelector } from "react-redux";
import ResListCard from "./ResListCard";
import Shimmer from "./Shimmer";

const ResList = () => {
  // const [data, setData] = useState();
  const [showItems, setShowItems] = useState(null);
  console.log(showItems);

  useFetchlist(RES_LIST_URL);

  const resList = useSelector((store) => store?.app?.resListData);

  // console.log(resList);
  return resList === null ? (
    <Shimmer />
  ) : (
    <div className=" mt-8  flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold">{resList[0]?.card?.card?.text}</h1>
      {resList[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        (card, index) => (
          <ResListCard
            key={card?.card?.card?.title}
            resListCard={card}
            showItems={showItems === index ? true : false}
            setShowItems={() => setShowItems(index)}
          />
        )
      )}
    </div>
  );
};

export default ResList;
