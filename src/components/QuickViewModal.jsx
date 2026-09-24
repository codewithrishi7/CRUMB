import React from 'react';
import { X, ShoppingBag, Star, Check } from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ textAlign: 'left', maxWidth: '780px', padding: 0, overflow: 'hidden' }}
      >
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)', borderRadius: '50%', padding: '6px', color: 'var(--text-primary)' }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 1.2fr' }}>
          <div style={{ background: 'var(--bg-subtle)', position: 'relative', minHeight: '340px' }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            {product.badge && (
              <span className="product-card-badge" style={{ top: '16px', left: '16px' }}>
                {product.badge}
              </span>
            )}
          </div>

          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
            <span className="small-caps" style={{ color: 'var(--accent-caramel)', marginBottom: '4px' }}>
              {product.category} • Handcrafted Daily
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', lineHeight: '1.2', marginBottom: '0.75rem' }}>
              {product.name}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-caramel)' }}>
                {product.formattedPrice}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div style={{ display: 'flex', color: 'var(--accent-caramel)' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {product.description}
            </p>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              <div><strong>Portion / Weight:</strong> {product.weight}</div>
              <div><strong>Chef:</strong> {product.bakedBy}</div>
              <div><strong>Allergens:</strong> {product.allergens}</div>
              <div><strong>Best Pairing:</strong> {product.pairing}</div>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
              <button 
                className="btn-primary" 
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                <ShoppingBag size={16} />
                <span>Add to Basket — {product.formattedPrice}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
