import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ShoppingBag, CheckCircle2, CreditCard, Smartphone, Banknote, ShieldCheck, ArrowRight, Truck } from 'lucide-react';

export default function CheckoutPage({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart, onNavigate }) {
  const [formData, setFormData] = useState({
    name: 'Eleanor Vance',
    email: 'eleanor.vance@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 4B, Silver Oak Manor, Kensington Road',
    city: 'Mumbai',
    pincode: '400050',
    deliveryDate: new Date().toISOString().split('T')[0],
    deliverySlot: 'morning',
    notes: 'Please add a birthday candle and write "Happy Birthday Sarah!" on the card.',
    paymentMethod: 'upi'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(null);

  // If cart is empty, show a polite notice or dummy default item
  const hasItems = cartItems.length > 0;
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal >= 999 || subtotal === 0 ? 0 : 50;
  const gst = Math.round(subtotal * 0.05); // 5% bakery GST
  const grandTotal = subtotal + deliveryFee + gst;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!hasItems) {
      alert('Your cart is empty. Please add delicious pastries before checking out!');
      return;
    }

    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      const orderId = 'CC-' + Math.floor(100000 + Math.random() * 900000);
      setOrderConfirmed({
        orderId,
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        items: [...cartItems],
        total: grandTotal,
        paymentMethod: formData.paymentMethod,
        address: `${formData.address}, ${formData.city} - ${formData.pincode}`,
        customerName: formData.name
      });

      // Confetti celebration!
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B87D4B', '#C59B63', '#2D2824', '#F3EFEA']
      });

      onClearCart();
    }, 1200);
  };

  return (
    <div className="page-container" id="checkout-page">
      <div className="page-header" style={{ marginBottom: '2.5rem' }}>
        <p className="small-caps page-pretitle">Safe &amp; Chilled Delivery</p>
        <h1 className="page-title">Complete Your Order</h1>
        <p className="page-description">
          All our cakes are dispatched in specialized temperature-controlled insulated cartons to ensure peak freshness upon arrival.
        </p>
      </div>

      <div className="checkout-layout">
        {/* Left Column: Checkout Form */}
        <div className="checkout-card">
          <form onSubmit={handlePlaceOrder}>
            <h2 className="checkout-section-title font-serif">1. Delivery Details</h2>

            <div className="form-grid">
              <div className="form-group full-width">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-input" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  className="form-input" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  className="form-input" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">Delivery Street Address *</label>
                <input 
                  type="text" 
                  name="address" 
                  className="form-input" 
                  value={formData.address} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">City *</label>
                <input 
                  type="text" 
                  name="city" 
                  className="form-input" 
                  value={formData.city} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">PIN / Postal Code *</label>
                <input 
                  type="text" 
                  name="pincode" 
                  className="form-input" 
                  value={formData.pincode} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Delivery Date *</label>
                <input 
                  type="date" 
                  name="deliveryDate" 
                  className="form-input" 
                  value={formData.deliveryDate} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Time Slot *</label>
                <select 
                  name="deliverySlot" 
                  className="form-input" 
                  value={formData.deliverySlot} 
                  onChange={handleChange}
                >
                  <option value="morning">Morning (8:30 AM – 12:00 PM)</option>
                  <option value="afternoon">Afternoon (1:00 PM – 5:00 PM)</option>
                  <option value="evening">Evening (5:30 PM – 8:30 PM)</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label className="form-label">Special Cake Note / Greeting Card (Optional)</label>
                <textarea 
                  name="notes" 
                  rows={2} 
                  className="form-input" 
                  value={formData.notes} 
                  onChange={handleChange}
                  placeholder="e.g. Write 'Happy Anniversary' on the cake plaque" 
                />
              </div>
            </div>

            {/* Payment Method Radio Buttons */}
            <h2 className="checkout-section-title font-serif" style={{ marginTop: '2.5rem' }}>
              2. Payment Method
            </h2>

            <div className="payment-methods-grid">
              <label className={`payment-option ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="upi" 
                  checked={formData.paymentMethod === 'upi'} 
                  onChange={handleChange} 
                />
                <Smartphone size={20} color="var(--accent-caramel)" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>UPI / Instant Pay (GPay, PhonePe, Paytm)</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Scan QR code or pay via UPI ID</div>
                </div>
              </label>

              <label className={`payment-option ${formData.paymentMethod === 'card' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="card" 
                  checked={formData.paymentMethod === 'card'} 
                  onChange={handleChange} 
                />
                <CreditCard size={20} color="var(--accent-caramel)" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>Credit / Debit Card</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Visa, Mastercard, RuPay &amp; Amex accepted</div>
                </div>
              </label>

              <label className={`payment-option ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="cod" 
                  checked={formData.paymentMethod === 'cod'} 
                  onChange={handleChange} 
                />
                <Banknote size={20} color="var(--accent-caramel)" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>Cash on Delivery (COD)</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pay with cash or card upon doorstep receipt</div>
                </div>
              </label>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '0.95rem' }}
                disabled={isProcessing}
                id="place-order-button"
              >
                {isProcessing ? 'Processing Order...' : `Place Order — ₹${grandTotal}`}
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '1.25rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              <ShieldCheck size={16} />
              <span>256-Bit SSL Encrypted &amp; Temperature-Protected Guarantee</span>
            </div>
          </form>
        </div>

        {/* Right Column: Order Summary Block */}
        <div className="checkout-card" style={{ background: 'var(--bg-subtle)' }}>
          <h2 className="checkout-section-title font-serif">Order Summary</h2>

          {!hasItems ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-muted)' }}>
              <ShoppingBag size={32} style={{ margin: '0 auto 10px auto', opacity: 0.5 }} />
              <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '6px' }}>Your basket is currently empty</p>
              <p style={{ fontSize: '0.8rem', marginBottom: '1.25rem' }}>Please select handcrafted items from our catalog.</p>
              <button className="btn-secondary" onClick={() => onNavigate('products')}>
                Explore Menu
              </button>
            </div>
          ) : (
            <>
              <div className="summary-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="summary-item">
                    <img src={item.image} alt={item.name} className="summary-thumb" />
                    <div className="summary-info">
                      <p className="summary-name">{item.name}</p>
                      <p className="summary-sub">Qty: {item.quantity} &times; ₹{item.price}</p>
                    </div>
                    <span className="summary-price">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="summary-rows">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span style={{ fontWeight: 600 }}>₹{subtotal}</span>
                </div>
                <div className="summary-row">
                  <span>Refrigerated Delivery</span>
                  <span>{deliveryFee === 0 ? <strong style={{ color: 'green' }}>FREE</strong> : `₹${deliveryFee}`}</span>
                </div>
                <div className="summary-row">
                  <span>Taxes (5% Bakery GST)</span>
                  <span>₹{gst}</span>
                </div>
                <div className="summary-row total">
                  <span>Total Due</span>
                  <span style={{ color: 'var(--accent-caramel)' }}>₹{grandTotal}</span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', background: '#fff', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', display: 'flex', gap: '10px' }}>
                <Truck size={20} color="var(--accent-caramel)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <strong>Insulated Packaging:</strong> Every delicate cake is secured with ice chill-packs in food-safe rigid presentation boxes.
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Order Confirmation Modal */}
      {orderConfirmed && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-content" style={{ maxWidth: '520px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(184, 125, 75, 0.12)', color: 'var(--accent-caramel)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <CheckCircle2 size={36} />
            </div>

            <p className="small-caps" style={{ color: 'var(--accent-caramel)', marginBottom: '4px' }}>Order Confirmed</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem' }}>Merci, {orderConfirmed.customerName}!</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Your order <strong style={{ color: 'var(--text-primary)' }}>{orderConfirmed.orderId}</strong> has been transmitted to our head pastry chef. Fresh baking will begin prior to your scheduled delivery slot.
            </p>

            <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.25rem', textAlign: 'left', fontSize: '0.82rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div><strong>Delivery Address:</strong> {orderConfirmed.address}</div>
              <div><strong>Payment Method:</strong> {orderConfirmed.paymentMethod.toUpperCase()} (Confirmed)</div>
              <div><strong>Total Amount:</strong> ₹{orderConfirmed.total}</div>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button 
                className="btn-primary" 
                onClick={() => {
                  setOrderConfirmed(null);
                  onNavigate('home');
                }}
              >
                Back to Home
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => {
                  setOrderConfirmed(null);
                  onNavigate('products');
                }}
              >
                Order More Items
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
