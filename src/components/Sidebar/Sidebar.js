import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default (state) => {
  return (
    <Menu {...state}>
      <Link to="/">Мои доставки</Link>
      <Link to="/meal/:id">Meal2</Link>
      <Link to="/favorite">Favorite</Link>
    </Menu>
  );
};