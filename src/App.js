import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import AdminDashboard from "./Pages/AdminDashboard";
import Analytics from "./Pages/Analytics";
import Tasks from "./Pages/Tasks";
import Settings from "./Pages/Settings";
import ProductNav from "./components/ProductNav";
import Skincare from "./Pages/Products/Skincare";
import Haircare from "./Pages/Products/Haircare";
import Food from "./Pages/Products/Food";
import Utensils from "./Pages/Products/Utensils";
import Medicine from "./Pages/Products/Medicine";
import PersonalCare from "./Pages/Products/PersonalCare";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { CartProvider } from './context/CartContext';

// Footer wrapper component to handle conditional rendering
const FooterWrapper = () => {
  const location = useLocation();
  const noFooterPaths = ['/home', '/profile', '/signup'];
  
  if (noFooterPaths.includes(location.pathname)) {
    return null;
  }
  
  return <Footer />;
};

function App() {
  return (
    <Router>
      <CartProvider>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
          <Header />
          <div className="container-fluid py-4" style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/admindashboard/analytics" element={<Analytics />} />
              <Route path="/admindashboard/tasks" element={<Tasks />} />
              <Route path="/admindashboard/settings" element={<Settings />} />
              <Route path="/products" element={<ProductNav />} />
              <Route path="/products/skincare" element={<Skincare />} />
              <Route path="/products/haircare" element={<Haircare />} />
              <Route path="/products/food" element={<Food />} />
              <Route path="/products/utensils" element={<Utensils />} />
              <Route path="/products/medicine" element={<Medicine />} />
              <Route path="/products/personal-care" element={<PersonalCare />} />
            </Routes>
          </div>
          <FooterWrapper />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;