import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  // Product database - in a real app, this would come from your backend
  const products = [
    {
      id: 1,
      name: "Organic Face Wash",
      category: "skincare",
      price: 24.99,
      path: "/products/skincare"
    },
    {
      id: 2,
      name: "Natural Shampoo",
      category: "haircare",
      price: 19.99,
      path: "/products/haircare"
    },
    {
      id: 3,
      name: "Bamboo Utensils Set",
      category: "utensils",
      price: 29.99,
      path: "/products/utensils"
    },
    {
      id: 4,
      name: "Organic Food Pack",
      category: "food",
      price: 34.99,
      path: "/products/food"
    },
    {
      id: 5,
      name: "Herbal Medicine",
      category: "medicine",
      price: 15.99,
      path: "/products/medicine"
    },
    {
      id: 6,
      name: "Natural Moisturizer",
      category: "skincare",
      price: 22.99,
      path: "/products/skincare"
    },
    {
      id: 7,
      name: "Eco-friendly Conditioner",
      category: "haircare",
      price: 18.99,
      path: "/products/haircare"
    }
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    // Filter products based on search term
    const results = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.category.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(results);
    setShowResults(true);
  };

  const handleResultClick = (product) => {
    setSearchTerm('');
    setShowResults(false);
    navigate(product.path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0]);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search eco-friendly products..."
            className="search-input"
            onFocus={() => setShowResults(true)}
          />
        </div>
        {showResults && searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map(product => (
              <div
                key={product.id}
                className="search-result-item"
                onClick={() => handleResultClick(product)}
              >
                <span className="product-name">{product.name}</span>
                <span className="product-category">{product.category}</span>
                <span className="product-price">${product.price}</span>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar; 