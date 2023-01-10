import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import "../PaystackIntegration/Paystack.css";
import { PaystackButton } from "@paystack/inline-js";

function Paystack() {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div className="App">
        <div className="container">
          <div className="item">
            <div className="overlay-effect"></div>
            <img
              className="item-image"
              src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="product"
            />
          </div>
          <div className="checkout">
            <div className="checkout-form">
              <div className="checkout-field">
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                />
              </div>
              <div className="checkout-field">
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                />
              </div>
              <div className="checkout-field">
                <label>Amount</label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  id="amount"
                />
              </div>
              <div className="checkout-field">
                <label>Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  id="phoneno"
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="paystack-button">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paystack;
