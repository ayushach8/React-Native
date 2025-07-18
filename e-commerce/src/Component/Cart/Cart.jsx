import { useState } from "react";
import NavBar from "../Navbar/Navbar";

const Cart = () => {
  const LocalStorage = localStorage.getItem("cart");
  const [cartData, setCartData]=useState(JSON.parse(localStorage)|| []);
  return (
     <div className="flex-1">
      <NavBar />
      <div className=" my-5">
        {cartData.map((item) => (
          <CartCard
            key={item.id}
            productData={item}
            setCartData={setCartData}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;