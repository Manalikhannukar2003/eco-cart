import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Analytics from "./Analytics";
import Tasks from "./Tasks";
import Settings from "./Settings";
import { 
  FaLeaf, 
  FaChartLine, 
  FaTasks, 
  FaCog, 
  FaRecycle,
  FaTree,
  FaSeedling,
  FaSun
} from "react-icons/fa";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("dashboard");
  const [isLoading, setIsLoading] = useState(true);
  const [ecoStats, setEcoStats] = useState({
    treesPlanted: 0,
    carbonSaved: 0,
    energySaved: 0
  });

  // Simulate loading and stats counting
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      animateEcoStats();
    }, 1000);
  }, []);

  const animateEcoStats = () => {
    const targetStats = {
      treesPlanted: 1250,
      carbonSaved: 5680,
      energySaved: 3450
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      setEcoStats({
        treesPlanted: Math.round((targetStats.treesPlanted / steps) * currentStep),
        carbonSaved: Math.round((targetStats.carbonSaved / steps) * currentStep),
        energySaved: Math.round((targetStats.energySaved / steps) * currentStep)
      });

      if (currentStep === steps) {
        clearInterval(timer);
      }
    }, interval);
  };

  const renderPage = () => {
    switch (activePage) {
      case "analytics":
        return <Analytics />;
      case "tasks":
        return <Tasks />;
      case "settings":
        return <Settings />;
      default:
        return (
          <div className="eco-dashboard-container">
            <div className="eco-welcome-section">
              <div className="eco-leaf-icon">
                <FaLeaf />
              </div>
              <h1>Welcome to Your Eco-Dashboard</h1>
              <p className="eco-subtitle">Making a positive impact on our planet, one step at a time</p>
            </div>

            <div className="eco-stats-container">
              <div className="eco-stat-card trees">
                <FaTree className="stat-icon" />
                <div className="stat-content">
                  <h3>{ecoStats.treesPlanted.toLocaleString()}</h3>
                  <p>Trees Planted</p>
                </div>
              </div>
              <div className="eco-stat-card carbon">
                <FaRecycle className="stat-icon" />
                <div className="stat-content">
                  <h3>{ecoStats.carbonSaved.toLocaleString()} kg</h3>
                  <p>Carbon Footprint Reduced</p>
                </div>
              </div>
              <div className="eco-stat-card energy">
                <FaSun className="stat-icon" />
                <div className="stat-content">
                  <h3>{ecoStats.energySaved.toLocaleString()} kWh</h3>
                  <p>Energy Saved</p>
                </div>
              </div>
            </div>

            <div className="eco-cards-container">
              {/* Analytics Card */}
              <div className="eco-card analytics-card" onClick={() => navigate('/admindashboard/analytics')}>
                <div className="card-icon">
                  <FaChartLine />
                </div>
                <div className="card-content">
                  <h3>Analytics</h3>
                  <p>Track your eco-friendly metrics and performance insights</p>
                </div>
                <div className="card-arrow">→</div>
              </div>

              {/* Tasks Card */}
              <div className="eco-card tasks-card" onClick={() => navigate('/admindashboard/tasks')}>
                <div className="card-icon">
                  <FaTasks />
                </div>
                <div className="card-content">
                  <h3>Tasks</h3>
                  <p>Manage and track your sustainability initiatives</p>
                </div>
                <div className="card-arrow">→</div>
              </div>

              {/* Settings Card */}
              <div className="eco-card settings-card" onClick={() => navigate('/admindashboard/settings')}>
                <div className="card-icon">
                  <FaCog />
                </div>
                <div className="card-content">
                  <h3>Settings</h3>
                  <p>Customize your eco-dashboard preferences</p>
                </div>
                <div className="card-arrow">→</div>
              </div>
            </div>

           
          </div>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      {isLoading ? (
        <div className="eco-loading">
          <div className="leaf-loader">
            <FaLeaf />
          </div>
          <p>Loading your eco-dashboard...</p>
        </div>
      ) : (
        renderPage()
      )}
    </div>
  );
}

export default AdminDashboard;
