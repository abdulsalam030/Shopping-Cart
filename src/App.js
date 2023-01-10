import "./App.css";
import React, { useState } from "react";
import data from "./components/Data/Data";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Route/Routing";
import Paystack from "./components/PaystackIntegration/Paystack";
function App() {
  const [cart, setCart] = useState([]);
  const { products } = data;

  const handleAddProduct = (cartproduct) => {
    const ProductExisting = cart.find((item) => item.id === cartproduct.id);
    console.log(ProductExisting);
    if (ProductExisting) {
      setCart(
        cart.map((item) =>
          item.id === cartproduct.id
            ? { ...ProductExisting, quantity: ProductExisting.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...cartproduct, quantity: 1 }]);
    }
  };

  const handleRemove = (cartproduct) => {
    const ProductExisting = cart.find((item) => item.id === cartproduct.id);
    if (ProductExisting.quantity === 1) {
      setCart(cart.filter((item) => item.id !== cartproduct.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === cartproduct.id
            ? { ...ProductExisting, quantity: ProductExisting.quantity - 1 }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  
  return (
    <div className="App">
      <Router>
        <NavBar cart={cart} />
        <Routing
          paystack={Paystack}
          products={products}
          cart={cart}
          handleAddProduct={handleAddProduct}
          handleRemove={handleRemove}
          clearCart={clearCart}
        />
      </Router>
    </div>
  );
}

export default App;
