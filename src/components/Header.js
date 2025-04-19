import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg eco-navbar">
      <div className="eco-leaf-bg"></div>
      <div className="container-fluid">
        <Link className="navbar-brand eco-brand" to="/home">
          <span className="leaf-icon">🌿</span>
          EcoCart
          <span className="seedling-icon">🌱</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                <span className="nav-icon"></span>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="nav-icon">🛍️</span>
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/products/skincare">
                    <span className="category-icon"></span> Skin Care
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/haircare">
                    <span className="category-icon"></span> Shampoo
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/food">
                    <span className="category-icon"></span> Food
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/utensils">
                    <span className="category-icon"></span> Bamboo Utensils
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/medicine">
                    <span className="category-icon"></span> Medicine
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/personal-care">
                    <span className="category-icon"></span> Personal Care
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="/products">
                    <span className="category-icon"></span> View All Categories
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <span className="nav-icon">👤</span>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admindashboard">
                <span className="nav-icon">⚙️</span>
                AdminDashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <span className="nav-icon">🛒</span>
                Cart
              </Link>
            </li>
          </ul>
          <div className="search-wrapper">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;



