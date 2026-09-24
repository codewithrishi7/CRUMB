import React from 'react';
import DiscCarousel from '../components/DiscCarousel';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { ArrowRight, Sparkles, Clock, Heart, Award, ShieldCheck } from 'lucide-react';

export default function HomePage({ onAddToCart, onNavigate, onQuickView }) {
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="homepage-wrapper">
      {/* 1. HERO SECTION WITH DISC CAROUSEL */}
      <DiscCarousel 
        onAddToCart={onAddToCart}
        onNavigateToProduct={(product) => onQuickView(product)}
        onExploreMenu={() => onNavigate('products')}
      />

      {/* 2. BANNER / CTA STRIP BELOW THE HERO (As requested in brief) */}
      <section className="hero-cta-strip" id="hero-cta-strip">
        <div className="cta-strip-text">
          <span className="cta-strip-tagline">
            “Baked Fresh, Served Beautiful”
          </span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span className="cta-strip-detail">
            Daily Small Batches • 100% Pure Butter &amp; Real Cream • Same-Day Chilled Delivery
          </span>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button 
            className="btn-primary" 
            onClick={() => onNavigate('products')}
            id="hero-shop-now-cta"
          >
            <span>Shop Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 3. EDITORIAL MARQUEE STRIP */}
      <div className="editorial-marquee" aria-hidden="true">
        <div className="marquee-content">
          HANDCRAFTED IN SMALL BATCHES &nbsp;•&nbsp; 72-HOUR LAMINATED CROISSANTS &nbsp;•&nbsp; 70% BELGIAN COUVERTURE CHOCOLATE &nbsp;•&nbsp; FRESH MAHABALESHWAR STRAWBERRIES &nbsp;•&nbsp; VALRHONA MIRROR GLAZE &nbsp;•&nbsp; TAHITIAN VANILLA BEAN &nbsp;•&nbsp; NO ARTIFICIAL PRESERVATIVES &nbsp;•&nbsp; 
          HANDCRAFTED IN SMALL BATCHES &nbsp;•&nbsp; 72-HOUR LAMINATED CROISSANTS &nbsp;•&nbsp; 70% BELGIAN COUVERTURE CHOCOLATE &nbsp;•&nbsp; FRESH MAHABALESHWAR STRAWBERRIES &nbsp;•&nbsp; 
        </div>
      </div>

      {/* 4. CURATED SIGNATURE COLLECTION HIGHLIGHT */}
      <section className="page-container" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="page-header">
          <p className="small-caps page-pretitle">The Patisserie Counter</p>
          <h2 className="page-title">Handcrafted Daily Favorites</h2>
          <p className="page-description">
            Each creation is an exploration of texture, temperature, and provenance — prepared fresh at dawn using European butter and untamed seasonal ingredients.
          </p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button 
            className="btn-secondary" 
            style={{ padding: '14px 36px', fontSize: '0.9rem' }}
            onClick={() => onNavigate('products')}
          >
            <span>View All Patisserie &amp; Viennoiserie</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 5. CRAFT PHILOSOPHY SECTION */}
      <section style={{ background: 'var(--bg-subtle)', padding: '5rem 4vw', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="small-caps" style={{ color: 'var(--accent-caramel)' }}>The Philosophy</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginTop: '0.5rem' }}>
              Why We Take Three Days To Make One Croissant
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <Clock size={28} color="var(--accent-caramel)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Slow Cold Fermentation</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Time cannot be rushed. Our dough undergoes a 72-hour chilled proofing cycle, allowing natural levain cultures to unlock depth of flavor and digestible lightness.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <Heart size={28} color="var(--accent-caramel)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>84% European Butter Only</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We refuse vegetable shortenings and margarine. Every fold of our laminated dough incorporates pure churned sweet cream butter for that shattering, melt-in-the-mouth texture.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <Award size={28} color="var(--accent-caramel)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Small Batches, No Freezers</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                We bake in strict limited quantities every single morning. When today’s batch sells out, the ovens cool until tomorrow’s fresh sunrise bake.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
