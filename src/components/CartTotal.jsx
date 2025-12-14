import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Tital from "./Tital";

const CartTotal = () => {
  const [total, setTotal] = useState();
  const { getCartAmount, currency, delevery_fee } = useContext(Shopcontext);
 

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Tital text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delevery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delevery_fee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;


