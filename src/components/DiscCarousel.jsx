import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ShoppingBag, ArrowUpRight, ArrowDown } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function DiscCarousel({ onAddToCart, onNavigateToProduct, onExploreMenu }) {
  // 8 handcrafted signature cakes
  const cakeProducts = PRODUCTS.filter(p => p.category === 'Cakes');

  const [activeIndex, setActiveIndex] = useState(0);
  const [smoothIndex, setSmoothIndex] = useState(0);

  const activeIndexRef = useRef(0);
  const smoothIndexRef = useRef(0);
  const lastWheelTimeRef = useRef(0);
  const containerRef = useRef(null);
  const touchStartYRef = useRef(0);
  const touchStartXRef = useRef(0);

  // Keep ref in sync
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Smooth lerp loop for the disc sliding animation
  useEffect(() => {
    let animId;
    const update = () => {
      const diff = activeIndexRef.current - smoothIndexRef.current;
      if (Math.abs(diff) > 0.002) {
        smoothIndexRef.current += diff * 0.14; // smooth easing
        setSmoothIndex(smoothIndexRef.current);
      } else {
        smoothIndexRef.current = activeIndexRef.current;
        setSmoothIndex(activeIndexRef.current);
      }
      animId = requestAnimationFrame(update);
    };
    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Jump to specific cake
  const goToCake = useCallback((index) => {
    const clamped = Math.max(0, Math.min(cakeProducts.length - 1, index));
    setActiveIndex(clamped);
    activeIndexRef.current = clamped;
  }, [cakeProducts.length]);

  const handlePrev = useCallback(() => {
    goToCake(activeIndexRef.current - 1);
  }, [goToCake]);

  const handleNext = useCallback(() => {
    goToCake(activeIndexRef.current + 1);
  }, [goToCake]);

  // Sticky Wheel Handler:
  // When at the top of the page, scrolling down slides through all cakes first.
  // The screen stays stuck on the hero section until the animation ends (cake 8).
  // Once cake 8 is reached, scrolling down naturally scrolls the page down.
  // There is NO blank space beneath the hero!
  useEffect(() => {
    const handleWheel = (e) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Only engage sticky hero scroll when viewport is at the hero section
      if (scrollY > 40) return;

      const now = Date.now();
      const isQuickFlick = now - lastWheelTimeRef.current < 260;

      // Scrolling Down
      if (e.deltaY > 15) {
        if (activeIndexRef.current < cakeProducts.length - 1) {
          // Prevent page scroll! Screen stays stuck on hero!
          e.preventDefault();
          if (!isQuickFlick) {
            goToCake(activeIndexRef.current + 1);
            lastWheelTimeRef.current = now;
          }
        } else {
          // User is at the LAST cake (8/8). Allow page to naturally scroll down to CTA & Catalog!
          // No preventDefault() here
        }
      } 
      // Scrolling Up
      else if (e.deltaY < -15) {
        if (scrollY <= 5 && activeIndexRef.current > 0) {
          // Prevent page bounce; glide back to previous cakes
          e.preventDefault();
          if (!isQuickFlick) {
            goToCake(activeIndexRef.current - 1);
            lastWheelTimeRef.current = now;
          }
        }
      }
    };

    // Touch event handlers for mobile devices
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
      touchStartXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 40) return;

      const deltaY = touchStartYRef.current - e.touches[0].clientY;
      const deltaX = touchStartXRef.current - e.touches[0].clientX;
      const now = Date.now();

      if (Math.abs(deltaY) > 35 || Math.abs(deltaX) > 35) {
        if (deltaY > 0 || deltaX > 0) {
          // Swipe down/left -> next cake
          if (activeIndexRef.current < cakeProducts.length - 1) {
            e.preventDefault();
            if (now - lastWheelTimeRef.current > 280) {
              goToCake(activeIndexRef.current + 1);
              lastWheelTimeRef.current = now;
              touchStartYRef.current = e.touches[0].clientY;
              touchStartXRef.current = e.touches[0].clientX;
            }
          }
        } else {
          // Swipe up/right -> prev cake
          if (scrollY <= 5 && activeIndexRef.current > 0) {
            e.preventDefault();
            if (now - lastWheelTimeRef.current > 280) {
              goToCake(activeIndexRef.current - 1);
              lastWheelTimeRef.current = now;
              touchStartYRef.current = e.touches[0].clientY;
              touchStartXRef.current = e.touches[0].clientX;
            }
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [cakeProducts.length, goToCake]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (window.scrollY <= 100 && activeIndexRef.current < cakeProducts.length - 1) {
          e.preventDefault();
          handleNext();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (window.scrollY <= 100 && activeIndexRef.current > 0) {
          e.preventDefault();
          handlePrev();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, cakeProducts.length]);

  // Current active product
  const activeProduct = cakeProducts[activeIndex] || cakeProducts[0];

  // Helper to calculate disc positions along diagonal cascade
  // As smoothIndex increases (scrolling down), effectiveDiff decreases (moves left)
  // This causes cakes to come right to left horizontally smoothly!
  const getDiscStyle = (index) => {
    const effectiveDiff = index - smoothIndex;

    const xBase = 46 + effectiveDiff * 30; // percent across container
    const yBase = -effectiveDiff * 13;     // vertical stagger for diagonal rise
    const rotation = effectiveDiff * 8.5;  // tilt angle
    const absDiff = Math.abs(effectiveDiff);
    const scale = Math.max(0.65, 1.18 - absDiff * 0.22);
    const zIndex = Math.round(30 - absDiff * 5);
    const opacity = Math.max(0, 1 - absDiff * 0.28);

    return {
      left: `${xBase}%`,
      top: `calc(50% + ${yBase}%)`,
      transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
      zIndex,
      opacity,
      width: 'clamp(280px, 34vw, 460px)',
      height: 'clamp(280px, 34vw, 460px)',
      pointerEvents: absDiff > 2.5 ? 'none' : 'auto'
    };
  };

  // Scroll down past hero to catalog
  const handleScrollDownToCatalog = () => {
    const ctaStrip = document.getElementById('hero-cta-strip');
    if (ctaStrip) {
      ctaStrip.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight - 72, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero" ref={containerRef}>
      <div className="hero-main-stage">
        {/* Left-side Pinned Film-Credits Info Panel */}
        <div className="hero-info-panel">
          <div className="hero-brand-top">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <p className="small-caps sub">Selection No. 0{activeIndex + 1} / 0{cakeProducts.length}</p>
              <span style={{ fontSize: '0.72rem', color: 'var(--accent-caramel)', fontWeight: 600 }}>
                {activeIndex + 1 === cakeProducts.length ? 'Final Cake (Scroll down for menu)' : `${Math.round(((activeIndex + 1) / cakeProducts.length) * 100)}% Complete`}
              </span>
            </div>
            <h1 className="hero-product-title" key={activeProduct.id}>
              {activeProduct.shortName}
            </h1>
          </div>

          <div className="credits-metadata-block">
            <div className="credit-row">
              <span className="credit-label">BAKED BY</span>
              <span className="credit-value">{activeProduct.bakedBy}</span>
            </div>
            <div className="credit-row">
              <span className="credit-label">ESTABLISHED</span>
              <span className="credit-value">{activeProduct.established}</span>
            </div>
            <div className="credit-row">
              <span className="credit-label">SIGNATURE NOTES</span>
              <span className="credit-value">{activeProduct.signatureFlavors}</span>
            </div>
            <div className="credit-row">
              <span className="credit-label">PAIRING</span>
              <span className="credit-value">{activeProduct.pairing}</span>
            </div>
            <div className="credit-row">
              <span className="credit-label">PRICE</span>
              <span className="credit-value" style={{ color: 'var(--accent-caramel)', fontWeight: 600 }}>
                {activeProduct.formattedPrice}
              </span>
            </div>
          </div>

          <div className="hero-quick-action">
            <button 
              className="btn-primary" 
              onClick={() => onAddToCart(activeProduct)}
              aria-label={`Add ${activeProduct.name} to cart`}
            >
              <ShoppingBag size={16} />
              <span>Add to Basket</span>
            </button>
            <button 
              className="btn-secondary"
              onClick={() => onNavigateToProduct(activeProduct)}
              aria-label={`View full details of ${activeProduct.name}`}
            >
              <span>Details</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Scroll Guidance Helper */}
          <div 
            onClick={handleScrollDownToCatalog}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              marginTop: '1.5rem', 
              color: 'var(--text-muted)', 
              fontSize: '0.75rem', 
              letterSpacing: '0.08em', 
              textTransform: 'uppercase',
              cursor: 'pointer',
              userSelect: 'none'
            }}
            title="Click to jump straight to patisserie catalog"
          >
            <ArrowDown size={14} style={{ animation: 'bounceSlow 2s infinite' }} />
            <span>
              {activeIndex + 1 === cakeProducts.length 
                ? 'Scroll down for full menu ↓' 
                : `Scroll down to glide cakes (${activeIndex + 1}/${cakeProducts.length})`}
            </span>
          </div>
        </div>

        {/* Diagonal Disc Carousel Area */}
        <div className="disc-carousel-container">
          <div className="disc-track">
            {cakeProducts.map((product, index) => {
              const style = getDiscStyle(index);
              const isCenter = index === activeIndex;

              return (
                <div
                  key={product.id}
                  className={`cake-disc ${isCenter ? 'active-center' : ''}`}
                  style={style}
                  onClick={() => goToCake(index)}
                  title={`Click to view ${product.name}`}
                >
                  {/* Outer Beveled Metallic Rim */}
                  <div className="disc-outer-rim" />

                  {/* Concentric CD Grooves Overlay */}
                  <div className="disc-grooves" />

                  {/* Conic Specular Highlight Sheen */}
                  <div className="disc-sheen" />

                  {/* Disc Artwork (Circular Top-Down Cake Image) */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="disc-image"
                    loading="eager"
                  />

                  {/* Micro-Typography printed along disc rim like CD matrix code */}
                  <div className="disc-edge-text">
                    CRUMB &amp; CO. • {product.shortName.toUpperCase()} • EDITION 2026 • 100% REAL BUTTER
                  </div>

                  {/* Center Spindle Hub & Clear Inner Hole */}
                  <div className="disc-center-hub">
                    <div className="disc-center-clear">
                      <div className="disc-center-hole" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
