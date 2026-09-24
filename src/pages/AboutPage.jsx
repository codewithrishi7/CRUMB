import React from 'react';
import { ArrowRight, Sparkles, Coffee, Heart, Award } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="page-container" id="about-us-page">
      <div className="page-header" style={{ marginBottom: '3rem' }}>
        <p className="small-caps page-pretitle">Our Heritage &amp; Craft</p>
        <h1 className="page-title">The Story of Crumb &amp; Co.</h1>
      </div>

      {/* Main Brand Story & Kitchen Founder Photo */}
      <div className="about-hero-grid">
        <div>
          {/* Exact brief required brand story */}
          <div className="about-quote-box">
            <p className="about-quote-text">
              “Crumb &amp; Co. started in a home kitchen and grew into a neighborhood favorite for handcrafted cakes and pastries. Everything is baked fresh in small batches with real butter, real cream, and no shortcuts — because dessert should feel like a small celebration, however ordinary the day.”
            </p>
            <span className="about-founder-tag">
              — Chef Camille Vane &amp; Antoine Laurent, Co-Founders
            </span>
          </div>

          <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p>
              In an era of mass-produced confectionary and pre-mix frostings, we chose the slower, uncompromising path. We believe in the quiet magic of flour dusted over cold marble, the patient wait for yeast to bloom through seventy-two hours, and the golden sheen of real churned butter caramelizing in high heat.
            </p>
            <p>
              Every tart is rolled by hand; every chocolate sponge is steeped in single-origin cocoa from family-run plantations; every strawberry is inspected for peak ripeness before it ever touches a sponge.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <button className="btn-primary" onClick={() => onNavigate('products')}>
              <span>Taste Our Daily Bakes</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Founder & Kitchen Photo */}
        <div className="about-image-wrapper">
          <img 
            src="/images/founder-kitchen.jpg" 
            alt="Founder Chef Camille Vane crafting pastry dough in the sunlit bakery kitchen" 
          />
          <div className="about-image-caption">
            <strong>The Atelier Kitchen</strong> — Hand-laminating French butter croissant dough on marble.
          </div>
        </div>
      </div>

      {/* Pillars of Craft */}
      <div style={{ marginTop: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="small-caps" style={{ color: 'var(--accent-caramel)' }}>Honest Ingredients</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem' }}>Our Four Inviolable Standards</h2>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-num">01</div>
            <h3 className="pillar-title font-serif">AOP Charentes Butter</h3>
            <p className="pillar-desc">
              84% butterfat European cultured butter gives our croissants their signature amber sheen, crisp exterior, and melt-in-mouth honeycomb crumb.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">02</div>
            <h3 className="pillar-title font-serif">Couverture Chocolate</h3>
            <p className="pillar-desc">
              We exclusively temper 70% dark Belgian and Valrhona French cocoa, balancing rich bittersweet cocoa notes with velvet smoothness.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">03</div>
            <h3 className="pillar-title font-serif">Daily Small Batches</h3>
            <p className="pillar-desc">
              No industrial freezers. When our display sells out each afternoon, that is the end of the bake. Tomorrow begins again at 4:00 AM.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-num">04</div>
            <h3 className="pillar-title font-serif">Direct Orchard Fruits</h3>
            <p className="pillar-desc">
              Hand-selected strawberries, golden apricots, and sun-ripened berries sourced directly from regional growers and glazed with natural reduction.
            </p>
          </div>
        </div>
      </div>

      {/* Atelier Visit Section */}
      <div style={{ marginTop: '5rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '3.5rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'center' }}>
        <div>
          <span className="small-caps" style={{ color: 'var(--accent-caramel)' }}>Visit The Workshop</span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', margin: '0.5rem 0 1rem 0' }}>
            Come Smell The Morning Butter
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Stop by for your morning flat white and warm croissant fresh off the tray, or speak to our cake consultants about tailoring a centrepiece for your family milestone.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
            <div><strong>Hours:</strong> Tuesday to Sunday, 7:30 AM – 8:00 PM (Mondays we knead and rest)</div>
            <div><strong>Address:</strong> 42 Heritage Lane, French Quarters</div>
            <div><strong>Contact:</strong> +91 98200 45678 / hello@crumbandco.com</div>
          </div>
        </div>

        <div style={{ background: '#fff', padding: '2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', textAlign: 'center' }}>
          <Coffee size={36} color="var(--accent-caramel)" style={{ margin: '0 auto 12px auto' }} />
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>The Baker’s Table</h4>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Reserve a 4-course weekend dessert tasting menu paired with artisanal coffees and single-origin teas.
          </p>
          <button 
            className="btn-primary" 
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => alert('Baker’s Table reservations for this weekend open every Wednesday at 10 AM. You can also call us directly!')}
          >
            Reserve a Tasting
          </button>
        </div>
      </div>
    </div>
  );
}
