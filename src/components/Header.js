import React from "react";
import { Link } from "react-router-dom";
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                <span className="nav-icon"></span>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <span className="nav-icon"></span>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admindashboard">
                <span className="nav-icon"></span>
                AdminDashboard
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-auto search-form" role="search">
            <div className="search-wrapper">
              <input
                className="form-control eco-search"
                type="search"
                placeholder="Search eco-friendly products..."
                aria-label="Search"
              />
              <button className="btn eco-search-btn" type="submit">
                <span></span> Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;



