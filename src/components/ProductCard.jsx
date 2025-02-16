import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product.id);
    setAdded(true);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price}€</p>
      <button onClick={handleAdd} disabled={added}>
        {added ? 'CA' : 'Zum Einkaufswagen hinzufügen'}
      </button>
    </div>
  );
}

export default ProductCard;
