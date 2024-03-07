import React from "react";
import ItemsList from "./ItemsList";

const ResListCard = ({ resListCard }) => {
  const { title, itemCards, categories } = resListCard?.card?.card;
  // const {itemCards}=
  console.log(resListCard);
  return (
    <div className="flex justify-center items-center">
      {title && (
        <div className="flex flex-col justify-center items-start w-7/12">
          <h1 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
            {title} ({itemCards?.length || categories?.length})
          </h1>
          {itemCards?.map((item) => (
            <div className="flex justify-center items-center border border-t-2 mt-4">
              {" "}
              <ItemsList key={item?.card?.info?.id} item={item} />
            </div>
          ))}

          {categories?.map((item) => (
            <div className="flex flex-col justify-center items-start border border-t-2 mt-4">
              {console.log(item)}
              <h2 className="text-xl p-2 font-semibold">
                {item?.title} ({item?.itemCards?.length})
              </h2>

              {item?.itemCards?.map((itemCard) => (
                <div className="flex justify-center items-center border border-t-2 mt-4">
                  <ItemsList key={itemCard?.card?.info?.id} item={itemCard} />{" "}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResListCard;
