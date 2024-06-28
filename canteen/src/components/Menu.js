// src/components/Menu.js

import React, { useEffect, useState } from 'react';
import { getMenu } from '../services/menuService';
import './styles/Menu.css';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await getMenu();
      setMenu(response.data);
    };

    fetchMenu();
  }, []);

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu-items">
        {menu.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
