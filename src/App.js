import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AdminDashboard from "./Pages/AdminDashboard";





function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          
        </Routes>
    
      </div>
    </Router>
  );
}

export default App