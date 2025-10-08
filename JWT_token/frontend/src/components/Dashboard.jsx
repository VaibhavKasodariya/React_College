import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { signOut } from '../services/api';
import './Auth.css';

const Dashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    setUser(null);
    navigate('/signin');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Welcome to Dashboard</h2>
        <div className="user-info">
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;