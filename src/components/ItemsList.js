import React from "react";
import { RES_IMG_URL } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addCartData } from "../slices/cartSlice";

const ItemsList = ({ item }) => {
  const dispatch = useDispatch();

  const { ratings, name, price, description, defaultPrice, imageId } =
    item?.card?.info;

  function handleAdd() {
    console.log("click");
    dispatch(addCartData(item?.card?.info));
  }
  return (
    <div className="font-normal text-2xl  my-2  p-8  flex justify-center items-center w-full">
      <div className="flex flex-col gap-1 w-10/12 text-gray-700">
        <p className=" text-lg font-semibold">{name}</p>
        <p className="text-sm font-semibold">
          ₹{price / 100 || defaultPrice / 100}
        </p>
        {ratings?.aggregatedRating?.ratingCountV2 && (
          <p className="text-sm">
            {ratings?.aggregatedRating?.rating} (
            {ratings?.aggregatedRating?.ratingCountV2})
          </p>
        )}

        <p className="text-gray-400 text-sm mt-3">{description}</p>
      </div>
      <div className="ml-8 relative">
        <img
          className="w-[10rem] rounded-xl"
          src={RES_IMG_URL + imageId}
          alt="item-img"
        />
        <button
          className="absolute bg-slate-300 text-slate-600 px-4 py-1 text-sm font-semibold rounded-md -bottom-3 left-6 "
          onClick={handleAdd}
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default ItemsList;
