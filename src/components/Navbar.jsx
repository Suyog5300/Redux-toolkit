import React from 'react';
import { useSelector } from 'react-redux';

function Navbar() {
  const count = useSelector((state) => state.counter.value);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul>
      <button className="cart-button">
        Cart 
        <span className="cart-count">{count}</span>
      </button>
    </nav>
  );
}

export default Navbar;