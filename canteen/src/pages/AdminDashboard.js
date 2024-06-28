import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {localStorage.getItem('username')}!</p>
      <ul>
        <li>
          <a href="/users">Manage Users</a>
        </li>
        <li>
          <a href="/products">Manage Products</a>
        </li>
        <li>
          <a href="/orders">Manage Orders</a>
        </li>
        <li>
          <a href="/reports">View Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;