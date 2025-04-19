import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChartLine, FaTasks, FaCog } from 'react-icons/fa';
import './AdminNav.css';

const AdminNav = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="admin-nav">
            <Link 
                to="/admindashboard" 
                className={`nav-item ${currentPath === '/admindashboard' ? 'active' : ''}`}
            >
                <FaHome /> Dashboard
            </Link>
            <Link 
                to="/admindashboard/analytics" 
                className={`nav-item ${currentPath === '/admindashboard/analytics' ? 'active' : ''}`}
            >
                <FaChartLine /> Analytics
            </Link>
            <Link 
                to="/admindashboard/tasks" 
                className={`nav-item ${currentPath === '/admindashboard/tasks' ? 'active' : ''}`}
            >
                <FaTasks /> Tasks
            </Link>
            <Link 
                to="/admindashboard/settings" 
                className={`nav-item ${currentPath === '/admindashboard/settings' ? 'active' : ''}`}
            >
                <FaCog /> Settings
            </Link>
        </nav>
    );
};

export default AdminNav; 