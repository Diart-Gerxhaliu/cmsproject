import React from 'react';
import HeaderCustomizer from '../components/HeaderCustomizer';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li>Dashboard Home</li>
            <li>Header Customization</li>
            <li>Content Management</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
      <div className="dashboard-main">
        <div className="customization-section">
          <h1>Header Customization</h1>
          <p>Choose from 9 different header styles to customize your website's appearance</p>
          <HeaderCustomizer />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
