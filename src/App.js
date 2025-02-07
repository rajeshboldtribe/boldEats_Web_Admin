import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Dashboard from './components/AdminPanel/Dashboard';
import Users from './components/AdminPanel/Users';
import Orders from './components/AdminPanel/Orders';
import './App.css';
import Subscription from './screens/Subscription';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<AdminPanel />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/subscription" element={<Subscription />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
