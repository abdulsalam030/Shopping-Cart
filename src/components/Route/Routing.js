import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

function Routing({products, cart, handleAddProduct,handleRemove,clearCart}) {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Products products={products} handleAddProduct={handleAddProduct} />}></Route>
        <Route path="/cart" exact element={<Cart cart={cart} handleAddProduct={handleAddProduct} handleRemove={handleRemove} clearCart = {clearCart} />}></Route>
      </Routes>
    </div>
  );
}

export default Routing;
