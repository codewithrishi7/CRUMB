import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, cartItems, setIsCartOpen, onSelectProductCategory }) {
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div 
        className="brand-logo" 
        onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        role="button"
        tabIndex={0}
      >
        <div className="brand-monogram">C</div>
        <div>
          <span className="brand-title">Crumb &amp; Co.</span>
          <span style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.14em', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '-2px' }}>
            Pâtisserie &amp; Viennoiserie
          </span>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <button 
            className={`nav-link-btn ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Home
          </button>
        </li>
        <li>
          <button 
            className={`nav-link-btn ${activePage === 'products' ? 'active' : ''}`}
            onClick={() => {
              if (onSelectProductCategory) onSelectProductCategory('Cakes');
              setActivePage('products');
            }}
          >
            Cakes
          </button>
        </li>
        <li>
          <button 
            className={`nav-link-btn ${activePage === 'products' ? 'active' : ''}`}
            onClick={() => {
              if (onSelectProductCategory) onSelectProductCategory('Pastries');
              setActivePage('products');
            }}
          >
            Pastries
          </button>
        </li>

        <li>
          <button 
            className={`nav-link-btn ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            About
          </button>
        </li>
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <button 
          className="cart-trigger-btn"
          onClick={() => setIsCartOpen(true)}
          aria-label={`Shopping Cart with ${totalCartCount} items`}
        >
          <ShoppingBag size={17} />
          <span>Cart</span>
          <span className="cart-badge">{totalCartCount}</span>
        </button>
      </div>
    </nav>
  );
}
