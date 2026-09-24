import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onProceedToCheckout 
}) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 999;
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <>
      <div 
        className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`} aria-label="Shopping Cart">
        <div className="cart-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={20} color="var(--accent-caramel)" />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>Your Basket</h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
            </span>
          </div>
          <button 
            onClick={onClose} 
            style={{ color: 'var(--text-secondary)', padding: '6px' }}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div style={{ padding: '12px 2rem', background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '6px' }}>
            <span>
              {remainingForFreeShipping === 0 
                ? '🎉 You unlocked Free Refrigerated Delivery!' 
                : `Add ₹${remainingForFreeShipping} more for Free Delivery`}
            </span>
            <span style={{ fontWeight: 600 }}>{Math.round(freeShippingProgress)}%</span>
          </div>
          <div style={{ width: '100%', height: '5px', background: 'var(--border-medium)', borderRadius: '3px', overflow: 'hidden' }}>
            <div 
              style={{ 
                width: `${freeShippingProgress}%`, 
                height: '100%', 
                background: 'var(--accent-caramel)', 
                transition: 'width 0.3s ease' 
              }} 
            />
          </div>
        </div>

        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥐</div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Your basket is empty
              </p>
              <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                Explore our fresh oven-baked selections and indulge in a little joy today.
              </p>
              <button className="btn-secondary" onClick={onClose}>
                Browse Patisserie
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item" style={{ alignItems: 'flex-start' }}>
                  <img src={item.image} alt={item.name} className="summary-thumb" />
                  <div className="summary-info">
                    <p className="summary-name">{item.name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--accent-caramel)', fontWeight: 600, marginTop: '2px' }}>
                      ₹{item.price} each
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-sm)' }}>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          style={{ padding: '4px 8px', color: 'var(--text-secondary)' }}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, minWidth: '22px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          style={{ padding: '4px 8px', color: 'var(--text-secondary)' }}
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        style={{ color: 'var(--text-muted)', marginLeft: 'auto', padding: '4px' }}
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="summary-price">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
              <span style={{ fontWeight: 600, fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>₹{subtotal}</span>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Taxes calculated at checkout. Fresh insulated packaging included.
            </p>
            <button 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
              onClick={onProceedToCheckout}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
