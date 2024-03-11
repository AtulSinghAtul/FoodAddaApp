import React from "react";
import { RES_IMG_URL } from "../utility/constant";

const resCard = ({ resList }) => {
  const { name, avgRating, sla, locality, cloudinaryImageId, cuisines } =
    resList?.info;
  // console.log(id);
  return (
    <div>
      <div className="w-[300px] h-[400px] border border-gray-600 mt-12 rounded-lg">
        <img
          src={RES_IMG_URL + cloudinaryImageId}
          alt="res-img"
          className="rounded-lg h-[65%] w-full object-cover"
        />
        <div className="flex flex-col p-3">
          <h1 className="text-md font-bold">{name}</h1>
          <span>
            <span>{avgRating}</span>
            <span> {sla.deliveryTime}</span>
          </span>
          <p>
            {cuisines.map((cusine, index) => (
              <span key={index}>{cusine + ""} </span>
            ))}
          </p>
          <p>{locality}</p>
        </div>
      </div>
    </div>
  );
};

//! HOF - hof is take a component in input and retur a enhanced component

export const resCardPrice = (ResCard) => {
  return ({ resList }) => {
    // console.log(resList);
    const { costForTwo } = resList.info;
    return (
      <div className="relative">
        <span className="absolute top-48 left-4 text-3xl text-green-800 font-bold bg-green-500 p-2 rounded-lg">
          {costForTwo}
        </span>
        <ResCard resList={resList} />
      </div>
    );
  };
};

export default resCard;
