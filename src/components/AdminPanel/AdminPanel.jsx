import React from 'react';
import Dashboard from './Dashboard';
import './AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
  );
};

export default AdminPanel; 