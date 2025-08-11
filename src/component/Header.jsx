import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css"; // Assuming you have a CSS file for styling

export default function Header({ searchTerm, setSearchTerm, cartCount }) {
  return (
    <header>
      {/* Title */}
      <Link to="/">
        <h1>🛒 Product Store</h1>
      </Link>

      {/* Search + Cart Button */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/cart">
          <button className="cart-btn">
            Cart <span>{cartCount}</span>
          </button>
        </Link>
      </div>
    </header>
  );
}
