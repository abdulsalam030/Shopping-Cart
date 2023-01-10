import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Paystack from "../PaystackIntegration/Paystack";

function Routing({products, cart, handleAddProduct,handleRemove,clearCart,paystack}) {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Products products={products} handleAddProduct={handleAddProduct} />}></Route>
        <Route path="/cart" exact element={<Cart cart={cart} handleAddProduct={handleAddProduct} handleRemove={handleRemove} clearCart = {clearCart} />}></Route>
        <Route path="/paystack" exact element={<Paystack paystack={paystack}/>} ></Route>
      </Routes>
    </div>
  );
}

export default Routing;
