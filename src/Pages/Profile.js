import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically validate credentials with your backend
    console.log("Email:", email);
    console.log("Password:", password);
    
    // For now, we'll simulate a successful login
    if (email && password) {
      // You would typically store the user token/session here
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      
      // Show success message
      alert("Logged in successfully!");
      
      // Redirect to home page
      navigate('/home');
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="profile-container">
      <div className="login-card">
        <div className="eco-icon">🌱</div>
        <h1>Welcome Back</h1>
        <p className="subtitle">Login to your eco-friendly account</p>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="eco-input"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="eco-input"
            />
          </div>
          <button type="submit" className="eco-button">
            <span className="button-text">Login</span>
            <span className="button-icon">🌿</span>
          </button>
        </form>
        
        <div className="signup-link">
          <p>
            Don't have an account?{" "}
            <span 
              onClick={() => navigate("/signup")} 
              className="link-text"
              style={{ cursor: 'pointer' }}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
