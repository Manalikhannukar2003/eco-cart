import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './ProductCategory.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);
    const navigate = useNavigate();

    const getBadgeColor = (rating) => {
        if (rating >= 7) return 'green';
        if (rating >= 4) return 'yellow';
        return 'red';
    };

    const getBadgeTooltip = (type, rating) => {
        const labels = {
            biodegradability: 'Biodegradability Score',
            sustainability: 'Sustainability Score',
            recyclability: 'Recyclability Score'
        };
        return `${labels[type]}: ${rating}/10`;
    };

    const handleAddToCart = () => {
        // Format the product data consistently
        const cartProduct = {
            id: product.id.toString(),
            _id: product.id.toString(),
            name: product.name,
            price: parseFloat(product.price),
            image: product.image,
            description: product.description,
            sustainabilityRatings: {
                biodegradability: product.biodegradability,
                sustainability: product.sustainability,
                recyclability: product.recyclability,
                overallRating: (product.biodegradability + product.sustainability + product.recyclability) / 3
            }
        };

        addToCart(cartProduct);
        
        // Show visual feedback
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1000);
    };

    const handleBuyNow = () => {
        const checkoutProduct = {
            id: product.id.toString(),
            name: product.name,
            price: parseFloat(product.price),
            image: product.image,
            description: product.description,
            sustainabilityRatings: {
                biodegradability: product.biodegradability,
                sustainability: product.sustainability,
                recyclability: product.recyclability,
                overallRating: (product.biodegradability + product.sustainability + product.recyclability) / 3
            }
        };
        
        navigate('/checkout', { state: { product: checkoutProduct } });
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="sustainability-badges">
                    <span 
                        className={`badge ${getBadgeColor(product.biodegradability)}`} 
                        title={getBadgeTooltip('biodegradability', product.biodegradability)}
                    >
                        B
                    </span>
                    <span 
                        className={`badge ${getBadgeColor(product.sustainability)}`}
                        title={getBadgeTooltip('sustainability', product.sustainability)}
                    >
                        S
                    </span>
                    <span 
                        className={`badge ${getBadgeColor(product.recyclability)}`}
                        title={getBadgeTooltip('recyclability', product.recyclability)}
                    >
                        R
                    </span>
                </div>
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">₹{product.price}</div>
                <div className="product-actions">
                    <button 
                        className={`btn-add-cart ${isAdded ? 'added' : ''}`} 
                        onClick={handleAddToCart}
                    >
                        {isAdded ? 'Added ✓' : 'Add to Cart'}
                    </button>
                    <button 
                        className="btn-buy-now"
                        onClick={handleBuyNow}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProductCategory = ({ category, icon, description, products = [] }) => {
    return (
        <div className="product-category-container">
            <div className="category-header">
                <div className="category-icon">{icon}</div>
                <h1>{category}</h1>
            </div>
            <p className="category-description">{description}</p>
            
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductCategory; 