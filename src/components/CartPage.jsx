import React, { useState } from 'react';
import Header from './Header';
import './CartPage.css';

function CartPage() {
  // Beispielhafter initialer Warenkorb – in einer echten Anwendung werden hier die von der Produktliste übergebenen Daten genutzt
  const [cart, setCart] = useState({
    1: { quantity: 2, price: 20, name: 'Monstera', image: '/assets/images/monstera.jpg' }
    // Weitere Artikel können hier ergänzt werden...
  });

  const increaseQuantity = (productId) => {
    setCart(prev => {
      const item = prev[productId];
      return { ...prev, [productId]: { ...item, quantity: item.quantity + 1 } };
    });
  };

  const decreaseQuantity = (productId) => {
    setCart(prev => {
      const item = prev[productId];
      if (item.quantity <= 1) {
        const { [productId]: removed, ...rest } = prev;
        return rest;
      } else {
        return { ...prev, [productId]: { ...item, quantity: item.quantity - 1 } };
      }
    });
  };

  const removeItem = (productId) => {
    setCart(prev => {
      const { [productId]: removed, ...rest } = prev;
      return rest;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = Object.values(cart).reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="cart-page">
      <Header cartCount={totalItems} />
      <div className="cart-content">
        {Object.keys(cart).length === 0 ? (
          <p>Ihr Warenkorb ist leer.</p>
        ) : (
          Object.entries(cart).map(([id, item]) => (
            <div key={id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Einzelpreis: {item.price}€</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(id)}>+</button>
                </div>
                <p>Zwischensumme: {item.quantity * item.price}€</p>
              </div>
              <button className="remove-item" onClick={() => removeItem(id)}>
                Löschen
              </button>
            </div>
          ))
        )}
      </div>
      {Object.keys(cart).length > 0 && (
        <div className="cart-summary">
          <h3>Gesamte Artikel: {totalItems}</h3>
          <h3>Gesamtkosten: {totalCost}€</h3>
          <button className="checkout-button">Bezahlen</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
