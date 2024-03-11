import React from "react";
import { RES_IMG_URL } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addCartData, removeCartData } from "../slices/cartSlice";

const CartList = ({ item }) => {
  const dispatch = useDispatch();
  // console.log(item);

  const { ratings, name, price, description, defaultPrice, imageId } = item;

  function handleAdd() {
    console.log("click");
    dispatch(addCartData(item));
  }

  function handleRemove() {
    dispatch(removeCartData(item.id));
  }
  return (
    <div className="font-normal text-2xl  mt-8  p-8  flex justify-center items-center w-6/12 border border-t-4">
      <div className="flex flex-col gap-1 w-9/12  text-gray-700">
        <p className=" text-lg font-semibold">{name}</p>
        <p className="text-sm font-semibold ">
          ₹{price / 100 || defaultPrice / 100}
        </p>
        {ratings?.aggregatedRating?.ratingCountV2 && (
          <p className="text-sm ">
            {ratings?.aggregatedRating?.rating} (
            {ratings?.aggregatedRating?.ratingCountV2})
          </p>
        )}

        <p className="text-gray-400 text-sm mt-3 ">{description}</p>
      </div>
      <div className="ml-8 flex justify-center items-center relative ">
        <img
          className="w-[10rem] h-[10rem] object-cover  rounded-xl"
          src={RES_IMG_URL + imageId}
          alt="item-img"
        />
        <div className="flex gap-2 absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[250%]">
          <button
            className=" bg-green-300 text-green-700 px-2 py-1 text-sm font-semibold rounded-md   "
            onClick={handleAdd}
          >
            Add+
          </button>
          <button
            className=" bg-red-300 text-red-700 px-2 py-1 text-sm font-semibold rounded-md "
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
