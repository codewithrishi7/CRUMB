import React from 'react';
import { ShoppingBag, Star, Eye } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  return (
    <article className="product-card" id={`product-${product.id}`}>
      <div className="product-card-media" onClick={() => onQuickView(product)} style={{ cursor: 'pointer' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-card-img"
          loading="lazy"
        />
        {product.badge && (
          <span className="product-card-badge">{product.badge}</span>
        )}
      </div>

      <div className="product-card-body">
        <div className="product-card-header">
          <h3 
            className="product-card-title" 
            onClick={() => onQuickView(product)}
            style={{ cursor: 'pointer' }}
          >
            {product.name}
          </h3>
          <span className="product-card-price">{product.formattedPrice}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', color: 'var(--accent-caramel)' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill="currentColor" />
            ))}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>

        <p className="product-card-desc">
          {product.description}
        </p>

        <div className="product-card-tags">
          {product.tastingNotes.map((note, index) => (
            <span key={index} className="flavor-tag">
              {note}
            </span>
          ))}
        </div>

        <div className="product-card-actions">
          <button 
            className="btn-primary" 
            style={{ flex: 1, justifyContent: 'center' }}
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={16} />
            <span>Add to Cart</span>
          </button>

          <button 
            className="btn-secondary" 
            style={{ padding: '10px 14px' }}
            onClick={() => onQuickView(product)}
            aria-label={`Quick view ${product.name}`}
            title="Quick Details"
          >
            <Eye size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
