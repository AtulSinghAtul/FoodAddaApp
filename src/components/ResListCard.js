import React, { useState } from "react";
import ItemsList from "./ItemsList";

const ResListCard = ({ resListCard, showItems, setShowItems }) => {
  const [toggle, setToggle] = useState(false);
  //console.log(showItems);

  const { title, itemCards, categories } = resListCard?.card?.card;

  const handleShowItems = () => {
    //console.log("click");
    setShowItems();
    setToggle(!toggle);
  };

  function handleToggles() {
    setToggle(!toggle);
  }
  return (
    <div className="w-7/12">
      {title && (
        <div className={categories && `bg-red-300`}>
          <div
            className={
              itemCards &&
              `shadow-md 
              bg-slate-200
            px-3 py-3 my-4`
            }
          >
            <div
              className={`mt-10 mb-4 flex justify-between ${
                itemCards && "cursor-pointer"
              } `}
              onClick={itemCards && handleShowItems}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {title} ({itemCards?.length || categories?.length})
              </h2>
              {itemCards && <span>⬇️</span>}
            </div>

            {itemCards?.map(
              (item, index) =>
                showItems &&
                toggle && (
                  <div className="flex justify-center items-center border-t-2 border-white">
                    <ItemsList
                      key={item?.card?.info?.id}
                      item={item?.card?.info}
                    />
                  </div>
                )
            )}
          </div>

          {/* ///////////////////////////////////////////// */}

          {categories?.map((item) => (
            <div className="flex flex-col justify-center items-start   border-t-2 mt-4 ">
              <div className="flex justify-between items-center w-full">
                <h2
                  className="text-xl p-2 font-semibold cursor-pointer"
                  onClick={categories && handleToggles}
                >
                  {item?.title} ({item?.itemCards?.length})
                </h2>
                <span>⬇️</span>
              </div>

              {item?.itemCards?.map((itemCard) => (
                <div className="flex justify-center items-center border border-t-2 ">
                  {toggle && (
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
