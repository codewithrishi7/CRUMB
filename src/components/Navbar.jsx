import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, ChevronDown, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function Navbar({ activePage, setActivePage, cartItems, setIsCartOpen, onSelectProductCategory }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

        {/* Menu Dropdown */}
        <li className="menu-dropdown-wrapper" ref={dropdownRef}>
          <button 
            className="nav-link-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span>Menu</span>
            <ChevronDown size={14} style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
          </button>

          {isMenuOpen && (
            <div className="menu-dropdown">
              <div style={{ padding: '6px 18px 8px 18px', borderBottom: '1px solid var(--border-light)' }}>
                <span className="small-caps" style={{ color: 'var(--accent-caramel)' }}>Signature Selection</span>
              </div>
              {PRODUCTS.map(product => (
                <button
                  key={product.id}
                  className="dropdown-item"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActivePage('products');
                    if (onSelectProductCategory) onSelectProductCategory('All');
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem' }}>{product.shortName}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-caramel)', fontWeight: 600 }}>{product.formattedPrice}</span>
                </button>
              ))}
              <div style={{ borderTop: '1px solid var(--border-light)', marginTop: '4px', paddingTop: '6px' }}>
                <button
                  className="dropdown-item"
                  style={{ fontWeight: 600, color: 'var(--text-primary)' }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActivePage('products');
                    if (onSelectProductCategory) onSelectProductCategory('All');
                  }}
                >
                  View All Products →
                </button>
              </div>
            </div>
          )}
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
