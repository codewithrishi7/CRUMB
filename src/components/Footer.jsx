import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="font-serif">Crumb &amp; Co.</h3>
          <p>
            An artisanal atelier dedicated to European viennoiserie, layered celebration cakes, and seasonal fruit tarts. Baked fresh daily in small batches with honest ingredients.
          </p>
          <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: '#B87D4B', fontWeight: 600 }}>
            “Baked Fresh, Served Beautiful”
          </div>
        </div>

        <div className="footer-col">
          <h4>Pâtisserie</h4>
          <ul>
            <li><button onClick={() => onNavigate('products', 'Cakes')}>Celebration Cakes</button></li>
            <li><button onClick={() => onNavigate('products', 'Pastries')}>Artisan Croissants</button></li>
            <li><button onClick={() => onNavigate('products', 'Pastries')}>Seasonal Fruit Tarts</button></li>
            <li><button onClick={() => onNavigate('products', 'Cakes')}>Haute Entremets</button></li>
            <li><button onClick={() => onNavigate('products', 'All')}>Full Daily Menu</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Atelier</h4>
          <ul>
            <li><button onClick={() => onNavigate('about')}>Our Story &amp; Philosophy</button></li>
            <li><span>42 Heritage Lane, French Quarters</span></li>
            <li><span>Tuesday – Sunday: 7:30 AM – 8:00 PM</span></li>
            <li><span>order@crumbandco.com</span></li>
            <li><span>+91 98200 45678</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>The Sunday Bake</h4>
          <p style={{ fontSize: '0.825rem', color: '#9C958C', marginBottom: '1rem', lineHeight: 1.5 }}>
            Join our private dispatch for secret weekend menu specials, tasting invitations, and seasonal harvests.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Merci! You are now subscribed to The Sunday Bake.'); }} style={{ display: 'flex', gap: '6px' }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              style={{ flex: 1, padding: '9px 12px', background: '#221F1B', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-sm)', color: '#fff', fontSize: '0.8rem', outline: 'none' }}
            />
            <button 
              type="submit" 
              className="btn-primary" 
              style={{ padding: '9px 14px', fontSize: '0.75rem' }}
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div>&copy; {new Date().getFullYear()} Crumb &amp; Co. Patisserie. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <span>Privacy Policy</span>
          <span>Terms of Delivery</span>
          <span>FSSAI Certified Bakery</span>
        </div>
      </div>
    </footer>
  );
}
