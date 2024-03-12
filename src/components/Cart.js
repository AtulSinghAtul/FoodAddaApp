import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../components/CartList";
import { Link } from "react-router-dom";
import { clearCartData } from "../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cart.cartData);

  console.log(cartData);

  function handleClearCart() {
    dispatch(clearCartData());
  }

  return (
    <div>
      {cartData?.length === 0 ? (
        <div className=" flex flex-col justify-center items-center mt-48">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/cart_empty_ipmau1"
            alt="cart-img"
            className="w-[350px] "
          />
          <h2 className="text-2xl font-bold mt-8">
            Good food is alwayes cooking
          </h2>
          <p className="text-gray-600">
            Your cart is empety. Add Something from the menu
          </p>

          <button className="bg-[#FC8019] text-white px-6 py-2 font-bold text-xl mt-12">
            <Link to={"/"}>SEE RESTAURENTS NEAR YOU</Link>
          </button>
        </div>
      ) : (
        <div className="w-screen flex flex-col justify-center items-center my-28">
          <button
            onClick={handleClearCart}
            className="bg-[#FC8019] text-white px-6 py-2 font-bold text-xl mt-8"
          >
            Clear Cart
          </button>
          {cartData.map((data) => (
            <CartList key={data?.id} item={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
