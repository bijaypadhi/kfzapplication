import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/images/logo.svg" alt="KFZ Logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#book-store">Book Store</a></li>
          <li><a href="#about">About KFZ</a></li>
          <li><a href="#contact">Contact KFZ</a></li>
          <li><a href="#help">Help & Support</a></li>
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