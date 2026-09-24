import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ShoppingBag, ArrowUpRight, ArrowDown } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function DiscCarousel({ onAddToCart, onNavigateToProduct, onExploreMenu }) {
  // 8 handcrafted signature cakes
  const cakeProducts = PRODUCTS.filter((p) => p.category === 'Cakes');

  const [activeIndex, setActiveIndex] = useState(0);
  const [smoothIndex, setSmoothIndex] = useState(0);

  const scrollWrapperRef = useRef(null);
  const stickyContainerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const smoothIndexRef = useRef(0);
  const targetIndexRef = useRef(0);
  const dimensionsRef = useRef({ top: 0, travel: 1 });

  // Sync activeIndex ref
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // High-performance smooth lerp loop for disc sliding animation
  useEffect(() => {
    let animId;
    const update = () => {
      const diff = targetIndexRef.current - smoothIndexRef.current;
      if (Math.abs(diff) > 0.001) {
        // Responsive 0.35 lerp gives silky feel with zero sluggishness/lag
        smoothIndexRef.current += diff * 0.35;
        setSmoothIndex(smoothIndexRef.current);
      } else if (smoothIndexRef.current !== targetIndexRef.current) {
        smoothIndexRef.current = targetIndexRef.current;
        setSmoothIndex(targetIndexRef.current);
      }
      animId = requestAnimationFrame(update);
    };
    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Cache scroll wrapper dimensions to avoid layout thrashing on every scroll tick
  const updateDimensions = useCallback(() => {
    if (!scrollWrapperRef.current || !stickyContainerRef.current) return;
    const rect = scrollWrapperRef.current.getBoundingClientRect();
    const currentScrollY = window.scrollY || window.pageYOffset;
    const wrapperTopFromDoc = currentScrollY + rect.top;
    const stickyTop = 72; // height of sticky navbar
    const wrapperHeight = scrollWrapperRef.current.offsetHeight;
    const stickyHeight = stickyContainerRef.current.offsetHeight;
    dimensionsRef.current = {
      top: wrapperTopFromDoc - stickyTop,
      travel: Math.max(1, wrapperHeight - stickyHeight)
    };
  }, []);

  // Ultra fast scroll listener (reads window.scrollY directly without DOM recalculations)
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY || window.pageYOffset;
    const { top, travel } = dimensionsRef.current;
    const scrolledDistance = scrollY - top;
    const rawProgress = scrolledDistance / travel;
    const clampedProgress = Math.max(0, Math.min(1, rawProgress));

    // Continuous floating target index across all 8 cakes (0.0 to 7.0)
    const cakeCount = cakeProducts.length;
    const floatTarget = clampedProgress * (cakeCount - 1);
    targetIndexRef.current = floatTarget;

    const discrete = Math.max(0, Math.min(cakeCount - 1, Math.round(floatTarget)));
    if (discrete !== activeIndexRef.current) {
      activeIndexRef.current = discrete;
      setActiveIndex(discrete);
    }
  }, [cakeProducts.length]);

  // Initialize and listen to scroll and resize
  useEffect(() => {
    updateDimensions();
    handleScroll();

    const onResize = () => {
      updateDimensions();
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [handleScroll, updateDimensions]);

  // Jump / smooth-scroll to specific cake index in document scroll track
  const scrollToCake = useCallback((index) => {
    updateDimensions();
    const cakeCount = cakeProducts.length;
    const clampedIndex = Math.max(0, Math.min(cakeCount - 1, index));
    const { top, travel } = dimensionsRef.current;
    const targetProgress = clampedIndex / (cakeCount - 1);
    const targetScrollY = top + (targetProgress * travel);

    window.scrollTo({
      top: Math.max(0, targetScrollY),
      behavior: 'smooth'
    });
  }, [cakeProducts.length, updateDimensions]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!scrollWrapperRef.current) return;
      const rect = scrollWrapperRef.current.getBoundingClientRect();
      // Only capture if hero wrapper is in viewport
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          if (activeIndexRef.current < cakeProducts.length - 1) {
            e.preventDefault();
            scrollToCake(activeIndexRef.current + 1);
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          if (activeIndexRef.current > 0) {
            e.preventDefault();
            scrollToCake(activeIndexRef.current - 1);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollToCake, cakeProducts.length]);

  // Current active product for panel
  const activeProduct = cakeProducts[activeIndex] || cakeProducts[0];

  // Helper to calculate disc positions along diagonal cascade with hardware acceleration
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
      transform: `translate3d(-50%, -50%, 0) rotate(${rotation}deg) scale(${scale})`,
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
      updateDimensions();
      const { top, travel } = dimensionsRef.current;
      window.scrollTo({
        top: top + travel + 60,
        behavior: 'smooth'
      });
    }
  };

  const isFinalCake = activeIndex === cakeProducts.length - 1;

  return (
    <div className="hero-scroll-wrapper" ref={scrollWrapperRef}>
      <div className="hero-sticky-container" ref={stickyContainerRef}>
        <section className="hero-section" id="hero">
          <div className="hero-main-stage">
            {/* Left-side Pinned Film-Credits Info Panel */}
            <div className="hero-info-panel">
              <div className="hero-brand-top">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <p className="small-caps sub">Selection No. 0{activeIndex + 1} / 0{cakeProducts.length}</p>
                  <span style={{ fontSize: '0.72rem', color: isFinalCake ? 'var(--accent-caramel)' : 'var(--text-muted)', fontWeight: 600 }}>
                    {isFinalCake ? 'All 8 Cakes Explored' : `${Math.round(((activeIndex + 1) / cakeProducts.length) * 100)}% Displayed`}
                  </span>
                </div>

                {/* 8-Step Interactive Progress Bar */}
                <div style={{ display: 'flex', gap: '5px', margin: '6px 0 16px 0' }} role="tablist" aria-label="Cakes gallery">
                  {cakeProducts.map((cake, i) => (
                    <button
                      key={cake.id}
                      onClick={() => scrollToCake(i)}
                      title={`Jump to ${cake.shortName}`}
                      style={{
                        flex: 1,
                        height: '4px',
                        borderRadius: '2px',
                        background: i === activeIndex ? 'var(--accent-caramel)' : i < activeIndex ? 'rgba(197, 160, 89, 0.45)' : 'rgba(0, 0, 0, 0.08)',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        transition: 'background 0.3s ease, transform 0.2s ease',
                        transform: i === activeIndex ? 'scaleY(1.6)' : 'none'
                      }}
                      aria-label={`View ${cake.shortName}`}
                    />
                  ))}
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
                  color: isFinalCake ? 'var(--accent-caramel)' : 'var(--text-muted)', 
                  fontSize: '0.75rem', 
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase',
                  fontWeight: isFinalCake ? 600 : 500,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                title={isFinalCake ? 'Scroll down to explore menu' : 'Click to jump to full menu'}
              >
                <ArrowDown size={14} style={{ animation: 'bounceSlow 2s infinite' }} />
                <span>
                  {isFinalCake 
                    ? 'All 8 cakes displayed • Continue scrolling down ↓' 
                    : `Scroll to view all 8 cakes (${activeIndex + 1}/8)`}
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
                      onClick={() => scrollToCake(index)}
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
      </div>
    </div>
  );
}
