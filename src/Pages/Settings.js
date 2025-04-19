import React, { useState, useEffect } from 'react';
import AdminNav from '../components/AdminNav';
import { FaUser, FaBell, FaMoon, FaLeaf, FaCheck, FaTimes } from 'react-icons/fa';
import './Settings.css';

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState({ text: '', type: '' });

    // Load user settings on component mount
    useEffect(() => {
        loadUserSettings();
    }, []);

    const loadUserSettings = async () => {
        try {
            // In a real app, this would be an API call
            const savedSettings = localStorage.getItem('userSettings');
            if (savedSettings) {
                const settings = JSON.parse(savedSettings);
                setUsername(settings.username || '');
                setEmail(settings.email || '');
                setDarkMode(settings.darkMode || false);
                setNotifications(settings.notifications || true);
            }
        } catch (error) {
            console.error('Error loading settings:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Validate inputs
            if (!username.trim() || !email.trim()) {
                setMessage({ text: 'Please fill in all fields', type: 'error' });
                return;
            }

            if (!email.includes('@')) {
                setMessage({ text: 'Please enter a valid email', type: 'error' });
                return;
            }

            // Save settings
            const settings = {
                username,
                email,
                darkMode,
                notifications
            };

            // In a real app, this would be an API call
            localStorage.setItem('userSettings', JSON.stringify(settings));

            // Show success message
            setMessage({ text: 'Settings saved successfully!', type: 'success' });

            // Clear message after 3 seconds
            setTimeout(() => {
                setMessage({ text: '', type: '' });
            }, 3000);

        } catch (error) {
            console.error('Error saving settings:', error);
            setMessage({ text: 'Error saving settings', type: 'error' });
        }
    };

    return (
        <div className="settings-page">
            <AdminNav />
            <div className={`settings-container ${darkMode ? 'dark-mode' : ''}`}>
                <h1 className="settings-title">
                    <FaLeaf className="leaf-icon" /> Settings
                </h1>

                {message.text && (
                    <div className={`message-toast ${message.type}`}>
                        {message.type === 'success' ? <FaCheck /> : <FaTimes />}
                        {message.text}
                    </div>
                )}

                <div className="settings-card">
                    <h2><FaUser /> Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                            />
                        </div>
                        <button type="submit" className="save-button">
                            Save Changes
                        </button>
                    </form>
                </div>

                <div className="settings-card">
                    <h2><FaBell /> Preferences</h2>
                    <div className="toggle-group">
                        <label>
                            Notifications
                            <div 
                                className={`toggle ${notifications ? 'active' : ''}`}
                                onClick={() => setNotifications(!notifications)}
                            >
                                <div className="toggle-slider"></div>
                            </div>
                        </label>
                    </div>
                    <div className="toggle-group">
                        <label>
                            Dark Mode
                            <div 
                                className={`toggle ${darkMode ? 'active' : ''}`}
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                <div className="toggle-slider"></div>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="eco-stats">
                    <div className="stat-card">
                        <FaLeaf className="stat-icon" />
                        <div className="stat-info">
                            <h3>Eco Score</h3>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '75%' }}></div>
                            </div>
                            <span>75 points</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
