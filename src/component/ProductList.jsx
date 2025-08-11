import React from "react";
import "../Styles/ProductList.css"; // Assuming you have a CSS file for styling

export default function ProductList({ products, handleAddToCart }) {
  return (
    <div className="products-container">
      <h2 className="products-title">Products</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <strong>{product.title}</strong>
              <p>${product.price}</p>
            </div>
            <button
              className="add-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
