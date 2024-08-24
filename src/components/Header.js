import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/images/logo.svg" alt="KFZ Logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bookstore">Book Store</Link></li>
          <li><Link to="/about">About KFZ</Link></li>
          <li><Link to="/contact">Contact KFZ</Link></li>
          <li><Link to="/help">Help & Support</Link></li>
        </ul>
      </nav>
      <div className="user-actions">
        <button className="cart-button">
          <img src="/assets/images/cart.svg" alt="Cart" />
        </button>
        <button className="login-button">Login/Signup</button>
      </div>
    </header>
  );
}

export default Header;