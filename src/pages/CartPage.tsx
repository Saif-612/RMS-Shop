
import React from "react";
import { Cart } from "@/components/Cart";

const CartPage = () => {
  return (
    <div className="container-custom py-16">
      <h1 className="mb-8">Your Shopping Cart</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
