import React from 'react';

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Welcome, {localStorage.getItem('username')}!</p>
      <ul>
        <li>
          <a href="/orders">My Orders</a>
        </li>
        <li>
          <a href="/account">Account Settings</a>
        </li>
        <li>
          <a href="/help">Help & Support</a>
        </li>
      </ul>
    </div>
  );
};

export default UserDashboard;