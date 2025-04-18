import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          EcoCart
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
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admindashboard">
                AdminDashboard
              </Link>
            </li>
            
          </ul>
          <form className="d-flex ms-auto" role="search">
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button className="btn btn-outline-danger" type="submit">
      Search
    </button>
  </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;



