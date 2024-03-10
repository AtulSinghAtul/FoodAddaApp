import React from "react";
import { useSelector } from "react-redux";
import CartList from "../components/CartList";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.cartData);

  console.log(cartData);

  return (
    <div>
      {cartData?.length === 0 ? (
        <h1 className="text-3xl font-bold mt-48 text-center">Cart is Empety</h1>
      ) : (
        <div className="w-screen flex flex-col justify-center items-center my-28">
          {cartData.map((data) => (
            <CartList key={data?.id} item={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
