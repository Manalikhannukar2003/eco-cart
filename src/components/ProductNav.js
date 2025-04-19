import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import './ProductNav.css';

const ProductNav = () => {
    return (
        <div className="product-nav-page">
            <div className="nav-header">
                <FaLeaf className="leaf-icon" />
                <h1>Eco-Friendly Categories</h1>
                <p>Choose from our selection of sustainable products</p>
            </div>
            <div className="category-grid">
                {/* Categories will be added here */}
            </div>
        </div>
    );
};

export default ProductNav; 