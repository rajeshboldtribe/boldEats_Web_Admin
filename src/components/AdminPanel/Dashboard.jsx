import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalOrders: 0,
    totalSubscriptions: 0,
    totalRevenue: 0,
    recentOrders: []
  });

  useEffect(() => {
    // Fetch dashboard data from your API
    // This is a mock data, replace with actual API call
    const fetchDashboardData = async () => {
      // Mock data
      const data = {
        totalOrders: 150,
        totalSubscriptions: 45,
        totalRevenue: 250000,
        recentOrders: [
          { id: 1, customer: 'John Doe', amount: 1500, date: '2024-03-20' },
          { id: 2, customer: 'Jane Smith', amount: 2500, date: '2024-03-19' },
          // Add more orders as needed
        ]
      };
      setDashboardData(data);
    };

    fetchDashboardData();
  }, []);

  // Function to format currency in Indian Rupees
  const formatIndianRupees = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{dashboardData.totalOrders}</p>
        </div>
        
        <div className="stat-card">
          <h3>Total Subscriptions</h3>
          <p>{dashboardData.totalSubscriptions}</p>
        </div>
        
        <div className="stat-card">
          <h3>Total Revenue</h3>
          <p>{formatIndianRupees(dashboardData.totalRevenue)}</p>
        </div>
      </div>

      <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.recentOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{formatIndianRupees(order.amount)}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard; 