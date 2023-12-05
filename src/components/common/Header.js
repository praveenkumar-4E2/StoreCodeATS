import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <h3>StoreCode</h3>
        </div>
        <div className='links'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
