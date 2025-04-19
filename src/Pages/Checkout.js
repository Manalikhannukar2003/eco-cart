import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;
  const [paymentClient, setPaymentClient] = useState(null);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate('/');
      return;
    }

    // Initialize Google Pay client
    if (window.google?.payments?.api) {
      const client = new window.google.payments.api.PaymentsClient({
        environment: 'TEST' // Change to 'PRODUCTION' when going live
      });

      // Check if Google Pay is available
      const isReadyToPayRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA']
          }
        }]
      };

      client.isReadyToPay(isReadyToPayRequest)
        .then((response) => {
          if (response.result) {
            setPaymentClient(client);
          } else {
            console.log('Google Pay is not available');
          }
        })
        .catch((err) => {
          console.error('Google Pay client initialization error:', err);
        });
    }
  }, [navigate, product]);

  const handlePayment = async () => {
    if (!paymentClient) {
      alert('Google Pay is not available. Please try another payment method.');
      return;
    }

    setIsPaymentLoading(true);

    try {
      const paymentDataRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
            billingAddressRequired: true,
            billingAddressParameters: {
              format: 'FULL',
              phoneNumberRequired: true
            }
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId'
            }
          }
        }],
        merchantInfo: {
          merchantId: '12345678901234567890', // Replace with your merchant ID
          merchantName: 'Eco Cart'
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPrice: product.price.toFixed(2),
          currencyCode: 'INR',
          countryCode: 'IN'
        },
        callbackIntents: ['PAYMENT_AUTHORIZATION']
      };

      const paymentData = await paymentClient.loadPaymentData(paymentDataRequest);
      
      // Here you would typically send the paymentData to your backend
      // for processing with your payment processor
      console.log('Payment successful', paymentData);
      
      // Show success message
      alert('Payment successful! Your order has been placed.');
      
      // Navigate to order tracking
      navigate('/order-tracking', { 
        state: { 
          orderId: 'ORD' + Date.now(),
          product: product
        }
      });
    } catch (err) {
      console.error('Payment failed:', err);
      if (err.statusCode === 'CANCELED') {
        alert('Payment was canceled. Please try again.');
      } else {
        alert('Payment failed. Please try another payment method or try again later.');
      }
    } finally {
      setIsPaymentLoading(false);
    }
  };

  const handleCashOnDelivery = () => {
    // Here you would typically create an order in your backend
    alert('Order placed successfully! You will pay ₹' + product.price.toFixed(2) + ' on delivery.');
    navigate('/order-tracking', { 
      state: { 
        orderId: 'ORD' + Date.now(),
        product: product,
        paymentMethod: 'COD'
      }
    });
  };

  if (!product) {
    return null;
  }

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="product-details">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
            {product.sustainabilityRatings && (
              <div className={`eco-badge ${
                product.sustainabilityRatings.overallRating >= 7
                  ? 'high'
                  : product.sustainabilityRatings.overallRating >= 4
                  ? 'medium'
                  : 'low'
              }`}>
                {product.sustainabilityRatings.overallRating.toFixed(1)}
              </div>
            )}
          </div>
          <div className="product-info">
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="sustainability-ratings">
              <div className="rating-item">
                <span>Biodegradability:</span>
                <span className="rating-value">{product.sustainabilityRatings.biodegradability}/10</span>
              </div>
              <div className="rating-item">
                <span>Sustainability:</span>
                <span className="rating-value">{product.sustainabilityRatings.sustainability}/10</span>
              </div>
              <div className="rating-item">
                <span>Recyclability:</span>
                <span className="rating-value">{product.sustainabilityRatings.recyclability}/10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Product Price</span>
            <span>₹{product.price.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{product.price.toFixed(2)}</span>
          </div>

          <div className="payment-actions">
            <button 
              className="pay-now-button"
              onClick={handlePayment}
              disabled={!paymentClient || isPaymentLoading}
            >
              {isPaymentLoading ? 'Processing...' : 'Pay Now with Google Pay'}
            </button>
            <button 
              className="cod-button"
              onClick={handleCashOnDelivery}
              disabled={isPaymentLoading}
            >
              Cash on Delivery
            </button>
            <button 
              className="back-button"
              onClick={() => navigate(-1)}
              disabled={isPaymentLoading}
            >
              Back to Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout; 