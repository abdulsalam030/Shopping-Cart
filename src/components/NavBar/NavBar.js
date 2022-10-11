import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

function NavBar({ cart }) {
  return (
    <nav className="navbar">
      <div>
        <h1>
          <Link to="/" className="symbol">
            Shop
          </Link>
        </h1>
      </div>

      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/cart" className="cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-number">
                {cart.length === 0 ? "" : cart.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
