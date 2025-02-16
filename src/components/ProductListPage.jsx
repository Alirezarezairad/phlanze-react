import React, { useState } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import './ProductListPage.css';

// Beispielhafte Produktdaten – passe diese nach Bedarf an oder lade sie von einer API
const productsData = [
  {
    id: 1,
    name: 'Monstera',
    price: 20,
    description: 'Eine tropische Schönheit, die jedem Raum Leben verleiht.',
    categories: ['luftreinigend', 'dekoration'],
    image: '/assets/images/monstera.webp'
  },
  {
    id: 1,
    name: 'smart pflanze',
    price: 80,
    description: 'Eine tropische Schönheit, die jedem Raum Leben verleiht.',
    categories: ['luftreinigend', 'dekoration'],
    image: '/assets/images/3.webp'
  },
  {
    id: 1,
    name: 'Künstliche Pflanzen',
    price: 20,
    description: 'Eine tropische Schönheit, die jedem Raum Leben verleiht.',
    categories: ['luftreinigend', 'dekoration'],
    image: '/assets/images/2.jpg'
  },
  {
    id: 1,
    name: 'Zimmerpflanzen',
    price: 20,
    description: 'Eine tropische Schönheit, die jedem Raum Leben verleiht.',
    categories: ['luftreinigend', 'dekoration'],
    image: '/assets/images/images.jpeg'
  },
  // Weitere Produkte können hier hinzugefügt werden...
];

function ProductListPage() {
  // Zustand für den Warenkorb (nur exemplarisch: hier wird nur die Anzahl verwaltet)
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId) => {
    setCartItems(prev => {
      const newQuantity = (prev[productId] || 0) + 1;
      return { ...prev, [productId]: newQuantity };
    });
  };

  // Gesamtanzahl der Artikel für das Header-Symbol
  const totalCartCount = Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);

  return (
    <div className="product-list-page">
      <Header cartCount={totalCartCount} />
      <div className="product-list">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
