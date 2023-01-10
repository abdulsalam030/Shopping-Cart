import React from "react";
import "../Cart/Cart.css";
import Swal from "sweetalert2";
import "animate.css";
import "../PaystackIntegration/Paystack";

function Cart({ cart, handleAddProduct, handleRemove, clearCart, Pay }) {
  const showAlert = () => {
    Swal.fire({
      title: "Order Placed Successfully",
      icon: "success",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  const totalPrice = cart.reduce(
    (cost, carts) => cost + carts.quantity * carts.cost,
    0
  );
  return (
    <div className="cart-items">
      <div className="cart-items-heaader">Cart Items</div>
      <div className="cart-clearance">
        {cart.length >= 1 && <button onClick={clearCart}>Clear Cart</button>}
      </div>

      {cart.length === 0 && <div className="cart-empty">No items in Cart</div>}

      <div>
        {cart.map((carts) => (
          <div key={carts.id} className="cart-list">
            <img className="cart-image" src={carts.image} alt={carts.name} />
            <div className="cart-name">{carts.name}</div>
            <div className="cart-buttons">
              <button
                className="cart-add"
                onClick={() => handleAddProduct(carts)}
              >
                +
              </button>
              <button
                className="cart-remove"
                onClick={() => handleRemove(carts)}
              >
                -
              </button>
            </div>
            <div className="cart-price">
              {carts.quantity} x {carts.cost}
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total-name">
        Total price
        <div className="cart-total">${totalPrice}</div>
      </div>

      <div className="order">
        {cart.length === 0 ? "" : <button onClick={Pay}>Place Order</button>}
      </div>
    </div>
  );
}

export default Cart;
