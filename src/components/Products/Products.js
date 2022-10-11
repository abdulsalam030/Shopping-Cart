import React from "react";
import "../Products/Products.css";

function Products({ products, handleAddProduct }) {
  console.log(products);
  return (
    <div className="products">
      {products.map((product) => (
        <div className="card">
          <div className="innerCard">
            <div className="imageBox">
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
                height="inherit"
              />
            </div>

            <div>
              <h3 className="product-name">{product.name}</h3>
            </div>

            <div className="product-price">${product.cost}</div>

            <div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
