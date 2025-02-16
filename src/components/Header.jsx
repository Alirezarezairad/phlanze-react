import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ cartCount }) {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">
          <img src="/assets/images/logo.jpg" alt="Paradise Nursery" />
        </Link>
      </div>
      <div className="slogan">
        <h2>Ihr Paradies für Zimmerpflanzen</h2>
      </div>
      <div className="cart-icon" onClick={() => navigate('/cart')}>
        <img src="/assets/images/card.jpg" alt="Warenkorb" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </header>
  );
}

export default Header;
