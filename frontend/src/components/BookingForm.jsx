import React, { useState, useRef, useEffect } from 'react';

/**
 * BookingForm – Pre-booking form section.
 * Matches the updated Figma booking section with:
 * - Title: BOOK YOUR KLX®110R
 * - 2-column clean grid layout
 * - Phone number with India flag prefix
 * - Booking Amount receipt display (₹5,000)
 * - Terms bullet points and checkbox
 * - Centered green CTA button
 */

const STATES = ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Telangana', 'West Bengal', 'Gujarat'];
const DEALERS = ['Kawasaki Delhi Central', 'Kawasaki Mumbai West', 'Kawasaki Bangalore South', 'Kawasaki Chennai East'];

const BookingForm = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pinCode: '',
    state: '',
    address: '',
    dealer: '',
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData(prev => ({ ...prev, [e.target.name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreed) {
      setSubmitted(true);
    } else {
      alert("Please accept the Privacy Policy and Terms and Conditions.");
    }
  };

  const inputStyle = {
    width: '100%',
    height: '46px',
    padding: '0 16px',
    border: '1px solid #737373',
    backgroundColor: '#FFFFFF',
    fontFamily: '"Arial", sans-serif',
    fontSize: '15px',
    color: '#171717',
    outline: 'none',
    borderRadius: '2px',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: '"Arial", sans-serif',
    fontSize: '15px',
    fontWeight: 600,
    color: '#171717',
    marginBottom: '8px',
  };

  return (
    <section
      ref={sectionRef}
      id="booking-form"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '100px 20px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Container to constrain width */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}>

        {/* Title */}
        <h2 style={{
          fontFamily: '"Impact", "Arial Black", sans-serif',
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 400,
          color: '#0A1128', // Dark navy/black from screenshot
          lineHeight: '1.2',
          textTransform: 'uppercase',
          textAlign: 'center',
          letterSpacing: '1px',
          marginBottom: '60px',
          marginTop: 0,
        }}>
          Book Your KLX®110R
        </h2>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', border: '1px solid #E5E5E5', borderRadius: '4px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
            <h3 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '32px', color: 'var(--kawasaki-green)' }}>
              Booking Request Received!
            </h3>
            <p style={{ fontSize: '18px', color: '#737373' }}>
              We will process your request and a dealership representative will contact you shortly to finalize the ₹5,000 payment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            {/* Full Name (Full Width) */}
            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="fullName" style={labelStyle}>Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'var(--kawasaki-green)'}
                onBlur={(e) => e.target.style.borderColor = '#737373'}
              />
            </div>

            {/* Email & Phone (2 Columns) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label htmlFor="email" style={labelStyle}>Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = 'var(--kawasaki-green)'}
                  onBlur={(e) => e.target.style.borderColor = '#737373'}
                />
              </div>

              <div>
                <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                <div style={{
                  display: 'flex',
                  height: '46px',
                  border: '1px solid #737373',
                  borderRadius: '2px',
                  backgroundColor: '#FFFFFF',
                  overflow: 'hidden'
                }}>
                  {/* Flag & Prefix */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    borderRight: '1px solid #737373',
                    fontSize: '15px',
                    fontFamily: '"Arial", sans-serif',
                    color: '#171717',
                    backgroundColor: '#FAFAFA'
                  }}>
                    <span style={{ marginRight: '8px', fontSize: '18px' }}>🇮🇳</span> +91
                  </div>
                  {/* Input field */}
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9989898989"
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      padding: '0 16px',
                      fontSize: '15px',
                      fontFamily: '"Arial", sans-serif',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Pin Code & State (2 Columns) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label htmlFor="pinCode" style={labelStyle}>Pin Code</label>
                <input
                  id="pinCode"
                  type="text"
                  name="pinCode"
                  required
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="41102"
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = 'var(--kawasaki-green)'}
                  onBlur={(e) => e.target.style.borderColor = '#737373'}
                />
              </div>

              <div>
                <label htmlFor="state" style={labelStyle}>State/District</label>
                <select
                  id="state"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")', backgroundRepeat: 'no-repeat', backgroundPositionX: '98%', backgroundPositionY: '50%' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--kawasaki-green)'}
                  onBlur={(e) => e.target.style.borderColor = '#737373'}
                >
                  <option value="">State/District</option>
                  {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            {/* Address (Full Width) */}
            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="address" style={labelStyle}>Address</label>
              <input
                id="address"
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="302, Sunshine Apartments,MG Road, Near City Mall"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'var(--kawasaki-green)'}
                onBlur={(e) => e.target.style.borderColor = '#737373'}
              />
            </div>

            {/* Dealership (Half Width / Responsive) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
              <div>
                <label htmlFor="dealer" style={labelStyle}>Dealership</label>
                <select
                  id="dealer"
                  name="dealer"
                  required
                  value={formData.dealer}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")', backgroundRepeat: 'no-repeat', backgroundPositionX: '98%', backgroundPositionY: '50%' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--kawasaki-green)'}
                  onBlur={(e) => e.target.style.borderColor = '#737373'}
                >
                  <option value="">Choose Dealership</option>
                  {DEALERS.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div /> {/* Empty div to keep Dealership on the left half */}
            </div>

            {/* Booking Amount Receipt Section */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              borderBottom: '1px solid #D4D4D4',
              paddingBottom: '16px',
              marginBottom: '24px'
            }}>
              <h3 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '32px', color: '#0A1128', margin: 0, fontWeight: 400 }}>
                Booking Amount
              </h3>
              <h3 style={{ fontFamily: '"Impact", "Arial Black", sans-serif', fontSize: '32px', color: '#0A1128', margin: 0, fontWeight: 400 }}>
                ₹5,000
              </h3>
            </div>

            {/* Bullet Points */}
            <ul style={{
              listStyleType: 'disc',
              paddingLeft: '20px',
              color: '#737373',
              fontFamily: '"Arial", sans-serif',
              fontSize: '15px',
              lineHeight: '1.6',
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <li>The booking amount Rs.5,000 is a down payment and shall be adjusted against overall vehicle price at the time of final quotation</li>
              <li>Deliver will be based on stock availability</li>
              <li>In certain bookings, the delivery period might take more than 45 days</li>
              <li>Variant & color is subject to availability</li>
            </ul>

            {/* Custom Checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                style={{
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                  accentColor: 'var(--kawasaki-green, #69BE28)'
                }}
              />
              <label htmlFor="agreed" style={{ fontFamily: '"Arial", sans-serif', fontSize: '15px', color: '#171717', cursor: 'pointer' }}>
                I here by accept to the <a href="/privacy-policy" style={{ color: '#171717', textDecoration: 'underline', fontStyle: 'italic' }}>Privacy Policy</a> and <a href="/terms-and-conditions" style={{ color: '#171717', textDecoration: 'underline', fontStyle: 'italic' }}>Terms and Conditions</a>
              </label>
            </div>

            {/* Submit Button */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--kawasaki-green, #69BE28)',
                  color: '#FFFFFF',
                  fontFamily: '"Impact", "Arial Black", sans-serif',
                  fontSize: '18px',
                  letterSpacing: '1px',
                  border: 'none',
                  padding: '16px 64px',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5ca823'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--kawasaki-green, #69BE28)'}
              >
                PRE-BOOK NOW
              </button>
            </div>

          </form>
        )}
      </div>
    </section>
  );
};

export default BookingForm;