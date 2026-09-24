import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function ProductsPage({ initialCategory = 'All', onAddToCart, onQuickView }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const categories = ['All', 'Cakes', 'Pastries'];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="page-container" id="products-catalog">
      <div className="page-header">
        <p className="small-caps page-pretitle">The Fresh Bake Counter</p>
        <h1 className="page-title">Handcrafted Cakes &amp; Pastries</h1>
        <p className="page-description">
          Each item is baked in small daily batches using unadulterated European butter, real dairy cream, and single-origin chocolate.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="products-filter-bar">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'All' ? 'All Creations' : category}
          </button>
        ))}
      </div>

      {/* Grid of Items */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onQuickView={onQuickView}
          />
        ))}
      </div>

      <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
          Custom Celebration &amp; Wedding Cakes
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '560px', margin: '0 auto 1.5rem auto' }}>
          Planning a wedding or private gathering? Our pastry chefs design bespoke tiered centrepieces and custom dessert tables with 48 hours notice.
        </p>
        <button 
          className="btn-secondary" 
          onClick={() => alert('Please email orders@crumbandco.com or WhatsApp +91 98200 45678 for bespoke cake consultations.')}
        >
          Enquire for Custom Orders
        </button>
      </div>
    </div>
  );
}
