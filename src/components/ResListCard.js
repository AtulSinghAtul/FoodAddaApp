import React, { useState } from "react";
import ItemsList from "./ItemsList";

const ResListCard = ({ resListCard, showItems, setShowItems }) => {
  const [toggle, setToggle] = useState(false);
  console.log(showItems);

  const { title, itemCards, categories } = resListCard?.card?.card;

  // console.log(resListCard);

  const handleShowItems = () => {
    console.log("click");
    setShowItems();
    setToggle(!toggle);
  };
  return (
    <div className="w-7/12">
      {title && (
        <div className=" ">
          <div className="shadow-md bg-slate-200 px-3 py-3 mt-1">
            <div
              className=" mt-10 mb-4 flex justify-between cursor-pointer"
              onClick={handleShowItems}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {title} ({itemCards?.length || categories?.length})
              </h2>
              <span>⬇️</span>
            </div>

            {itemCards?.map((item, index) => (
              <div className="flex justify-center items-center ">
                {showItems && toggle && (
                  <ItemsList
                    key={item?.card?.info?.id}
                    item={item?.card?.info}
                  />
                )}
              </div>
            ))}
          </div>

          {categories?.map((item) => (
            <div className="flex flex-col justify-center items-start border border-t-2 mt-4">
              {console.log(item)}
              <h2
                className="text-xl p-2 font-semibold cursor-pointer"
                onClick={handleShowItems}
              >
                {item?.title} ({item?.itemCards?.length})
              </h2>

              {item?.itemCards?.map((itemCard) => (
                <div className="flex justify-center items-center border border-t-2 mt-4">
                  {showItems && toggle && (
                    <ItemsList
                      key={itemCard?.card?.info?.id}
                      item={itemCard?.card?.info}
                    />
                  )}
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
