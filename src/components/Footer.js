import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          {/* About Us */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              About Us
            </h5>
            <p>
              Welcome to EcoCart, your go-to destination for sustainable and
              eco-friendly shopping! Our mission is to promote environmentally
              responsible choices while providing top-notch deals and seamless
              shopping experiences.
            </p>
          </div>

          {/* Contact Us */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact Us
            </h5>
            <p>
              <i className="fas fa-envelope me-3"></i> support@ecocart.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i> +1 234 567 890
            </p>
            <p>
              <i className="fas fa-map-marker-alt me-3"></i> 123 Green Street,
              EcoCity
            </p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Follow Us
            </h5>
            <a href="#" className="text-white me-4">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white me-4">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white me-4">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white me-4">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Website Name and Logo */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              © 2025 <strong>EcoCart</strong>. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-5 col-lg-4 text-center">
            <a href="#">
              <img
                src="https://via.placeholder.com/150x50?text=EcoCart+Logo"
                alt="EcoCart Logo"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;