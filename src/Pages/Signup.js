import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaLeaf } from 'react-icons/fa';
import './Profile.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    // Here you would typically make an API call to register the user
    console.log('Form submitted:', formData);
    
    // Store user data (in a real app, you'd get this from your backend)
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('username', formData.username);
    
    // Show success message
    alert('Account created successfully! Welcome to EcoCart!');
    
    // Redirect to home page
    navigate('/home');
  };

  return (
    <div className="profile-container">
      <div className="login-card">
        <div className="eco-icon">
          <FaLeaf style={{ fontSize: '2.5rem', color: '#4caf50' }} />
        </div>
        <h1>Join EcoCart</h1>
        <p className="subtitle">Start your sustainable shopping journey</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>
              <FaUser className="input-icon" /> Username
            </label>
            <input
              type="text"
              name="username"
              className="eco-input"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Choose a username"
            />
          </div>

          <div className="form-group">
            <label>
              <FaEnvelope className="input-icon" /> Email
            </label>
            <input
              type="email"
              name="email"
              className="eco-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>
              <FaLock className="input-icon" /> Password
            </label>
            <input
              type="password"
              name="password"
              className="eco-input"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label>
              <FaLock className="input-icon" /> Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="eco-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </div>

          {error && (
            <div className="error-message" style={{ 
              color: '#d32f2f',
              backgroundColor: '#ffebee',
              padding: '8px 12px',
              borderRadius: '4px',
              marginBottom: '16px',
              fontSize: '0.875rem'
            }}>
              {error}
            </div>
          )}

          <button type="submit" className="eco-button">
            <span className="button-text">Create Account</span>
            <FaLeaf className="button-icon" />
          </button>
        </form>
        
        <div className="signup-link">
          <p>
            Already have an account?{' '}
            <span 
              onClick={() => navigate('/profile')} 
              className="link-text"
              style={{ cursor: 'pointer' }}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup; 